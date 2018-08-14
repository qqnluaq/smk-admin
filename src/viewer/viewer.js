include.module( 'viewer', [ 'viewer.viewer-html' ], function ( inc ) {
    "use strict"

    Vue.directive( 'map', {
        unbind: function ( el, binding ) {
            console.log( 'unbind', binding )
            binding.value.map.remove()
        },

        inserted: function ( el, binding ) {
            console.log( 'inserted', binding )

            var map = L.map( el, {
                attributionControl: false,
                // zoomControl: false,
                // dragging: false,
                // keyboard: false,
                // scrollWheelZoom: false,
                zoom: 10
            } );
            binding.value.map = map

            map.addLayer( L.esri.basemapLayer( binding.value.baseMap, { detectRetina: true } ) )

            map.setZoom( binding.value.zoom, { animate: false } )

            map.panTo( [ binding.value.center[ 1 ], binding.value.center[ 0 ] ], { animate: false } )

            // if ( binding.value.center ) {
                // map.setView( smkPointLatLng( binding.value.center ), binding.value.zoom )
            // }

            map.invalidateSize()
        },

        update: function ( el, binding ) {
            console.log( 'update', binding )

            var map = binding.value.map

            // if ( binding.value.center ) {
                // map.setView( smkPointLatLng( binding.value.center ), binding.value.zoom )
                // map.invalidateSize();
            // }
        }
    } )

    var module = {
        state: {
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
        mutations: {
            setType: function ( state, value ) {
                state.type = value
            },
            setBaseMap: function ( state, value ) {
                state.baseMap = value
            }
        }
    }

    ADMIN.store.registerModule( 'viewer', module )

    Vue.component( 'admin-viewer', {
        template: inc[ 'viewer.viewer-html' ],
        computed: {
            type: {
                get: function () {
                    return this.$store.state.viewer.type
                },
                set: function ( value ) {
                    this.$store.commit( 'setType', value )
                }
            },

            baseMap: {
                get: function () {
                    return this.$store.state.viewer.baseMap
                },
                set: function ( value ) {
                    this.$store.commit( 'setBaseMap', value )
                }
            },

            center: {
                get: function () {
                    return this.$store.state.viewer.location.center
                },
                set: function ( value ) {
                    // this.$store.commit( 'setBaseMap', value )
                }
            },

            zoom: {
                get: function () {
                    return this.$store.state.viewer.location.zoom
                },
                set: function ( value ) {
                    // this.$store.commit( 'setBaseMap', value )
                }
            },
        }
    } )


} )
