
from django.conf.urls import include, url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.home, name="homepage"),
    url(r'^admin/', admin.site.urls),
    url(r'^userProfile/', include('userProfile.urls')),
]
