# ReserveApp/urls.py

from django.urls import path
from .views import article_list,index

urlpatterns = [
    path('articles/', article_list, name='article_list'),
    path("", index, name="index"),
    # Add more paths as needed
]
