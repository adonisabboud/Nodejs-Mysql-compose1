# Nodejs-Mysql-compose1

docker run -d \
--name my-mysql-server\
-p 3306:3306\
-e MYSQL_ROOT_PASSWORD=secret \
-e MYSQL_DATABASE=mysqlDB \
-e MYSQL_USER=admin \
-e MYSQL_PASSWORD=mypass \
-v mysql-vol:/var/lib/mysql \
mysql:latest
