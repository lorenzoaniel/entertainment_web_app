from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def test(request):
    print("test")
    return HttpResponse("test")