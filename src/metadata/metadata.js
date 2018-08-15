include.module( 'metadata', [ 'metadata.metadata-html' ], function ( inc ) {
    "use strict"

    Vue.component( 'admin-metadata', {
        template: inc[ 'metadata.metadata-html' ],
        computed: {
            name: {
                get: function () {
                    return this.$store.state.name
                },
                set: function ( value ) {
                    this.$store.commit( 'setName', value )
                }
            },

            published: {
                get: function () {
                    return this.$store.state.published
                }
            },
        }
    } )

    return {
        initStoreConfig: function ( config ) {
            Object.assign( config.mutations, {
                setName: function ( state, value ) {
                    state.name = value
                }
            } )
        }
    }
} )
