from django.urls import path,include
from Car.rest_views.Company import CompanyRest
from Car.rest_views.Customer import CustomerRest
from Car.rest_views.Journey import JourneyRest
from Car.rest_views.Auth import RegisterView,LoginView

urlpatterns = [
    path("Company/",CompanyRest.as_view()),
    path("Customer/",CustomerRest.as_view()),
    path("Journey/",JourneyRest.as_view()),
    path("Register/",RegisterView.as_view(), name='register'),
    path("Login/",LoginView.as_view(), name='login')
]