include.module( 'viewer', [ 'viewer.viewer-html' ], function ( inc ) {
    "use strict"

    Vue.directive( 'map', {
        unbind: function ( el, binding,vnode ) {
            // console.log( 'unbind', binding,vnode )
            binding.value.mapState.map.remove()
        },

        inserted: function ( el, binding,vnode ) {
            // console.log( 'inserted', binding,vnode )

            var map = L.map( el, {
                attributionControl: false,
                // zoomControl: false,
                // dragging: false,
                // keyboard: false,
                // scrollWheelZoom: false,
                zoom: 10
            } );
            binding.value.mapState.map = map

            map.addLayer( L.esri.basemapLayer( binding.value.baseMap, { detectRetina: true } ) )
            map.setZoom( binding.value.zoom, { animate: false } )
            map.panTo( [ binding.value.center[ 1 ], binding.value.center[ 0 ] ], { animate: false } )

            map.on( 'zoomend', changedView )
            map.on( 'moveend', changedView )
            
            function changedView() {
                var b = map.getBounds()
                var c = map.getCenter()

                vnode.context.$store.commit( 'setLocation', {
                    center: { latitude: c.lat, longitude: c.lng },
                    zoom: map.getZoom(),
                    extent: [ b.getWest(), b.getSouth(), b.getEast(), b.getNorth() ],
                } )
            }

            map.invalidateSize()
        },

        update: function ( el, binding,vnode ) {
            // console.log( 'update', binding,vnode )

            var map = binding.value.mapState.map

            if ( binding.oldValue.baseMap != binding.value.baseMap ) {
                map.eachLayer( function ( ly ) { map.removeLayer( ly ) } )
                map.addLayer( L.esri.basemapLayer( binding.value.baseMap, { detectRetina: true } ) )
            }
        },
    } )

    Vue.component( 'cfg-viewer', {
        template: inc[ 'viewer.viewer-html' ],
        data: function () {
            return {
                mapState: {}
            }
        },
        computed: {
            type: {
                get: function () { return this.$store.state.viewer.type },
                set: function ( value ) { this.$store.commit( 'setType', value ) }
            },

            baseMap: {
                get: function () { return this.$store.state.viewer.baseMap },
                set: function ( value ) { this.$store.commit( 'setBaseMap', value ) }
            },

            center: {
                get: function () { return this.$store.state.viewer.location.center }
            },

            zoom: {
                get: function () { return this.$store.state.viewer.location.zoom }
            },
        }
    } )

    return {
        initStoreConfig: function ( config ) {
            Object.assign( config.mutations, {
                setType: function ( state, value ) {
                    state.viewer.type = value
                },
                
                setBaseMap: function ( state, value ) {
                    state.viewer.baseMap = value
                },

                setLocation: function ( state, value ) {
                    state.viewer.location.extent = value.extent
                    state.viewer.location.center = value.center
                    state.viewer.location.zoom = value.zoom
                }       
            } )
        }
    }
} )
