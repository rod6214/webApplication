
# Requirements and Installations

### AspNet Generator
Use this command line to install AspNet Generator:
* dotnet tool install --global dotnet-aspnet-codegenerator

### Dependencies
Necessary dependencies so that you can use **dotnet-aspnet-codegenerator** tool.
* dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Tools --version 2.0.4
* dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design --version 2.2.2

### To generate HelloWorld view from controller.
* dotnet-aspnet-codegenerator view Index -namespace webapplication.Controllers -outDir Views/HelloWorld -udl Empty
### To generate controller.
* dotnet-aspnet-codegenerator -p "C:\Desarrollo\aspexample\webapplication\webapplication.csproj" controller -name HelloWorldController -outDir Controllers -namespace webapplication.Controllers.