# Socialblog
Socialblog is a social network  with blog functionality and an
integrated real-time chat.
This website is built with angular2 and Node.js. 
Additionally, express is used for building a web framework and socket.io for realtime comunication.

Please note that this project is currently in development. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## How it works
On the client-side users can create accounts that will be stored in a database. 
After that, users can authenticate with the given credentials. After the login users will be redirected to 
to a blog page where they can add and modify their posts. They can also access a chat room from there.

## Development server

Run `npm run-script start:angular` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
All Http calls will be redirected to port 3000.

## Running Node Server
To run the node server it is required to be in the root folder. 
After that run `nodemon server.js`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
A socialnetwork like website in which you can chat with other users and visit blog posts 
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
