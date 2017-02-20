from django.http import HttpResponse
from django.template import loader
from .models import UserInfo

def index(request):
    #http response for the user profile home.
    all_Users = UserInfo.objects.all() #gets all of the UserInfo data from the database
    template = loader.get_template('userProfile/index.html') #connects the template to this view
    context = {                 #creates a dictionary to send to the template
        'all_Users': all_Users,
    }
    return HttpResponse(template.render(context, request)) #returns the repsonse from the request

def profile(request, user_id):
    #returns the httpreponse based on the id it was given
    return HttpResponse("<h2>user profile: " + str(user_id) + "</h2>")

