FROM centos/httpd:latest

####### MAINTAINER ############
MAINTAINER "Justin Holmes" "jholmes@redhat.com"

RUN rm /etc/httpd/conf.d/welcome.conf

ADD index.html /var/www/html/index.html
ADD bower_components /var/www/html/bower_components
