from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from backendapp.views import HelloView

urlpatterns = [
    path('api/hello/', HelloView.as_view(), name='hello'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
