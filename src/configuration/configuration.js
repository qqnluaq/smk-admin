include.module( 'configuration', [ 'metadata', 'viewer', 'configuration.configuration-html' ], function ( inc ) {
    "use strict"

    Vue.component( 'admin-configuration', {
        template: inc[ 'configuration.configuration-html' ]
    } )
    
} )
