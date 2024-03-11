from django.urls import path
from . import views
from .views import DownloadPDF

urlpatterns = [
    path('hello/', views.say_hello),
    path('definition/', views.find_free),
    path('download/', DownloadPDF, name='donwload_pdf'),
    path('exchange/', views.exchange, name='exchange_currencies'),
    path('stocks/', views.get_stock_list, name='get_stock_list'),
    path('mutual_funds/', views.get_mutual_funds, name='get_mutual_funds'),
    path('notes/', views.get_notes, name='get_notes')
]