FROM ubuntu

RUN apt-get update && apt-get install -y \
    wget \
    curl \
    debconf-utils \
    lsb-release \

ENV DEBIAN_FRONTEND=noninteractive

RUN wget https://dev.mysql.com/get/mysql-apt-config_0.8.4-1_all.deb > /work/mysql-apt-config_0.8.4-1_all.deb

WORKDIR /work

RUN dpkg -i mysql-apt-config_0.8.4-1_all.deb

RUN apt-get update && apt-get install -y mysql-server

RUN service mysql start

EXPOSE 3306
