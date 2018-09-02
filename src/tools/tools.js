include.module( 'tools', [ 
    'tools.tools-html', 
    'tools.tool-html', 
    'tools.tool-about-html',
    'tools.tool-basemaps-html',
    'tools.tool-identify-html',
    'tools.tool-scale-html',
    'tools.tool-select-html',
    'tools.tool-zoom-html',
    'styleTag'
], function ( inc ) {
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

    function makeToolPropAccessor( prop ) {
        return {
            get: function () { 
                return toolById( this.$store.state, this.id )[ prop ]
            },
            set: function ( value ) { 
                this.$store.commit( 'setToolProp', { id: this.id, prop: prop, value: value } ) 
            }
        }
    }

    Vue.component( 'cfg-tool', {
        template: inc[ 'tools.tool-html' ],
        props: [ 'id' ],
        computed: {
            type: {
                get: function () { return toolById( this.$store.state, this.id ).type }
            },
            title: makeToolPropAccessor( 'title' ),
            position:  makeToolPropAccessor( 'position' ),
            enabled: makeToolPropAccessor( 'enabled' ),
        }
    } )

    function makeTool( id, option ) {
        if ( option && option.computed )
            option.computed.id = { get: function () { return id } }

        Vue.component( 'cfg-tool-' + id, Object.assign( {
            template: '\
                <div class="smka-tool-' + id + '">\
                    <cfg-tool id="' + id + '"></cfg-tool>\
                </div>\
            '
        }, option ) )
    }

    makeTool( 'about', {
        template: inc[ 'tools.tool-about-html' ],       
        computed: {
            content: makeToolPropAccessor( 'content' )
        }
    } )

    makeTool( 'baseMaps', {
        template: inc[ 'tools.tool-basemaps-html' ],       
        computed: {
            choices: makeToolPropAccessor( 'choices' )
        }
    } )
    
    makeTool( 'coordinate' )
    makeTool( 'directions' )
    makeTool( 'dropdown' )
    makeTool( 'identify', {
        template: inc[ 'tools.tool-identify-html' ],       
        computed: {
            styleConfig: makeToolPropAccessor( 'style' ),
            hasStyle: {
                get: function () { return !!toolById( this.$store.state, this.id ).style },
                set: function ( value ) {
                    var style
                    if ( value )
                        style = {
                            "strokeWidth": 1,
                            // "strokeStyle": "1, 1",
                            // "strokeColor": "#000000",
                            // "strokeOpacity": 0.8,
                            // "fillColor": "#000000",
                            // "fillOpacity": 0.5,
                            // "markerSize": [
                            //     20,
                            //     20
                            // ],
                            // "markerOffset": [
                            //     10,
                            //     0
                            // ]
                        }
                    else 
                        style = null
                    this.$store.commit( 'setToolProp', { id: this.id, prop: 'style', value: style } ) 
                }
            }
        }
    } )

    makeTool( 'layers' )
    makeTool( 'location' )
    makeTool( 'markup' )
    makeTool( 'measure' )
    makeTool( 'menu' )
    makeTool( 'minimap' )
    makeTool( 'pan' )

    makeTool( 'scale', {
        template: inc[ 'tools.tool-scale-html' ],       
        computed: {
            showFactor: makeToolPropAccessor( 'showFactor' ),
            showBar: makeToolPropAccessor( 'showBar' ),
        }
    } )

    makeTool( 'search' )
    makeTool( 'select', {
        template: inc[ 'tools.tool-select-html' ],       
        computed: {
            styleConfig: makeToolPropAccessor( 'style' ),
        }
    } )
    makeTool( 'version' )
    makeTool( 'zoom', {
        template: inc[ 'tools.tool-zoom-html' ],       
        computed: {
            mouseWheel: makeToolPropAccessor( 'mouseWheel' ),
            doubleClick: makeToolPropAccessor( 'doubleClick' ),
            box: makeToolPropAccessor( 'box' ),
            control: makeToolPropAccessor( 'control' ),        
        }
    } )

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
