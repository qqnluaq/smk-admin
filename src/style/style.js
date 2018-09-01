include.module( 'styleTag', [ 'styleTag.style-html' ], function ( inc ) {
    "use strict"

    // "style": {
    //     "strokeWidth": 1,
    //     "strokeStyle": "1, 1",
    //     "strokeColor": "#000000",
    //     "strokeOpacity": 0.8,
    //     "fillColor": "#000000",
    //     "fillOpacity": 0.5,
    //     "markerSize": [
    //         20,
    //         20
    //     ],
    //     "markerOffset": [
    //         10,
    //         0
    //     ]
    // }, 
    
    Vue.component( 'cfg-style', {
        template: inc[ 'styleTag.style-html' ],
        props: [ 'styleConfig' ],
        model: {
            prop: 'styleConfig',
            event: 'change'
        },
        computed: {
            strokeWidth: {
                get: function () { return this.styleConfig.strokeWidth },
                set: function ( value ) { 
                    this.styleConfig.strokeWidth = value 
                    this.$emit( 'change', this.styleConfig )
                }
            },
            strokeColor: {
                get: function () { return this.styleConfig.strokeColor },
                set: function ( value ) { 
                    this.styleConfig.strokeColor = value 
                    this.$emit( 'change', this.styleConfig )
                }
            },
            strokeOpacity: {
                get: function () { return this.styleConfig.strokeOpacity },
                set: function ( value ) { 
                    this.styleConfig.strokeOpacity = value 
                    this.$emit( 'change', this.styleConfig )
                }
            },
            fillColor: {
                get: function () { return this.styleConfig.fillColor },
                set: function ( value ) { 
                    this.styleConfig.fillColor = value 
                    this.$emit( 'change', this.styleConfig )
                }
            },
            fillOpacity: {
                get: function () { return this.styleConfig.fillOpacity },
                set: function ( value ) { 
                    this.styleConfig.fillOpacity = value 
                    this.$emit( 'change', this.styleConfig )
                }
            }
        }
    } )

} )
