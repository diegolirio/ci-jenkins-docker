container=vsCI
app=ci-jenkins-docker
port=7002

echo 123456 | sudo -S docker -v

if sudo docker ps | awk -v container="container" 'NR>1{  ($(NF) == container )  }'; then
  echo "Stop and destroy $container"
  sudo docker stop "$container" && sudo docker rm -f "$container"
fi

echo "Creating $container"
sudo docker run -itd --name $container -p $port:8080 diegolirio/tomcat-maven:1.0 /bin/bash

url=https://github.com/diegolirio/$app.git

app_deploy="cijenkinsdocker"

sudo docker exec -i $container bash -c "java -version"
sudo docker exec -i $container bash -c "mvn -version"
sudo docker exec -i $container bash -c "cd /root && git clone $url"
sudo docker exec -i $container bash -c "cd /root/$app/src/main/webapp/ci && npm install && ng build --prod --bh /$app_deploy/ci/dist/"
sudo docker exec -i $container bash -c "cd /root/$app && mvn package -Dmaven.test.skip=true"
sudo docker exec -i $container bash -c "mv /root/$app/target/$app_deploy.war webapps/"
sudo docker exec -i $container bash -c "bin/catalina.sh start"
