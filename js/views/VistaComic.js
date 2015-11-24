Marvel.Views = Marvel.Views || {};

(function () {
    'use strict';

    Marvel.Views.VistaComic = Mn.ItemView.extend({
        template: '#VistaComicTmpl',
        tagName: 'tr',
        events: {
            'click .detalles' : 'verDetalles'
        },
        verDetalles: function() {
            console.log("detalles " +  this.model.get("title"));
            this.triggerMethod('show:details', this.model);
        }
    });

})();
