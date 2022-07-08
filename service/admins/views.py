import json

from django.shortcuts import render
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.template import loader
from django.shortcuts import render, get_object_or_404
from django.urls import reverse
from django.db.models import F
from django.views import generic
from django.utils import timezone
from django.views.decorators.http import require_http_methods

from  django.conf import settings
# Create your views here.

class LoginView(object):

    def __init__(self, *args, **kwargs):
        self.args = args
        self.kwargs = kwargs

    @require_http_methods(['POST'])
    def login(self, request):

        data = dict(
            username=request.POST.get('username', None),
            password=request.POST.get('password', None)
        )
        result = settings.REQUEST_RETURN_JSON_TEMPLATE
        result.update(
            data = data
        )

        return HttpResponse(json.dumps(result), content_type='application/json')




