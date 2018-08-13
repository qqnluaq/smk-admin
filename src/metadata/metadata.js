include.module( 'metadata', [ 'metadata.metadata-html' ], function ( inc ) {
    "use strict"

    Vue.component( 'admin-metadata', {
        template: inc[ 'metadata.metadata-html' ],
        created: console.log,
        mounted: console.log
    } )
} )
