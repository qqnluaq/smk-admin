( function () {

// include.module( 'admin', [ 'admin.admin-html' ], function ( inc ) {
    "use strict"

    var store = new Vuex.Store( {
        state: {
            "name": "New Map",
            "createdBy": "GIS Guy",
            "published": false,
            "viewer": {
              "type": "leaflet",
              "location": {
                "extent": [
                  -140.22949218750003,
                  59.998986120604464,
                  -109.77539062500001,
                  48.28319289548349
                ],
                "center": [
                  -139.1782,
                  47.6039
                ],
                "zoom": 5
              },
              "baseMap": "Streets",
              "clusterOption": false
            },          
        }
    } )

    // Vue.use( Vuex )

    include( 'admin' ).then( function ( inc ) {
        var vm = new Vue( {
            el: '#app',
            store: store,
            template: inc[ 'admin.admin-html' ]
        } )  
    } )

} )()