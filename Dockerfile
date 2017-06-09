FROM debian:latest

RUN apt-get update && apt-get dist-upgrade -y
RUN apt-get install nginx -y

EXPOSE 80
