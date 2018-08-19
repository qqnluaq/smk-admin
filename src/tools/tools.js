include.module( 'tools', [ 'tools.tools-html', 'tools.tool-html', 'tools.tool-basemaps-html' ], function ( inc ) {
    "use strict"

    function toolId( t ) {
        return t.type + ( t.instance ? '-' + t.instance : '' )
    }

    function toolById( state, id ) {
        var tools = state.tools.filter( function ( t ) { return toolId( t ) == id } )
        if ( tools.length != 1 ) {
            console.warn( id, tools )
            throw "tool id " + id + " doesnt match unique tool"
        }
        return tools[ 0 ]
    }

    var toolBase = {

    }

    Vue.component( 'cfg-tool', {
        template: inc[ 'tools.tool-html' ],
        props: [ 'id' ],
        computed: {
            type: {
                get: function () { return toolById( this.$store.state, this.id ).type }
            },
            title: {
                get: function () { return toolById( this.$store.state, this.id ).title },
                set: function ( value ) { this.$store.commit( 'setToolProp', { id: this.id, prop: 'title', value: value } ) }
            },
            position: {
                get: function () { return toolById( this.$store.state, this.id ).position }
            },
            enabled: {
                get: function () { return toolById( this.$store.state, this.id ).enabled },
                set: function ( value ) { this.$store.commit( 'setToolProp', { id: this.id, prop: 'enabled', value: value } ) }
            }
        }
    } )

    function makeTool( id, mixin ) {
        if ( !mixin ) mixin = {
            template: '<div class="smka-tool-' + id + '"><cfg-tool id="' + id + '"></cfg-tool></div>'
        }
        Vue.component( 'cfg-tool-' + id, {
            mixins: [ mixin ]
        } )
    }

    makeTool( 'about' )
    makeTool( 'baseMaps', {
        template: inc[ 'tools.tool-basemaps-html' ],       
        computed: {
            choices: {
                get: function () { return toolById( this.$store.state, 'baseMaps' ).choices },
                set: function ( value ) { this.$store.commit( 'setToolProp', { id: 'baseMaps', prop: 'choices', value: value } ) }
            }
        }
    } )
    makeTool( 'coordinate' )
    makeTool( 'directions' )
    makeTool( 'dropdown' )
    makeTool( 'identify' )
    makeTool( 'layers' )
    makeTool( 'location' )
    makeTool( 'markup' )
    makeTool( 'measure' )
    makeTool( 'menu' )
    makeTool( 'minimap' )
    makeTool( 'pan' )
    makeTool( 'scale' )
    makeTool( 'search' )
    makeTool( 'select' )
    makeTool( 'version' )
    makeTool( 'zoom' )

    // Vue.component( 'cfg-tool-pan', {
    //     extends: Vue.component( 'cfg-tool' ),
    //     computed: {
    //         id: {
    //             get: function () { return 'pan' }
    //         }
    //     }
    // } )

    Vue.component( 'cfg-tools', {
        template: inc[ 'tools.tools-html' ],
    } )

    return {
        initStoreConfig: function ( config ) {
            Object.assign( config.mutations, {
                setToolProp: function ( state, toolProp ) {
                    var tool = toolById( state, toolProp.id )
                    tool[ toolProp.prop ] = toolProp.value 
                }
            } )
        }
    }
} )
