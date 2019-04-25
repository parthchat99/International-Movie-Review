IMR or International Movie Review is an app which is based on IMDB. It is build using Angular 7 as Frontend, Nodejs as Backend Language and MongoDB as Database. ExpressJS is used to build REST API. Using this app anyone can perform CRUD(Create, Read, Update, Delete) operations.

To run, you just have MongoDB installed and running, and NodeJS installed and running.

* Start MongoDB:-
	To start mongo server - $sudo systemctl enable mongod
							$sudo service mongod restart
							$mongo

* Add nodemodules to angular application:-
							$npm install
	Navigate to api folder and install nodemodules
							$npm install

* Start Node Server:- Navigate to api folder then do the following
							$npm start
	
* To start nodemon server - $npm install nodemon
							$nodemon server 

* Inside client folder install nodemodules using '$npm install'. After that '$ng update @angular/cli'. Then '$ng serve'
* Open http://localhost:4200 to see the application
