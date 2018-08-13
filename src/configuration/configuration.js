include.module( 'configuration', [ 'metadata', 'configuration.configuration-html' ], function ( inc ) {
    "use strict"

    Vue.component( 'admin-configuration', {
        template: inc[ 'configuration.configuration-html' ],
        created: console.log,
        mounted: console.log
    } )
    
} )
