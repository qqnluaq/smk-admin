( function () {
    "use strict"

    window.ADMIN = {}

    ADMIN.store = new Vuex.Store( {
        // state: {
        //     "name": "New Map",
        //     "createdBy": "GIS Guy",
        //     "published": false,
        //     "viewer": {
        //       "type": "leaflet",
        //       "location": {
        //         "extent": [
        //           -140.22949218750003,
        //           59.998986120604464,
        //           -109.77539062500001,
        //           48.28319289548349
        //         ],
        //         "center": [
        //           -139.1782,
        //           47.6039
        //         ],
        //         "zoom": 5
        //       },
        //       "baseMap": "Streets",
        //       "clusterOption": false
        //     },          
        // }
    } )

    // Vue.use( Vuex )
    include( 'admin', 'configuration' ).then( function ( inc ) {
        ADMIN.vm = new Vue( {
            el: '#app',
            store: ADMIN.store,
            // template: inc[ 'admin.admin-html' ],
        } )  
    } )

} )()