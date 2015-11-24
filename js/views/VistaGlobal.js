Marvel.Views = Marvel.Views || {};

(function () {
    'use strict';

    Marvel.Views.VistaGlobal = Mn.LayoutView.extend({
        template: false,
        el: 'body',
        regions: {
            cabecera: '#cabecera',
            formBusqueda: "#formBusqueda",
            listado: '#listado'
        },
        initialize: function() {
            this.getRegion('formBusqueda').show(new Marvel.Views.VistaBuscarComics());
        },
        //La vista global escucha los eventos de sus hijas
        childEvents: {
            //cuando se obtienen los resultados del API
            'completed:search' : function(child, col) {
                this.getRegion('listado').show(new Marvel.Views.VistaComics({
                    collection: col
                }))
            },
            //Cuando se ha pulsado sobre "ver detalles" en un elemento de la lista
            'show:details': function(child, model) {
                this.vistaLista = this.getRegion('listado').currentView;
                var nv = new Marvel.Views.VistaDetallesComic({model: model});
                //preventDestroy evita que se libere la memoria de la vista de lista
                //ya que nos va a servir de nuevo cuando se cierren los detalles
                this.getRegion('listado').show(nv,{preventDestroy:true});
            },
            //Cuando se ha pulsado sobre "cerrar detalles"
            'hide:details': function() {
                this.getRegion('listado').show(this.vistaLista);
            }
        }
    });
})();
