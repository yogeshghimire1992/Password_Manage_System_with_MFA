# api/views.py

from django.http import HttpResponse

# Define the 'some_view' function
def some_view(request):
    return HttpResponse("This is some view!")
