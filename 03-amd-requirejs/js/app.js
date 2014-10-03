requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['jquery','app/movie'],function ($, mov) {

    var m1 = new mov.movieModule();
        m2 = new mov.movieModule();
    m1.set('title','terminator');
    m2.set('title','tinator');
    m1.play();
    m2.play();

});

