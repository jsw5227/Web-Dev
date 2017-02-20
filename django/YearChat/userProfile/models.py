from django.db import models

class UserInfo(models.Model):
    username = models.CharField(max_length=50)
    biography = models.CharField(max_length=1000)
    profile_picture = models.CharField(max_length=1000)
    def __str__(self):       #returns the username when queried
        return self.username

class UserPosts(models.Model):
    post = models.CharField(max_length=5000)
    date = models.IntegerField(100)
    likes = models.CharField(max_length=1000)

class Comments(models.Model):
    userPosts = models.ForeignKey(UserPosts, on_delete=models.CASCADE) #when the post is deleted delete comment
    comment_username = models.CharField(max_length=50)
    user_comment = models.CharField(max_length=2500)
