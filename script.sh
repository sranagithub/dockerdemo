#!/bin/bash
#$1 is image name
#$2 is container name
$1 $2
echo "======================" 
echo
docker stop $2
docker rm $2 -f
docker rmi $2 
docker build -t $1 .

echo $1 
echo $2 

echo "Container " $2 " is running at IP :172.17.0.2"
docker run --name $2 -v /usr/src/dockerdemo:/usr/src/app/source $1 


