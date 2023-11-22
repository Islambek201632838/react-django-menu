from .models import blog, category
from .serializers import blogSerializer, categorySerializer
from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.response import Response
# Create your views here.
from rest_framework import status
from rest_framework.decorators import action
from django.utils.text import slugify
from django.core.paginator import Paginator
from rest_framework import status
from math import ceil
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from django.http import JsonResponse
from requests.exceptions import RequestException
import requests
import openai

openai.api_key = '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'


class blogApiView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin):
    serializer_class = blogSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        offset = int(self.request.query_params.get('offset', 0))
        limit = int(self.request.query_params.get('limit', 5))
        queryset = blog.objects.all()[offset:offset + limit]
        return queryset


    @action(detail=False, methods=['post'])
    def create_blog(self, request):
        data_list = request.data
        response_data = []

        for data in data_list:
            category_name = data.get('category', None)

            if category_name:
                category_instance, created = category.objects.get_or_create(name=category_name)
                data['category'] = category_instance.id

            if not data.get('excerpt', None) and data.get('content', None):
                data['excerpt'] = ' '.join(data['content'].split()[:30])

            if not data.get('ingredients', None) and data.get('content', None):
                content = data.get('content')
                data['ingredients'] = content

            if not data.get('slug', None) and data.get('title', None):
                data['slug'] = slugify(data['title'])

            serializer = self.get_serializer(data=data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            response_data.append(serializer.data)

        return Response(response_data, status=status.HTTP_201_CREATED)

class blogDetails(viewsets.ViewSet):
    def retrieve(self, request, pk=None):
        try:
            instance = blog.objects.get(slug=pk)
            serializer = blogSerializer(instance)
            return Response(serializer.data)
        except blog.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)

    
class BlogPageInfo(APIView):
    def get(self, request):
        limit = int(request.query_params.get('limit', 5))
        queryset = blog.objects.all()
        total_items = len(queryset)

        max_pages = ceil(total_items / limit)

        return Response({'max_pages': max_pages}, status=status.HTTP_200_OK)

class categoryApiView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = category.objects.all()
    serializer_class = categorySerializer
    lookup_field = 'id'

class CategoryPostApiView(viewsets.ViewSet):
    def retrieve(self, request, pk=None):
        queryset = blog.objects.filter(category=pk)
        serializer = blogSerializer(queryset, many=True)
        return Response(serializer.data)

class PopularPostsApiView(viewsets.ViewSet):
    def list(self, request,pk=None):
        queryset = blog.objects.filter(postlabel__iexact='POPULAR').order_by('-id')[0:4]
        serializer = blogSerializer(queryset, many=True)
        return Response(serializer.data)
    
class ChatWithGPT(APIView):
    @api_view(['POST'])
    def chat_with_gpt(self, request):
        user_input = request.data.get('input', '')

        try:
            response = requests.post(
                'https://api.openai.com/v1/chat/completions',
                headers={
                    'Content-Type': 'application/json',
                    'Authorization': f'Bearer {openai.api_key}',
                },
                json={
                    'model': 'gpt-4-turbo',
                    'messages': [{'role': 'user', 'content': user_input}],
                    'temperature': 0.7,
                }
            )

            response.raise_for_status()

            generated_response = response.json()['choices'][0]['message']['content']
            return JsonResponse({'response': generated_response})

        except RequestException as e:
            return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
