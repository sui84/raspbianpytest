jenkins
D:\02_Software\Java\jre7\bin\java -jar D:\02_Software\Java\jenkins.war --httpPort=8080

winservice
sc create jenkins binpath= "E:\MyProjects\Github\pytest\pytest\bat\jenkins.bat" displayname= "jenkins" depend= Tcpip start= auto

#Http:
python -m SimpleHTTPServer 8000
#FTP:
python -m pyftpdlib -p 21
