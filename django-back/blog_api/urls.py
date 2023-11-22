from django.urls import path, include
from .views import blogApiView, blogDetails, BlogPageInfo, ChatWithGPT, categoryApiView, CategoryPostApiView, PopularPostsApiView
from rest_framework import routers

router = routers.SimpleRouter()
router.register('blogs', blogApiView, basename='blogs')
router.register('details', blogDetails, basename='details')
router.register('category', categoryApiView, basename='category')
router.register('categoryBasedBlogs', CategoryPostApiView, basename='categoryBasedBlogs')
router.register('PopularPostsApiView', PopularPostsApiView, basename='PopularPostsApiView')

urlpatterns = [
     path('blogPages/', BlogPageInfo.as_view(), name='blogPages'),
     path('chat_with_gpt/', ChatWithGPT.as_view(), name='chat_with_gpt'),  
     path('', include(router.urls)),
]
