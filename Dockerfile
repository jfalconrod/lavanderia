FROM debian:latest

RUN apt-get update && apt-get dist-upgrade -y
RUN apt-get install nginx php5-fpm php5-mysql vim -y

COPY default /etc/nginx/sites-enabled/
