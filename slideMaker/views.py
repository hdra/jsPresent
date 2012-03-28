# Create your views here.
from django.http import HttpResponse,QueryDict
from django.template import RequestContext,Template,Context
from django.shortcuts import render_to_response

def index(request):
	return render_to_response('index.html',{},context_instance=RequestContext(request))
	
def render_slide(request):
	slides = request.GET.getlist('slide')
	return render_to_response('present.html',{'slides':slides},context_instance=RequestContext(request))
