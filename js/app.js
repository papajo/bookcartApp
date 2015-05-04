var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function($routeProvider) {
	$routeProvider
		.when("/books", {
			templateUrl: "partials/book-list.html",
			controller: "BookListCtrl"
		})
		.when("/cart", {
			templateUrl: "partials/kart-list.html",
            controller: "CartListCtrl"
		})
	   .otherwise({
		  redirectTo: "/books"
	});
});

myApp.factory("bookService", function(){
    var books  = [
		{
			imgUrl: "martian.jpg",
			name: "The Martian",
			price: 5.45,
			rating: 4,
			binding: "Paperback",
			publisher: "Crown",
			releaseDate: "2014-02-11",
			details: "The Martian the martian the martian the martian the martian the martian the martian the martian the martian the martian the martian the martian the martian the martian the martian the martian ... <a href='#'>View More<a>"
		},
		{
			imgUrl: "geronimo.jpeg",
			name: "Geronimo Stilton Spacemice#2 : You're Mine, Captain!",
			price: 6.85,
			rating: 5,
			binding: "Paperback",
			publisher: "Scholastic",
			releaseDate: "2014-07-01",
			details: "Geronimo Stilton meets outer space in this cosmically fun spin-off series!Meet Geronimo StiltonixHe is a spacemouse - the Geronimo Stilton of a parallel universe! He is captain of the spaceship Mou... View More"
		},
		{
			imgUrl: "life-or-death.jpeg",
			name: "Life or Death",
			price: 3.95,
			rating: 4,
			binding: "Paperback",
			publisher: "Hachette",
			releaseDate: "2014-01-04",
			details: "Why would a man escape from prison the day before he's due to be released? Audie Palmer has spent a decade in prison for an armed robbery in which four people died, including two of his gang. Five... View More"
		},
		{
			imgUrl: "firstdays.jpg",
			name: "The First Days - As the World Dies",
			price: 5.99,
			rating: 4,
			binding: "Hardcover",
			publisher: "Tor Books",
			releaseDate: "2011-07-05",
			details: "Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son.... View More"
		},
		{
			imgUrl: "the-fault.jpeg",
			name: "The Fault in Our Stars",
			price: 3.75,
			rating: 4.5,
			binding: "Paperback",
			publisher: "Penguin Books Ltd",
			releaseDate: "2013-01-25",
			details: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist n... View More"
		},
		{
			imgUrl: "magonia.jpg",
			name: "Magonia",
			price: 4.50,
			rating: 4,
			binding: "Paperback",
			publisher: "Haperteen",
			releaseDate: "2015-04-28",
			details: "Neil Gaiman’s Stardust meets John Green’s The Fault in Our Stars in this fantasy about a girl caught between two worlds... two races…and two destinies.... View More"
		}
	];
    return {
        getBooks: function(){
            return books;   
        }
    }
});

myApp.factory("cartService", function(){
    var cart = [];
    return {
        getCart: function(){
            return cart;
        },
        addToCart: function(book){
            cart.push(book);
        },
        buy: function(book){
           alert("Thanks for buying the book ", book.name);
    }
    }
});

myApp.controller("CartListCtrl", function($scope, cartService){
    $scope.cart = cartService.getCart();
    
    $scope.buy = function(book){
        cartService.buy(book);  
    }
});

myApp.controller("HeaderCtrl", function($scope, $location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "BooksNArt";
	$scope.appDetails.tagline = "We have collection of a Million Books and Art";
    
    $scope.nav = {};
    $scope.nav.isActive = function(path){
        if (path == $location.path) {
            return true;
        }
        return false;
    }
});

myApp.controller("BookListCtrl", function($scope, bookService, cartService) {
	$scope.books = bookService.getBooks();
	
	$scope.addToCart = function(book) {
		cartService.addToCart(book);
	}
});