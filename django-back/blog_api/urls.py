from django.urls import path, include
from .views import BlogApiView, BlogPageInfo, CategoryApiView, CategoryPostApiView, PopularPostsApiView
from rest_framework import routers

router = routers.SimpleRouter()
router.register('blogs', BlogApiView, basename='blogs')
router.register('category', CategoryApiView, basename='category')
router.register('categoryBasedBlogs', CategoryPostApiView, basename='categoryBasedBlogs')
router.register('PopularPostsApiView', PopularPostsApiView, basename='PopularPostsApiView')

urlpatterns = [
     path('blogPages/', BlogPageInfo.as_view(), name='blogPages'),
     path('', include(router.urls)),
]
