from django.db import models

from phonenumber_field.modelfields import PhoneNumberField

''' Modelo para los contactos 
    hereda de models.Model y utiliza sus campos'''
class Contact(models.Model):
    # el registro del contacto debe poseer un nombre, sí o sí,
    # por defecto un campo de tipo CharField es blank=False
    first_name = models.CharField(max_length=20)
    # el apellido puede estar vacío
    last_name = models.CharField(max_length=20, null=True, blank=True, default='')
    # la edad es opcional
    age = models.IntegerField(null=True, blank=True)
    # el teléfono NO es un requerimiento
    # PhoneNumberField funciona con base en CharField, pero
    # almacena números de teléfono válidos, por defecto
    # en formate de numero internacional (e.g '+41524204242').
    phone = PhoneNumberField(unique=True, null=True, blank=True)
    # el domicilio no es necesario
    address = models.CharField(max_length=50, null=True, blank=True, default='')
    # el email no es necesario
    email = models.CharField(max_length=40, null=True, blank=True, default='')
