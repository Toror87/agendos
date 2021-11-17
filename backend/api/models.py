from django.db import models
from django.contrib.auth import get_user_model

from phonenumber_field.modelfields import PhoneNumberField

''' Modelo para los contactos 
    hereda de models.Model y utiliza sus campos'''
class Contact(models.Model):
    # necesito una foreignKey por cada usuario
    user = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
        related_name='contacts'
    )
    # el registro del contacto debe poseer un nombre, sí o sí,
    # por defecto un campo de tipo CharField es blank=False
    name = models.CharField(max_length=50)
    # el teléfono NO es un requerimiento
    # PhoneNumberField funciona con base en CharField, pero
    # almacena números de teléfono válidos, por defecto
    # en formato de numero internacional (e.g '+41524204242').
    phone = PhoneNumberField(null=True, blank=True)
    # phone = models.CharField(max_length=20, unique=True, null=True, blank=True)
    # el domicilio no es necesario
    address = models.CharField(max_length=50, null=True, blank=True, default='')
    # el email no es necesario
    email = models.CharField(max_length=40, null=True, blank=True, default='')




