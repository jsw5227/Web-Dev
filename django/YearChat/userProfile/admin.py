from django.contrib import admin
from .models import UserInfo, UserPosts, Comments

admin.site.register(UserInfo)
admin.site.register(UserPosts)
admin.site.register(Comments)


