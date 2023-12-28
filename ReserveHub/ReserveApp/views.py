from django.shortcuts import render
from .models import Article

def article_list(request):
    # 取得所有文章
    articles = Article.objects.all()
    
    # 將文章傳遞到模板中
    return render(request, 'ReserveApp/article_list.html', {'articles': articles})

from django_nextjs.render import render_nextjs_page_sync
def index(request):
    return render_nextjs_page_sync(request)