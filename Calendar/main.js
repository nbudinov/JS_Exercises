// if (typeof define !== 'function') { var define = require('amdefine')(module) };

var usersController = Object.create(usersController).init();
var adminController = Object.create(adminController).init();
var db = Object.create(dbController).init();
var resController = Object.create(reservationsController).init();

var sammyApp = Sammy('#content', function() {

	this.get('#/', usersController.handleReservation);

	this.get('#/admin', adminController.handleReservation);

});

sammyApp.run('#/');
