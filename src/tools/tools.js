include.module( 'tools', [ 'tools.tools-html', 'tools.tool-html' ], function ( inc ) {
    "use strict"

    function toolId( t ) {
        return t.type + ( t.instance ? '-' + t.instance : '' )
    }

    function toolById( state, id ) {
        var tools = state.tools.filter( function ( t ) { return toolId( t ) == id } )
        if ( tools.length != 1 ) throw "tool id " + id + " doesnt match unique tool"
        return tools[ 0 ]
    }

    Vue.component( 'admin-tool', {
        template: inc[ 'tools.tool-html' ],
        props: [ 'id' ],
        computed: {
            type: {
                get: function () {
                    return toolById( this.$store.state, this.id ).type
                }
            },
            title: {
                get: function () {
                    return toolById( this.$store.state, this.id ).title
                }
            },
            position: {
                get: function () {
                    return toolById( this.$store.state, this.id ).position
                }
            },
            enabled: {
                get: function () {
                    return toolById( this.$store.state, this.id ).enabled
                }
            },
        }
    } )

    Vue.component( 'admin-tools', {
        template: inc[ 'tools.tools-html' ],
        data: function () {
            return {
                mapState: {}
            }
        },
        methods: {
            setLocation: function ( arg ) {
                this.$store.commit( 'setLocation', arg )
                console.log( arg )

            }
        },
        computed: {
            type: {
                get: function () {
                    return this.$store.state.tools.type
                },
                set: function ( value ) {
                    this.$store.commit( 'setType', value )
                }
            },

            baseMap: {
                get: function () {
                    return this.$store.state.tools.baseMap
                },
                set: function ( value ) {
                    this.$store.commit( 'setBaseMap', value )
                }
            },

            center: {
                get: function () {
                    return this.$store.state.tools.location.center
                }
            },

            zoom: {
                get: function () {
                    return this.$store.state.tools.location.zoom
                }
            },
        }
    } )

    return {
        initStoreConfig: function ( config ) {
            Object.assign( config.mutations, {
                setType: function ( state, value ) {
                    state.tools.type = value
                    // state.type = value
                },
                
                setBaseMap: function ( state, value ) {
                    state.tools.baseMap = value
                },

                setLocation: function ( state, value ) {
                    state.tools.location.extent = value.extent
                    state.tools.location.center = value.center
                    state.tools.location.zoom = value.zoom
                }       
            } )
        }
    }
} )
