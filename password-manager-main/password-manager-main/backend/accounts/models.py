from django.contrib.auth.models import User
from django.db import models

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    mfa_enabled = models.BooleanField(default=False)
    totp_secret = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.user.username