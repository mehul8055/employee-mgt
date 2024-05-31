# employee-mgt
- emp-mgt-ui : This is a Angular 10 based project which uses Bootstrap 4.5
- emp-mgt-backend : This is Spring Boot project with Spring REST Service, it will required mysql database with pre-exists schema

Above both the projects are currently running separetly, i will integrate it in a single project and deployed as a WAR file in future
I am also planning to add this project with Docker

Start emp-mgt-backend
update application.properties file as database need 
project has mysql so mysql related jar will be there in pom.xml, can be change as per need
run java project as java application

To start emp-mgt-ui follow below steps
1. install node.js
2. install angular cli
3. npm install -g @angular/cli@^10.0.0
4. npm build
5. npm start
   
