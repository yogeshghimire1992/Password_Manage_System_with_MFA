from rest_framework import serializers
from .models import Credential

class CredentialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Credential
        fields = ['id', 'website', 'username', 'password', 'created_at']
