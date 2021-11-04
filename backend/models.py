from django.db import models


class Contact(models.Model):
    first_name = models.CharField(max_length=20, blank=False)
    last_name = models.CharField(max_length=20)
    phone = models.CharField(max_length=100, blank=False)
    address = models.CharField(max_length=50)
    email = models.CharField(max_length=40)
    birthday = models.DateField(null=True)
