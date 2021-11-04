from django.shortcuts import render
from rest_framework import viewsets

from api.serializers import ContactSerializer
from api.models import Contact


class ContactViewSet(viewsets.ModelViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

    def create(self, request, *args, **kwargs):
        return super(ContactViewSet, self).create(request, *args, **kwargs)
