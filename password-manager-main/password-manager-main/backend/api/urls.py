# api/urls.py

from django.urls import path
from . import views  # Make sure this imports the correct 'views.py'

urlpatterns = [
    path('some_view/', views.some_view, name='some_view'),  # Use the correct view name
]
