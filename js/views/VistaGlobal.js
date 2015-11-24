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
        childEvents: {
            'completed:search' : function(child, col) {
                console.log(col);
                this.getRegion('listado').show(new Marvel.Views.VistaComics({
                    collection: col
                }))
            },
            'show:details': function(child, model) {
                this.vistaLista = this.getRegion('listado').currentView;
                var nv = new Marvel.Views.VistaDetallesComic({model: model});
                this.getRegion('listado').show(nv,{preventDestroy:true});
            },
            'hide:details': function() {
                this.getRegion('listado').show(this.vistaLista);
            }
        }
    });
})();
