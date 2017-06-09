FROM debian:latest

RUN apt-get update && apt-get dist-upgrade -y
RUN apt-get install nginx php5-fpm vim -y

COPY default /etc/nginx/sites-enabled/
