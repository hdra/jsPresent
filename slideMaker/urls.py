from django.conf.urls.defaults import patterns, include, url

import views
urlpatterns = patterns('',
	url(r'^$',views.index),
	url(r'^present/$',views.render_slide),
)