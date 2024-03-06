from django.urls import path
from . import views
from .views import DownloadPDF

urlpatterns = [
    path('hello/', views.say_hello),
    path('definition/', views.find_free),
    path('download/', DownloadPDF, name='donwload_pdf')
]