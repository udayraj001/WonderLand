from django.shortcuts import render
#Create Your view here

from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from Car.models import Company
from Car.models import Customer
from django.utils import timezone
from First.settings import BASE_DIR
from Car.serializers import CustomerSerializer

class CustomerRest(APIView):
    def get(self, request, *args, **kwargs):
        try:
            
            timestamp = timezone.now() 
            data = Customer.objects.all()    
            print(data)
            serializer = CustomerSerializer(data, many=True)
            customer_action_logs = {
                "timestamp" : timestamp.strftime("%y-%m-%d %H:%M:%S")
            }
            with open(f'{BASE_DIR}/static/logs/company_logs.log','a') as f:
                f.write(f'{str(customer_action_logs)}\n')

            return Response(serializer.data,status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response({"error":str(e)}, status=status.HTTP_404_NOT_FOUND)




    def post(self, request, *args, **kwargs):
        custName = request.data.get('custName')
        emailAddress = request.data.get('emailAddress')
        phone = request.data.get('phone')
        address = request.data.get('address')


        if not all([custName, emailAddress, phone, address]):
            return Response({"Error": "Missing certain field. Please Check the fields"},status=status.HTTP_400_BAD_REQUEST)
        
        if Customer.objects.filter(emailAddress=emailAddress).exists():
            return Response({"Error":"Company with this Email already exists"},status=status.HTTP_400_BAD_REQUEST)
        
        customer = Customer(custName=custName,  emailAddress=emailAddress, phone=phone, address=address)
        customer.save()

        serialize = CustomerSerializer(customer)
        return Response(serialize.data, status=status.HTTP_201_CREATED)
    


    def patch(self, request, *args, **kwargs):
        custName = request.data.get('custName')
        emailAddress = request.data.get('emailAddress')
        

        if not emailAddress:
            return Response({"error": "emailAddress is not provided"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            customer = Customer.objects.get(emailAddress=emailAddress)
        except Customer.DoesNotExist:
            return Response({"error": "The company with this email not exist"}, status=status.HTTP_404_NOT_FOUND)

        if request.data.get('custName'):
            customer.custName = custName
        if request.data.get('emailAddress'):
            customer.emailAddress = request.data.get('emailAddress')
        if request.data.get('phone'):
            customer.phone = request.data.get('phone')
        if request.data.get('address'):
            customer.address = request.data.get('address')
        
        customer.save()

      
        response_data = {
            "id": customer.id,
            "cName": customer.custName,
            "emailAddress": customer.emailAddress,
            "phone": customer.phone,
            "address": customer.address
        }

        return Response(response_data, status=status.HTTP_200_OK)
     


    def delete(self, request, *args, **kwargs):
        try:
            # Retrieve the company_id from the request body
            customer_id = request.data.get('id')

            if not customer_id:
                return Response({"error": "Missing 'id' in the request body"}, status=status.HTTP_400_BAD_REQUEST)

            # Attempt to retrieve the company instance
            try:
                customer = Customer.objects.get(id=customer_id)
            except Customer.DoesNotExist:
                return Response({"error": "Customer not found"}, status=status.HTTP_404_NOT_FOUND)

            # Delete the company instance
            customer.delete()

            return Response({"message": "Customer successfully deleted"}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
