from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

# defines methods that are used to create and save User instances. Manages User model


class CustomUserManager(BaseUserManager):

    # create base user
    def create_user(self, email, password=None, ):
        email = self.normalize_email(email)
        user = self.model(email=email)

        # converts plain text to hash
        user.set_password(password)
        # only for one database otherwise use 'using=<db_name>' to specify
        user.save()

        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
      extra_fields.setdefault('is_staff', True)
      extra_fields.setdefault('is_superuser', True)

      return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    # primary key
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=32)

    # override default manager from AbstractBaseUser
    objects = CustomUserManager()

    # unique identifier
    USERNAME_FIELD = 'email'
    # 
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
