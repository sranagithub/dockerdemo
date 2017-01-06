FROM node:7.3.0
MAINTAINER "Saurabh"
RUN apt-get update 
VOLUME /usr/src/app/source
COPY . /usr/src/app/source
WORKDIR /usr/src/app/source
EXPOSE 3000
RUN ["npm","install"]
RUN ["npm","install","-g","nodemon"]
CMD ["npm","start"]
