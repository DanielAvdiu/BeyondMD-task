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
class ReactView(APIView):
    def get(self, request):
        output = [{ 'employee': output.employee, 'department': output.department } for react in React.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

def say_hello(request):
    cred = credentials.Certificate("path/to/serviceAccountKey.json")
    firebase_admin.initialize_app(cred)
    return JsonResponse({'message': 'Hello, Django!'})

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

        
