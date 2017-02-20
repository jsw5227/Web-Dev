from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    #takes the url with the id the user entered and looks for
    #the function in view and returns the httpresponse
    url(r'^(?P<user_id>[0-9]+)/$', views.profile, name="profile"),
]
