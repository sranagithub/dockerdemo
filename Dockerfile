FROM node:7.3.0
MAINTAINER "Saurabh"
RUN apt-get update 
VOLUME /usr/src/app/source
COPY . /usr/src/app/source
WORKDIR /usr/src/app/source
RUN ["npm","install","-g","nodemon"]
RUN ["npm","install"]
EXPOSE 3000
CMD ["npm","start"]
