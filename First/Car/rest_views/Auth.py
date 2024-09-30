# views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login
from Car.models import User
from Car.serializers import UserSerializer
from django.contrib.auth.models import update_last_login
from rest_framework_simplejwt.tokens import RefreshToken



class RegisterView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        if User.objects.filter(email=email).exists():
            return Response({'error': 'User already exists'}, status=status.HTTP_400_BAD_REQUEST)
        
        user = User.objects.create_user(email=email, password=password)
        print(f"Created user: {user.email}, password: {user.password}")
        user.save()
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)

# views.py
class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = authenticate(request, email=email, password=password)
            
            # Ensure the user is authenticated and active
            if user is not None and user.is_active:
                refresh = RefreshToken.for_user(user)
                login(request, user)
                update_last_login(None, user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                })
            else:
                return Response({'error': 'Invalid credentials or account is inactive'}, status=status.HTTP_401_UNAUTHORIZED)
        
        except Exception as e:
            print(f"Error during login: {e}")  # Log the error in the console
            return Response({'error': 'An error occurred during login'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)