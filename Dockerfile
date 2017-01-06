FROM node:7.3.0
MAINTAINER "Saurabh"
ENV workpath /source
#RUN apt-get update
RUN ["npm","install","-g","nodemon"] 
VOLUME /usr/src/app/source
COPY ./source /usr/src/app/source
WORKDIR /usr/src/app/source
EXPOSE 3000
CMD ["nodemon","index.js"]
