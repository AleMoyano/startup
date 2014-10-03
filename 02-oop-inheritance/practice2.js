function Movie(){
	this.attributes = {
		title : '',
		duration : '',
		director : '',
		actor : []
	}
}

Movie.prototype.set = function(attr , value){
	this.attributes[attr] = value;
}

Movie.prototype.get = function(){
	console.log(this.attributes.title);
	return this.attributes.title;
}

Movie.prototype.play = function (){
	console.log ('Playing '+this.attributes['title']+'...');
}

Movie.prototype.stop = function(){
	console.log ('Stopped '+this.attributes['title']+'...');
}


var terminator2 = new Movie();
terminator2.set('title' , 'Terminator II');


// MOVIE REFACTORED AS MODULE //
var movieModule =(function() {

  function movie(){
		this.attributes = {
			title : '',
			duration : '',
			director : '',
			actor : []
		}
	}

	movie.prototype.set = function(attr , value){
		this.attributes[attr] = value;
	}

	movie.prototype.get = function(attr){
		console.log(this.attributes[attr]);
		return this.attributes[attr];
	}

	movie.prototype.play = function (){
		console.log ('Playing '+this.attributes.title+'...');
	}

	movie.prototype.stop = function(){
		console.log ('Stopped '+this.attributes.title+'...');
	}
	return movie;

}());

// downloadableMovie
var downloadableMovie = (function(){

  function downloadableMovie(){ 
      movieModule.apply(this, arguments); // call the base objects constructor
  }
  
  downloadableMovie.prototype = Object.create(movieModule.prototype); // inherit from the base object prototype
  downloadableMovie.prototype.constructor = downloadableMovie;
  
  downloadableMovie.prototype.download = function(){
      console.log("I'm downloading "+this.attributes.title);
  };

  return downloadableMovie;

})();

var movie1 = new Movie();
var movie2 = new Movie();