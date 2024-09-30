from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
from django.contrib.auth.models import BaseUserManager
from django.contrib.auth.models import AbstractUser

class Company(models.Model):
    id = models.AutoField(primary_key=True)
    cName = models.CharField(max_length=80)
    emailAddress = models.CharField(max_length=50)
    phone = models.CharField(max_length=13)
    address = models.CharField(max_length=200)
    gst_no = models.CharField(max_length=20)

    def __str__(self):
        return self.cName


class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    custName = models.CharField(max_length=80)
    emailAddress = models.CharField(max_length=50)
    phone = models.CharField(max_length=13)
    address = models.CharField(max_length=200)

    def __str__(self):
        return self.custName


class Journey(models.Model):
    id = models.AutoField(primary_key=True)
    fromCity = models.CharField(max_length=80)
    toCity = models.CharField(max_length=50)
    peoples = models.CharField(max_length=50)
    s_time = models.TimeField(max_length=50, auto_now=True)
    e_time = models.TimeField(max_length=50)
    cost = models.DecimalField(max_digits=100, decimal_places=2, default=0) 
    
    def __str__(self):
        return self.fromCity




class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)




class User(AbstractUser):
    username = None
    email = models.EmailField(unique=True, default='default@example.com')
    is_verified = models.BooleanField(default=False)
    otp = models.CharField(max_length=6, null=True, blank=True)

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_groups',  # Updated related_name
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions',  # Updated related_name
        blank=True
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def name(self):
        return self.first_name + ' ' + self.last_name

    def __str__(self):
        return self.email