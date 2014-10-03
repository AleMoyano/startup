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
	


	function Actor(name){
		this.name = name;
	}

	var social = function() {
		this.share = function(friendName){
			console.log('Sharing '+this.attributes.title+' with '+friendName);
		};
		this.like = function(){
			console.log('I like '+this.attributes.title);
		}
	}; 

	social.call(movieModule.prototype);

	var terminator = new movieModule(),
			titanic = new movieModule(),
			shrek = new downloadableMovie(),
			actors = [],
			aleMoyano = new Actor("Alexis Moyano"),
			aleMoyano1 = new Actor("Alexis Moyano"), 
			aleMoyano2 = new Actor("Alexis Moyano"), 
			aleMoyano3 = new Actor("Alexis Moyano"); 
	
	
	terminator.set('title' , 'Terminator');
	titanic.set('title','Titanic');
	shrek.set('title','Shrek II');

	terminator.play();
	terminator.stop();
	titanic.play();
	titanic.stop();
	shrek.download();
	shrek.set('director','Cameron');
	shrek.get('director');
	terminator.share('Alexis Moyano');

	actors.push(aleMoyano);
	actors.push(aleMoyano1);
	actors.push(aleMoyano2);
	actors.push(aleMoyano3);

	terminator.set('actor',actors);
