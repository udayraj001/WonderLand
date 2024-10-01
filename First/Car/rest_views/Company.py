from django.shortcuts import render
#Create Your view here

from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from Car.models import Company
from django.utils import timezone
from First.settings import BASE_DIR
from Car.serializers import CompanySerializer

class CompanyRest(APIView):
    def get(self, request, *args, **kwargs):
        try:
            timestamp = timezone.now() 
            data = Company.objects.all()    
            print(data)
            serializer = CompanySerializer(data, many=True)
            company_action_logs = {
                "timestamp" : timestamp.strftime("%y-%m-%d %H:%M:%S")
            }
            # with open(f'{BASE_DIR}/static/logs/company_logs.log','a') as f:
            #     f.write(f'{str(company_action_logs)}\n')

            return Response(serializer.data,status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response({"error":str(e)}, status=status.HTTP_404_NOT_FOUND)



    def post(self, request, *args, **kwargs):
        cName = request.data.get('cName')
        emailAddress = request.data.get('emailAddress')
        phone = request.data.get('phone')
        address = request.data.get('address')
        gst_no = request.data.get('gst_no')


        if not all([cName, emailAddress, phone, address, gst_no]):
            return Response({"Error": "Missing certain field. Please Check the fields"},status=status.HTTP_400_BAD_REQUEST)
        
        if Company.objects.filter(gst_no=gst_no).exists():
            return Response({"Error":"Company with this gst no already exists"},status=status.HTTP_400_BAD_REQUEST)
        
        company = Company(cName=cName,  emailAddress=emailAddress, phone=phone, address=address, gst_no=gst_no)
        company.save()

        serialize = CompanySerializer(company)
        return Response(serialize.data, status=status.HTTP_201_CREATED)
    


    def patch(self, request, *args, **kwargs):
        gst_no = request.data.get('gst_no')
        cName = request.data.get('cName')

        if not gst_no:
            return Response({"error": "GST number is not provided"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            company = Company.objects.get(gst_no=gst_no)
        except Company.DoesNotExist:
            return Response({"error": "The company with this GST number does not exist"}, status=status.HTTP_404_NOT_FOUND)

        if cName:
            company.cName = cName
        if request.data.get('emailAddress'):
            company.emailAddress = request.data.get('emailAddress')
        if request.data.get('phone'):
            company.phone = request.data.get('phone')
        if request.data.get('address'):
            company.address = request.data.get('address')
        if request.data.get('gst_no'):
            company.gst_no = request.data.get('gst_no')    

        company.save()

      
        response_data = {
            "id": company.id,
            "cName": company.cName,
            "emailAddress": company.emailAddress,
            "phone": company.phone,
            "address": company.address,
            "gst_no": company.gst_no
        }

        return Response(response_data, status=status.HTTP_200_OK)
     


    def delete(self, request, *args, **kwargs):
        try:
            # Retrieve the company_id from the request body
            company_id = request.data.get('id')

            if not company_id:
                return Response({"error": "Missing 'id' in the request body"}, status=status.HTTP_400_BAD_REQUEST)

            # Attempt to retrieve the company instance
            try:
                company = Company.objects.get(id=company_id)
            except Company.DoesNotExist:
                return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)

            # Delete the company instance
            company.delete()

            return Response({"message": "Company successfully deleted"}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)