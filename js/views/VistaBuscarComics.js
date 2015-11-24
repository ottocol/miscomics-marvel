Marvel.Views = Marvel.Views || {};

(function () {
    'use strict';

    Marvel.Views.VistaBuscarComics = Mn.ItemView.extend({
        template: '#VistaBuscarComicsTmpl',
        initialize: function() {
            this.collection = new Marvel.Collections.Comics();
            this.listenTo(this.collection, 'sync', this.busquedaCompletada.bind(this));
        },
        buscar: function() {
          console.log("buscar");
          this.collection.buscar(this.$('#titulo').val());
        },
        busquedaCompletada: function() {
          console.log("busqueda completada");
          this.triggerMethod('completed:search', this.collection);
        },
        events: {
          'click #botonBuscar' : 'buscar'
        }
    });

})();
