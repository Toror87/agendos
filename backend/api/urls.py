from django.urls import path, include
from rest_framework import routers

from api.views import ContactViewSet

router = routers.DefaultRouter()
router.register(r'contacts', ContactViewSet, basename='contact')


urlpatterns = [
    path('', include(router.urls)),
    # ContactViewSet.as_view, name='contacts')
]