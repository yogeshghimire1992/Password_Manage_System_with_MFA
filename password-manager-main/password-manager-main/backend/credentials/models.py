from django.db import models
from django.contrib.auth.models import User

class Credential(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    website = models.URLField()
    username = models.CharField(max_length=255)
    password = models.TextField()  # Encrypted password
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.website