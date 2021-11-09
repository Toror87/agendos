from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from api.serializers import ContactSerializer
from api.serializers import RegisterSerializer
from api.serializers import MeSerializer


from api.models import Contact

# Creo la view class para los contactos
class ContactViewSet(viewsets.ModelViewSet):
    # elijo el serializador correspondiente a la view
    serializer_class = ContactSerializer
    # obtengo el models de contactos
    queryset = Contact.objects.all()

    # permite crear nuevo registro
    def create(self, request, *args, **kwargs):
        return super(ContactViewSet, self).create(request, *args, **kwargs)

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me(request):
    # le doy una instancia del modelo que quiero serializar
    serializer = MeSerializer(request.user)

