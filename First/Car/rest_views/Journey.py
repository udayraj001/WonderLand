from django.shortcuts import render
#Create Your view here

from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from Car.models import Journey
from django.utils import timezone
from First.settings import BASE_DIR
from Car.serializers import JourneySerializer

class JourneyRest(APIView):
    def get(self, request, *args, **kwargs):
        try:
            
            timestamp = timezone.now() 
            data = Journey.objects.all()    
            print(data)
            serializer = JourneySerializer(data, many=True)
            journey_action_logs = {
                "timestamp" : timestamp.strftime("%y-%m-%d %H:%M:%S")
            }
            with open(f'{BASE_DIR}/static/logs/journey_logs.log','a') as f:
                f.write(f'{str(journey_action_logs)}\n')

            return Response(serializer.data,status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response({"error":str(e)}, status=status.HTTP_404_NOT_FOUND)





    def post(self, request, *args, **kwargs):
        id = request.data.get('id')
        fromCity = request.data.get('fromCity')
        toCity = request.data.get('toCity')
        peoples = request.data.get('peoples')
        s_time = request.data.get('s_time')
        e_time = request.data.get('e_time')
        cost = request.data.get('cost')


        if not all([fromCity, toCity, peoples, s_time, e_time, cost]):
            return Response({"Error": "Missing certain field. Please Check the fields"},status=status.HTTP_400_BAD_REQUEST)
        
        if Journey.objects.filter(id=id).exists():
            return Response({"Error":"Journey already exists"},status=status.HTTP_400_BAD_REQUEST)
        
        journey = Journey(fromCity=fromCity,  toCity=toCity, peoples=peoples, s_time=s_time, e_time=e_time, cost=cost)
        journey.save()

        serialize = JourneySerializer(journey)
        return Response(serialize.data, status=status.HTTP_201_CREATED)
    



    def patch(self, request, *args, **kwargs):
        id = request.data.get('id')
      
        

        if not id:
            return Response({"error": "Id is not provided"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            journey = Journey.objects.get(id=id)
        except Journey.DoesNotExist:
            return Response({"error": "The company with this id not exist"}, status=status.HTTP_404_NOT_FOUND)

        if request.data.get('id'):
            journey.id = id
        if request.data.get('fromCity'):
            journey.fromCity = request.data.get('fromCity')
        if request.data.get('toCity'):
            journey.toCity = request.data.get('toCity')
        if request.data.get('peoples'):
            journey.peoples = request.data.get('peoples')
        if request.data.get('s_time'):
            journey.s_time = request.data.get('s_time')
        if request.data.get('e_time'):
            journey.e_time = request.data.get('e_time')
        if request.data.get('cost'):
            journey.cost = request.data.get('cost')
        
        journey.save()

      
        response_data = {
            "id": journey.id,
            "fromCity": journey.fromCity,
            "toCity": journey.toCity,
            "peoples": journey.peoples,
            "s_time": journey.s_time,
            "e_time":journey.e_time,
            "cost":journey.cost
        }

        return Response(response_data, status=status.HTTP_200_OK)
     


    def delete(self, request, *args, **kwargs):
        try:
            # Retrieve the company_id from the request body
            journey_id = request.data.get('id')

            if not journey_id:
                return Response({"error": "Missing 'id' in the request body"}, status=status.HTTP_400_BAD_REQUEST)

            # Attempt to retrieve the company instance
            try:
                journey = Journey.objects.get(id=journey_id)
            except Journey.DoesNotExist:
                return Response({"error": "Journey not found"}, status=status.HTTP_404_NOT_FOUND)

            # Delete the company instance
            journey.delete()

            return Response({"message": "Journey successfully deleted"}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
