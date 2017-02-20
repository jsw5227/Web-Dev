from django.http import HttpResponse
from django.template import loader
from userProfile.models import UserInfo

def home(request):
    template = loader.get_template('Web-Dev/index.html') #connects the template to this view
    return HttpResponse(template.render(request)) #returns the repsonse from the request
