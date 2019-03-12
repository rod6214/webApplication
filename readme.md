
# Requirements

* Windows 7 or later.
* Linux Ubuntu 16.04.6 LTS or later.
* Docker v18.09.2.
* Nodejs v10.15.3.
* Angular CLI v7.2.4.
* .Net Core v2.2 for Windows or Linux.
* Visual Studio Code or Visual Studio 2017 famiily.

# links

* https://dotnet.microsoft.com/download
* https://www.docker.com/get-started
* https://nodejs.org/en/
* https://code.visualstudio.com/

### Angular installation
* npm install -g @angular/cli@7.2.4

### To generate Angular dependency if you want to edit SPA
Enter into demo/ClientApp directory and invoke the following:
* npm install

### Build angular
Enter into demo/ClientApp directory and invoke the following:
* ng build --prod --output-hashing none

### Build .Net Core App
Enter into demo directory and invoke the following:
* dotnet build demo.csproj

### Run .Net Core App
Enter into demo directory and invoke the following:
* dotnet run --project demo.csproj

### Creating Dockerfile
Enter into demo directory and create dockerfile with the following content:
`FROM microsoft/dotnet:sdk AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "demo.dll"]`
