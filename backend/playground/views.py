from json import JSONDecodeError
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from . serializer import *
import firebase_admin
from firebase_admin import credentials
import requests

from django.core.files import File
from django.http import HttpResponse
from rest_framework.decorators import api_view
from backend.settings import BASE_DIR, MEDIA_ROOT


"""
This endpoint is used in order to download the pdf document
of my resume. Once the button in the frontend is clicked, it 
invokes a function that calls this endpoint. The function is
asynchronous, meaning that I had to use the keywords 'async'
and 'await'. When the endpoing is called, it knows the location of
the pdf file and returns it in a 'blob' format.
"""
@api_view(['GET'])
def DownloadPDF(self):
    path_to_file = MEDIA_ROOT + '\\Daniel_Avdiu_Resume.pdf'
    f = open(path_to_file, 'rb')
    pdfFile = File(f)
    response  = HttpResponse(pdfFile.read())
    response['Content-Disposition'] = 'attachment;'
    return response



# Create your views here.



@api_view(['GET'])
def say_hello(request):
    cred = credentials.Certificate("path/to/serviceAccountKey.json")
    firebase_admin.initialize_app(cred)
    return JsonResponse({'message': 'Hello, Django!'})

@api_view(['GET'])
def find_free(request):
    query_params = request.GET
    # Now you can access individual parameters like this:
    param_value = request.GET.get('word', 'default_value')
    print(param_value)

    url = "https://mashape-community-urban-dictionary.p.rapidapi.com/define"

    querystring = {"term":param_value}

    headers = {
	    "X-RapidAPI-Key": "395845721dmsh6a40198214a94dbp119f11jsn5fc16ba16f43",
	    "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)
    print(response)

    return JsonResponse(response.json())

@api_view(['GET'])
def exchange(request):
    
    param1_value = request.GET.get('par1', 'default_value')
    param2_value = request.GET.get('par2', 'default_value')
    param3_value = request.GET.get('par3', 'default_value')
    

    url = "https://currency-exchange.p.rapidapi.com/exchange"

    querystring = {"from": param1_value,"to": param2_value ,"q": param3_value}

    headers = {
	    "X-RapidAPI-Key": "395845721dmsh6a40198214a94dbp119f11jsn5fc16ba16f43",
	    "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)

    print(response)
    
    return JsonResponse(response.json(), safe=False)


@api_view(['GET'])
def get_stock_list(request):

    url = "https://twelve-data1.p.rapidapi.com/stocks"

    querystring = {"exchange":"NASDAQ","format":"json"}

    headers = {
	    "X-RapidAPI-Key": "395845721dmsh6a40198214a94dbp119f11jsn5fc16ba16f43",
	    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)
    
    
    return JsonResponse(response.json(), safe=False)


@api_view(['GET'])
def get_mutual_funds(request):
    url = "https://twelve-data1.p.rapidapi.com/mutual_funds/list"

    querystring = {"apikey":"demo"}

    headers = {
	    "X-RapidAPI-Key": "395845721dmsh6a40198214a94dbp119f11jsn5fc16ba16f43",
	    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)

    print(response.json())
    
    return JsonResponse(response.json(), safe=False)

@api_view(['GET'])
def get_notes(request):
    notes= Note.objects.all().values()
    return JsonResponse(list(notes), safe=False)
