from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.say_hello),
    path('quotes/', views.find_free),
]