# Cook Panda

An app to find the best recipes for your next meal!

## Prerequisite
Download and install nodejs. Here, I have used version 14.17.3

```
https://nodejs.org/en/blog/release/v14.17.3/
```

## Installation:

### Clone and Install dependencies:
```bash
git clone https://github.com/S-M-J-I/Flight-Search-App.git
npm install
```

### Set Up Firebase:
#### Create a firebase account:
Go to the following link:
```bash
https://firebase.google.com/
```
Sign in with your google account. Then, go to console and create a new project. Set up Email/Password authentication service for your project. 
#### Replacing the Firebase config information:
Go into:
```bash
src -> firebase -> firebase.js
```  
and change the firebase config information with your own.

### Set up API:
#### Create a EDAMAM account:
Go to the following link: 
```bash
https://developer.edamam.com/edamam-recipe-api
```
Select the free plan and create a project there to get your own API key and ID

#### Replace the API info:
Go into:
```bash
src -> core -> API.js 
```
and replace the API info with your own.


### Start the App:

```bash
npx expo start
```


