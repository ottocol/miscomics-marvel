Marvel.Models = Marvel.Models || {};

(function () {
    'use strict';

    Marvel.Models.Usuario = Backbone.Model.extend({
        initialize: function() {
            this.listenTo(this, 'sync', this.actualizaSessionToken.bind(this))
        },
        url: function() {
            return 'https://api.parse.com/1/login?username='+
              encodeURIComponent(this.get('username'))+'&password='+
              encodeURIComponent(this.get('password'));
        },
        idAttribute: 'objectId',
        actualizaSessionToken: function() {
            Marvel.Globals.SESSION_TOKEN = this.get("sessionToken");
            console.log("token de sesión actualizado");
        }
    });

})();
