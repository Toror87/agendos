from api.models import Contact
from rest_framework import serializers
from django.contrib.auth import get_user_model

class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = "__all__"

# esta clase crea un nuevo usuario
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ["username", "password"]

    def create(self, validated_data):
        # metodo de Django, modelo de usuario de Django por defecto
        # encripta username y password
        user = get_user_model().objects.create_user(
                username=validated_data['username'],
                password=validated_data['password'],
            )
        return user

class MeSerializer(serializers.ModelSerializer):
    class Meta:
            model = get_user_model()
            fields = ['id', 'username']