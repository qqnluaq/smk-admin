include( 'admin', 'configuration' ).then( function ( inc ) {
    "use strict"

    var storeConfig = {
        state: config(),
        mutations: {},
        actions: {},
    }

    inc[ 'configuration' ].initStoreConfig( storeConfig )

    window.ADMIN = {}

    ADMIN.store = new Vuex.Store( storeConfig )

    ADMIN.vm = new Vue( {
        el: '#app',
        store: ADMIN.store,
    } )  

    function config() {
        return {
            "name": "New Map",
            "createdBy": "GIS Guy",
            "published": false,
            "viewer": {
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
            "tools": [
                {
                    "type": "coordinate",
                    "enabled": false,
                    "title": "Coordinate",
                    "showPanel": true
                },
                {
                    "type": "attribution",
                    "enabled": false,
                    "title": "Attribution",
                    "showPanel": true
                },
                {
                    "type": "layers",
                    "enabled": true,
                    "title": "Layers Panel",
                    "showPanel": true
                },
                {
                    "type": "pan",
                    "enabled": true,
                    "title": "Panning",
                    "showPanel": true
                },
                {
                    "type": "zoom",
                    "enabled": true,
                    "title": "Zooming",
                    "showPanel": true,
                    "mouseWheel": true,
                    "doubleClick": true,
                    "box": true,
                    "control": true
                },
                {
                    "type": "measure",
                    "enabled": false,
                    "title": "Measurement",
                    "showPanel": true
                },
                {
                    "type": "markup",
                    "enabled": false,
                    "title": "Markup",
                    "showPanel": true
                },
                {
                    "type": "scale",
                    "enabled": false,
                    "title": "Scale",
                    "showPanel": true,
                    "showFactor": true,
                    "showBar": true
                },
                {
                    "type": "minimap",
                    "enabled": false,
                    "title": "Mini Map",
                    "showPanel": true,
                    "baseMap": "Topographic"
                },
                {
                    "type": "directions",
                    "enabled": false,
                    "title": "Directions",
                    "showPanel": true
                },
                {
                    "type": "about",
                    "enabled": true,
                    "title": "About Panel",
                    "showPanel": true,
                    "content": "<p style=\"background-position: initial; background-color: white;\">Use the <a>Search</a> function to\nfind a residential care facility or an assisted living residence within the\nprovince. The search function gives you several options to select the type of services\nthat best meets your needs.&nbsp;<o:p></o:p></p>\n\n<p style=\"background-position: initial; background-color: white;\">When search results are\nreturned you can click on the facility or residence name or on the map icon to\nfind out more information about that facility or residence.<o:p></o:p></p><p class=\"MsoNormal\"><span style=\"font-size:12.0pt;line-height:115%;font-family:\n&quot;Times New Roman&quot;,&quot;serif&quot;\">If the facility or residence you are looking for is\nnot on the map, it may be due to one of the following: <o:p></o:p></span></p><p class=\"MsoListParagraphCxSpFirst\" style=\"margin-left:18.0pt;mso-add-space:\nauto;text-indent:-18.0pt;line-height:150%;mso-list:l0 level1 lfo1\"><!--[if !supportLists]--><span style=\"font-size:12.0pt;line-height:150%;font-family:Symbol;mso-fareast-font-family:\nSymbol;mso-bidi-font-family:Symbol\">·<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><!--[endif]--><span style=\"font-size:12.0pt;line-height:150%;\nfont-family:&quot;Times New Roman&quot;,&quot;serif&quot;\">The facility or residence has an\nexemption from posting its address under <u>CCALA sections </u></span><span class=\"MsoHyperlink\"><span style=\"font-size:12.0pt;line-height:150%;font-family:\n&quot;Times New Roman&quot;,&quot;serif&quot;;mso-fareast-font-family:&quot;Times New Roman&quot;;mso-fareast-language:\nEN-CA\">15.1(2)</span></span><span style=\"font-size:12.0pt;line-height:150%;\nfont-family:&quot;Times New Roman&quot;,&quot;serif&quot;\"> or </span><span class=\"MsoHyperlink\"><span style=\"font-size:12.0pt;line-height:150%;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;;\nmso-fareast-font-family:&quot;Times New Roman&quot;;mso-fareast-language:EN-CA\">25.4 (2)</span></span><span style=\"font-size:12.0pt;line-height:150%;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;\"><o:p></o:p></span></p><p class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left:18.0pt;mso-add-space:\nauto;text-indent:-18.0pt;line-height:150%;mso-list:l0 level1 lfo1\"><!--[if !supportLists]--><span style=\"font-size:12.0pt;line-height:150%;font-family:Symbol;mso-fareast-font-family:\nSymbol;mso-bidi-font-family:Symbol\">·<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><!--[endif]--><span style=\"font-size:12.0pt;line-height:150%;\nfont-family:&quot;Times New Roman&quot;,&quot;serif&quot;\">The facility or residence is not\nrequired to be licensed or registered (only 1 or 2 people receiving services)<o:p></o:p></span></p><p class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left:18.0pt;mso-add-space:\nauto;text-indent:-18.0pt;line-height:150%;mso-list:l0 level1 lfo1\"><!--[if !supportLists]--><span style=\"font-size:12.0pt;line-height:150%;font-family:Symbol;mso-fareast-font-family:\nSymbol;mso-bidi-font-family:Symbol\">·<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><!--[endif]--><span style=\"font-size:12.0pt;line-height:150%;\nfont-family:&quot;Times New Roman&quot;,&quot;serif&quot;\">The facility or residence is newly\nlicensed or registered &nbsp;and information\nhas not been uploaded to the map yet <o:p></o:p></span></p><p class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left:18.0pt;mso-add-space:\nauto;text-indent:-18.0pt;line-height:150%;mso-list:l0 level1 lfo1\"><!--[if !supportLists]--><span style=\"font-size:12.0pt;line-height:150%;font-family:Symbol;mso-fareast-font-family:\nSymbol;mso-bidi-font-family:Symbol\">·<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><!--[endif]--><span style=\"font-size:12.0pt;line-height:150%;\nfont-family:&quot;Times New Roman&quot;,&quot;serif&quot;\">The facility or residence may be\nrecently closed.<o:p></o:p></span></p>\n\n\n\n\n\n\n\n\n\n<p class=\"MsoListParagraphCxSpLast\" style=\"margin-left:18.0pt;mso-add-space:auto;\ntext-indent:-18.0pt;line-height:150%;mso-list:l0 level1 lfo1\"><!--[if !supportLists]--><span style=\"font-size:12.0pt;line-height:150%;font-family:Symbol;mso-fareast-font-family:\nSymbol;mso-bidi-font-family:Symbol\">·<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><!--[endif]--><span style=\"font-size:12.0pt;line-height:150%;\nfont-family:&quot;Times New Roman&quot;,&quot;serif&quot;\">The facility or residence may be\noperating in contravention of legislation without a licence or\nregistration.&nbsp;&nbsp;<o:p></o:p></span></p><span style=\"font-size:12.0pt;line-height:150%;\nfont-family:&quot;Times New Roman&quot;,&quot;serif&quot;\"><br></span>"
                },
                {
                    "type": "location",
                    "enabled": false,
                    "title": "Location",
                    "showPanel": true
                },
                {
                    "type": "baseMaps",
                    "enabled": false,
                    "title": "Base Maps Panel",
                    "showPanel": true,
                    "choices": [
                        "Topographic",
                        "Streets",
                        "Imagery",
                        "Oceans",
                        "NationalGeographic",
                        "DarkGray",
                        "Gray"
                    ]
                },
                {
                    "type": "select",
                    "enabled": false,
                    "title": "Selection Panel",
                    "showPanel": true,
                    "style": {
                        "strokeStyle": "",
                        "strokeColor": "#000000",
                        "fillColor": "#000000",
                        "markerSize": [
                            20,
                            20
                        ],
                        "markerOffset": [
                            10,
                            10
                        ]
                    }
                },
                {
                    "type": "identify",
                    "enabled": true,
                    "title": "Identify Panel",
                    "showPanel": false,
                    "style": {
                        "strokeWidth": 1,
                        "strokeStyle": "1, 1",
                        "strokeColor": "#000000",
                        "strokeOpacity": 0.8,
                        "fillColor": "#000000",
                        "fillOpacity": 0.5,
                        "markerSize": [
                            20,
                            20
                        ],
                        "markerOffset": [
                            10,
                            0
                        ]
                    },
                    "styleOpacity": 1,
                    "tolerance": 5
                },
                {
                    "type": "search",
                    "enabled": true,
                    "title": "Search Panel",
                    "showPanel": true
                },
                {
                    "type": "menu",
                    "enabled": false,
                    "title": "Menu",
                    "showPanel": true
                },
                {
                    "type": "dropdown",
                    "enabled": true,
                    "title": "Dropdown",
                    "showPanel": true
                },
                {
                    "type": "query",
                    "enabled": true,
                    "title": "Query",
                    "icon": "search",
                    "instance": "assisted-living-and-residential-care--city",
                    "position": "dropdown",
                    "showPanel": true
                },
                {
                    "type": "query",
                    "enabled": true,
                    "title": "Query",
                    "icon": "search",
                    "instance": "assisted-living-and-residential-care--business-name",
                    "position": "dropdown",
                    "showPanel": true
                }
            ]
        }
    }
    
} )