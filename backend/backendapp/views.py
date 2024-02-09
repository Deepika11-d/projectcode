from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = request.user
        content = [
    { "id": 1, "title": "Animals Blog", "description": "Dogs,Cat pictures","image":"https://picsum.photos/id/237/200/300" },
    { "id": 2, "title": "Mountains Blog", "description": "Big Mountains" ,"image":"https://picsum.photos/seed/picsum/200/300"},
    { "id": 3, "title": "Technology Blog", "description": "Laptop,headphones","image":"https://picsum.photos/200/300" },
  ]
        return Response(content)
