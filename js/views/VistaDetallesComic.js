Marvel.Views = Marvel.Views || {};

(function () {
    'use strict';

    Marvel.Views.VistaDetallesComic = Mn.ItemView.extend({
        template: '#VistaDetallesComicTmpl',
        cerrarDetalles: function(e) {
            e.preventDefault();
            this.triggerMethod('hide:details');
        },
        events: {
          'click .cerrarDetalles' : 'cerrarDetalles'
        }
    });

})();