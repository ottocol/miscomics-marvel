
var Marvel = {
    Constants: {
        API_URL: 'http://gateway.marvel.com/v1/public/comics',
        API_KEY: 'a6927e7e15930110aade56ef90244f6d'
    },
    Globals: {
        SESSION_TOKEN: ""
    }
};


//Para poder usar Mustache con Marionette
Backbone.Marionette.Renderer.render = function(template,data) {
    return Mustache.render($(template).html(),data);
}

//Para interactuar con el API de Parse
$.ajaxPrefilter(function (opts, originalOpts, jqXHR) {
    if (originalOpts.url.indexOf('parse.com')>=0) {
        var headers = originalOpts.headers || {};
        opts.headers = $.extend(headers, {
            "X-Parse-Application-Id": "YJC4zDW3m6juerUr3e5khFWaAwK6LZPuymLsFY4R",
            "X-Parse-REST-API-Key": "N3VZ5lHAmlFywCPzZTLsWohymDVKsiI47JL0c7cc",
            "X-Parse-Session-Token": Marvel.Globals.SESSION_TOKEN
        });
    }
});


var u, fav, misFavs;

$('document').ready(function() {
    Marvel.vg = new Marvel.Views.VistaGlobal();
    Marvel.vg.getRegion('formBusqueda').show(new Marvel.Views.VistaBuscarComics());
});
