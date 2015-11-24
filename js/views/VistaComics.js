
//Vista pensada para mostrar una lista de comics.
//Pueden ser resultados de búsqueda o la lista de "mis comics"

Marvel.Views = Marvel.Views || {};

(function () {
    'use strict';

    //Es una colección de subvistas, no tiene HTML propio.
    //El HTML es la concatenación del de las subvistas
    Marvel.Views.VistaComics = Mn.CollectionView.extend({
        //Las subvistas hijas son del tipo "VistaComic"
        childView: Marvel.Views.VistaComic
    });

})();