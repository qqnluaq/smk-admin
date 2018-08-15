include.module( 'configuration', [ 'metadata', 'viewer', 'tools', 'configuration.configuration-html' ], function ( inc ) {
    "use strict"

    Vue.component( 'admin-configuration', {
        template: inc[ 'configuration.configuration-html' ]
    } )

    return { 
        initStoreConfig: function ( config ) {
            inc[ 'metadata' ].initStoreConfig( config )
            inc[ 'viewer' ].initStoreConfig( config )
            inc[ 'tools' ].initStoreConfig( config )
        }
    }
} )
