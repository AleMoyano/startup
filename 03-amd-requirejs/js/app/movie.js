
define(function () {

  return  { 
  	movieModule : (function (){
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
  }())

  }
}());
