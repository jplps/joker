# Joker

Tell a joke and get a laugh!

## Concept

This system is built following the study made by [Greg Dean's Stand-Up Comedy Classes](https://stand-upcomedy.com/). 
**Do you know how to write a joke?** There, you'll learn more about structures and other cool stuff! Please visit.

## Structure

System: Dynamic Application 
Main lang(s): JavaScript (ECMA) / TypeScript 
Stack: Node / Express & Knex / React 
Pattern: RESTful

### Server - The base backend with Node & Express

Responsable for business rules, defines how the app behaves. It connects with the db and any external services needed. It handles the complete authentication/authorization for the users, criptography and security. 

The usage of the RESTful pattern differs from the classic MVC (Model, View, Controller) because it doesn't return the full page to the user but the data the client needs to render the complete view in the frontend (usually in JSON - JavaScript Object Notation). 

Despite the differences, we can benefit from the pattern nomenclature to separate functionality. Besides, when we build the backend this way, the flexibility allow us to communicate successfully with the mobile app without a change.

### Frontend - React

With React we at the edge of the componentization pattern. Responsable for the interface of the web & mobile system (all the listings, dashboards, etc, with HTML & CSS and more) with the user, it helps us deal with a lot.

## Check the app

Now we may open two differents terminals, and this should get the app up and running

		server/ $ yarn dev
		web/ $ yarn start

If all went well, see localhost:3000 in the browser.