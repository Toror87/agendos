from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework.decorators import action
from rest_framework.response import Response


from api.serializers import ContactSerializer
from api.serializers import RegisterSerializer

from api.models import Contact

# Creo la view class para los contactos
class ContactViewSet(viewsets.ModelViewSet):
    # elijo el serializador correspondiente a la view
    serializer_class = ContactSerializer
    # obtengo el models de contactos
    queryset = Contact.objects.all()

    # permite crear nuevo registro
    def create(self, request, *args, **kwargs):

        # tomo el id del usuario activo (logueado)
        active_user_id = self.request.user.id
        # al campo "user" de la request, que es la FK de Contact,
        # le asigno el id del usuario activo
        request.data["user"] = active_user_id
        return super(ContactViewSet, self).create(request, *args, **kwargs)

    # filtro todos los contactos de usuario activo o por nombre
    def get_queryset(self):
        # tomo el usuario logueado
        active_user = self.request.user
        # obtengo todos los contactos del usuario logueado
        queryset = active_user.contacts.all()

        # tomo el parámetro de filtro
        name = self.request.query_params.get('name')

        # si el parámetro existe
        if name is not None:
            # filtro
            queryset = queryset.filter(name__contains=name)

        # lo retorno al FE o todos los contactos del usuario o el filtro
        return queryset

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
