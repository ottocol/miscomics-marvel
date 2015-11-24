/*global Marvel, Backbone*/

Marvel.Collections = Marvel.Collections || {};

(function () {
    'use strict';

    Marvel.Collections.Favoritos = Backbone.Collection.extend({
        model: Marvel.Models.Favorito,
        url: 'https://api.parse.com/1/classes/Favorito',
        parse: function(response,options) {
            return response.results;
        }
    });

})();
