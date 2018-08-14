include.module( 'metadata', [ 'metadata.metadata-html' ], function ( inc ) {
    "use strict"

    var module = {
        state: {
            "name": "New Map",
            "createdBy": "GIS Guy",
            "published": false,
        },
        mutations: {
            setName: function ( state, value ) {
                state.name = value
            },
        }
    }

    ADMIN.store.registerModule( 'metadata', module )

    Vue.component( 'admin-metadata', {
        template: inc[ 'metadata.metadata-html' ],
        computed: {
            name: {
                get: function () {
                    return this.$store.state.metadata.name
                },
                set: function ( value ) {
                    this.$store.commit( 'setName', value )
                }
            },

            published: {
                get: function () {
                    return this.$store.state.metadata.published
                }
            },
        }
    } )
} )
