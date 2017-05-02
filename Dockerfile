FROM nginx
MAINTAINER Scott Traver

RUN apt-get update -yq && apt-get upgrade -yq
RUN apt-get -y install curl
RUN apt-get -y install gnupg2
RUN apt-get -y install git-core

RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get install -y nodejs

RUN npm install -g ember-cli bower phantomjs-prebuilt

RUN mkdir -p /usr/src/app
ADD . /usr/src/app
WORKDIR /usr/src/app

RUN npm install --verbose
RUN bower install --allow-root
RUN ember build --environment=production --output-path=/usr/share/nginx/html

RUN rm -rf bower_components
RUN rm -rf node_modules

COPY nginx.conf /etc/nginx/nginx.conf