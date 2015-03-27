/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['popeye_typeregular']='<link rel=\"stylesheet\" href=\"stylesheet.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'load',
                display: 'block',
                type: 'rect',
                rect: ['-226', '-309','auto','auto','auto', 'auto']
            },
            {
                id: 'main',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'about',
                display: 'none',
                type: 'rect',
                rect: ['-10', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'music',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'media',
                display: 'none',
                type: 'rect',
                rect: ['-718', '12','auto','auto','auto', 'auto']
            },
            {
                id: 'form',
                display: 'none',
                type: 'rect',
                rect: ['-334', '-24','auto','auto','auto', 'auto']
            },
            {
                id: 'projects',
                display: 'none',
                type: 'rect',
                rect: ['221', '-230','auto','auto','auto', 'auto']
            },
            {
                id: 'timsevents',
                display: 'none',
                type: 'rect',
                rect: ['713', '-14','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'timsevents',
                symbolName: 'timsevents',
                autoPlay: {

                }
            },
            {
                id: 'projects',
                symbolName: 'projects',
                autoPlay: {

                }
            },
            {
                id: 'main',
                symbolName: 'main',
                autoPlay: {

                }
            },
            {
                id: 'media',
                symbolName: 'media',
                autoPlay: {

                }
            },
            {
                id: 'about',
                symbolName: 'about',
                autoPlay: {

                }
            },
            {
                id: 'music',
                symbolName: 'music',
                autoPlay: {

                }
            },
            {
                id: 'load',
                symbolName: 'load',
                autoPlay: {

                }
            },
            {
                id: 'form',
                symbolName: 'form',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_load}": [
                ["style", "display", 'block']
            ],
            "${_media}": [
                ["style", "display", 'none']
            ],
            "${_about}": [
                ["style", "display", 'none']
            ],
            "${_music}": [
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(9,9,9,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '800px'],
                ["style", "width", '460px']
            ],
            "${_projects}": [
                ["style", "top", '-216px'],
                ["style", "left", '-115px'],
                ["style", "display", 'none']
            ],
            "${_main}": [
                ["style", "display", 'none']
            ],
            "${_timsevents}": [
                ["style", "display", 'none'],
                ["style", "top", '-40px'],
                ["transform", "scaleY", '1.08969'],
                ["style", "left", '0px']
            ],
            "${_form}": [
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 22250,
            autoPlay: true,
            labels: {
                "home": 4000,
                "bio": 5250,
                "music": 6084,
                "social": 8500,
                "contact": 14250,
                "prospects": 15500,
                "events": 21500
            },
            timeline: [
                { id: "eid138", tween: [ "style", "${_about}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid139", tween: [ "style", "${_about}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid257", tween: [ "style", "${_about}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid63", tween: [ "style", "${_load}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid259", tween: [ "style", "${_music}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid260", tween: [ "style", "${_music}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid373", tween: [ "style", "${_music}", "display", 'none', { fromValue: 'block'}], position: 8179, duration: 0 },
                { id: "eid374", tween: [ "style", "${_media}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid375", tween: [ "style", "${_media}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid526", tween: [ "style", "${_media}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid633", tween: [ "style", "${_projects}", "top", '-216px', { fromValue: '-216px'}], position: 15000, duration: 0 },
                { id: "eid837", tween: [ "style", "${_timsevents}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid838", tween: [ "style", "${_timsevents}", "display", 'block', { fromValue: 'none'}], position: 21250, duration: 0 },
                { id: "eid834", tween: [ "transform", "${_timsevents}", "scaleY", '1.08969', { fromValue: '1.08969'}], position: 21001, duration: 0 },
                { id: "eid632", tween: [ "style", "${_projects}", "left", '-115px', { fromValue: '-115px'}], position: 15000, duration: 0 },
                { id: "eid553", tween: [ "style", "${_form}", "display", 'block', { fromValue: 'none'}], position: 14250, duration: 0 },
                { id: "eid616", tween: [ "style", "${_form}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid661", tween: [ "style", "${_projects}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid662", tween: [ "style", "${_projects}", "display", 'block', { fromValue: 'none'}], position: 15005, duration: 0 },
                { id: "eid829", tween: [ "style", "${_projects}", "display", 'none', { fromValue: 'block'}], position: 20749, duration: 0 },
                { id: "eid80", tween: [ "style", "${_main}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid81", tween: [ "style", "${_main}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid118", tween: [ "style", "${_main}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid835", tween: [ "style", "${_timsevents}", "top", '-40px', { fromValue: '-40px'}], position: 21001, duration: 0 },
                { id: "eid830", tween: [ "style", "${_timsevents}", "left", '0px', { fromValue: '0px'}], position: 21001, duration: 0 }            ]
        }
    }
},
"load": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'fashion',
                    text: 'Fashion',
                    align: 'left',
                    rect: ['0px', '676px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'nightlife',
                    text: 'NightLife<br>',
                    align: 'left',
                    rect: ['0px', '737px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'music',
                    text: 'Music',
                    align: 'left',
                    rect: ['0px', '619px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['226px', '1119px', '21px', '323px', 'auto', 'auto'],
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['251px', '1119px', '21px', '323px', 'auto', 'auto'],
                    id: 'RectangleCopy4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['277px', '1119px', '21px', '323px', 'auto', 'auto'],
                    id: 'RectangleCopy5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['226px', '-23px', '21px', '323px', 'auto', 'auto'],
                    id: 'RectangleCopy9',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['251px', '-23px', '21px', '323px', 'auto', 'auto'],
                    id: 'RectangleCopy8',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['277px', '-23px', '21px', '323px', 'auto', 'auto'],
                    id: 'RectangleCopy7',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    font: ['popeye_typeregular', 88, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text6',
                    text: 'Tim',
                    align: 'left',
                    rect: ['805px', '956px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['popeye_typeregular', 88, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text7',
                    text: 'Rhashad',
                    align: 'left',
                    rect: ['694px', '1031px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_nightlife}": [
                ["style", "top", '731px'],
                ["style", "left", '0px']
            ],
            "${_Text7}": [
                ["style", "top", '1031px'],
                ["style", "left", '694px'],
                ["style", "font-size", '88px']
            ],
            "${_RectangleCopy9}": [
                ["style", "top", '-23px'],
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "left", '226px'],
                ["style", "height", '323px']
            ],
            "${_RectangleCopy3}": [
                ["style", "height", '323px'],
                ["style", "top", '1119px'],
                ["style", "left", '226px'],
                ["color", "background-color", 'rgba(252,252,252,1.00)']
            ],
            "${_RectangleCopy4}": [
                ["style", "top", '1119px'],
                ["color", "background-color", 'rgba(252,252,252,1.00)'],
                ["style", "left", '251px'],
                ["style", "height", '323px']
            ],
            "${_Text6}": [
                ["style", "top", '956px'],
                ["style", "left", '805px'],
                ["style", "font-size", '88px']
            ],
            "${_RectangleCopy8}": [
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "height", '323px'],
                ["style", "left", '251px'],
                ["style", "top", '-23px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1442px'],
                ["style", "width", '1074px']
            ],
            "${_RectangleCopy7}": [
                ["style", "height", '323px'],
                ["style", "top", '-23px'],
                ["style", "left", '277px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_fashion}": [
                ["style", "top", '676px'],
                ["style", "font-family", 'popeye_typeregular'],
                ["style", "left", '0px'],
                ["style", "font-size", '48px']
            ],
            "${_RectangleCopy5}": [
                ["color", "background-color", 'rgba(252,252,252,1.00)'],
                ["style", "height", '323px'],
                ["style", "left", '277px'],
                ["style", "top", '1119px']
            ],
            "${_music}": [
                ["style", "top", '628px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid320", tween: [ "style", "${_RectangleCopy8}", "top", '295px', { fromValue: '-23px'}], position: 750, duration: 750 },
                { id: "eid6", tween: [ "style", "${_RectangleCopy4}", "top", '785px', { fromValue: '1119px'}], position: 750, duration: 750 },
                { id: "eid56", tween: [ "style", "${_nightlife}", "top", '731px', { fromValue: '731px'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_fashion}", "left", '229px', { fromValue: '0px'}], position: 750, duration: 750 },
                { id: "eid7", tween: [ "style", "${_nightlife}", "left", '230px', { fromValue: '0px'}], position: 1500, duration: 750 },
                { id: "eid9", tween: [ "style", "${_RectangleCopy5}", "top", '785px', { fromValue: '1119px'}], position: 1500, duration: 750 },
                { id: "eid13", tween: [ "style", "${_Text7}", "left", '302px', { fromValue: '694px'}], position: 2250, duration: 750 },
                { id: "eid321", tween: [ "style", "${_RectangleCopy7}", "top", '295px', { fromValue: '-23px'}], position: 1500, duration: 750 },
                { id: "eid319", tween: [ "style", "${_RectangleCopy9}", "top", '295px', { fromValue: '-23px'}], position: 0, duration: 750 },
                { id: "eid3", tween: [ "style", "${_music}", "left", '230px', { fromValue: '0px'}], position: 0, duration: 750 },
                { id: "eid10", tween: [ "style", "${_Text6}", "top", '964px', { fromValue: '956px'}], position: 2250, duration: 750 },
                { id: "eid1", tween: [ "style", "${_RectangleCopy3}", "top", '785px', { fromValue: '1119px'}], position: 0, duration: 750 },
                { id: "eid11", tween: [ "style", "${_Text6}", "left", '413px', { fromValue: '805px'}], position: 2250, duration: 750 },
                { id: "eid12", tween: [ "style", "${_Text7}", "top", '1039px', { fromValue: '1031px'}], position: 2250, duration: 750 }            ]
        }
    }
},
"main": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'slidesCopy',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    type: 'text',
                    display: 'none',
                    id: 'Bio',
                    text: 'Bio',
                    align: 'left',
                    rect: ['4px', '302px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], ['180']],
                    type: 'image',
                    id: 'whitearrowfw',
                    display: 'none',
                    rect: ['0px', '0px', '72px', '72px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/whitearrow.fw.png', '0px', '0px']
                },
                {
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    type: 'text',
                    display: 'none',
                    id: 'Media',
                    text: 'Media',
                    align: 'left',
                    rect: ['8px', '398px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    type: 'text',
                    display: 'none',
                    id: 'projects',
                    text: 'Projects',
                    align: 'left',
                    rect: ['7px', '446px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    type: 'text',
                    display: 'none',
                    id: 'contacts',
                    text: 'Contact',
                    align: 'left',
                    rect: ['8px', '506px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    type: 'text',
                    display: 'none',
                    id: 'Text13',
                    text: 'Home',
                    align: 'left',
                    rect: ['78px', '12px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['-5px', '-214px', '21px', '182px', 'auto', 'auto'],
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['21px', '-214px', '21px', '182px', 'auto', 'auto'],
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['47px', '-214px', '21px', '182px', 'auto', 'auto'],
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    font: ['popeye_typeregular', 48, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'music',
                    text: 'Music',
                    display: 'none',
                    rect: ['3px', '352px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['-4px', '819px', '21px', '250px', 'auto', 'auto'],
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['21px', '819px', '21px', '250px', 'auto', 'auto'],
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['46px', '819px', '21px', '250px', 'auto', 'auto'],
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    font: ['popeye_typeregular', 48, 'rgba(252,249,249,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2',
                    text: 'Events',
                    align: 'left',
                    rect: ['-243px', '399px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['popeye_typeregular', 88, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text6',
                    text: 'Tim',
                    align: 'left',
                    rect: ['485px', '663px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['popeye_typeregular', 88, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text7',
                    text: 'Rhashad',
                    align: 'left',
                    rect: ['686px', '710px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'slidesCopy',
                symbolName: 'slides',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '710px'],
                ["style", "left", '686px'],
                ["style", "font-size", '88px']
            ],
            "${_contactsCopy}": [
                ["style", "top", '454px'],
                ["style", "left", '6px'],
                ["style", "display", 'none']
            ],
            "${_contacts}": [
                ["style", "top", '502px'],
                ["style", "left", '-247px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '399px'],
                ["color", "color", 'rgba(252,249,249,1.00)'],
                ["style", "font-family", 'popeye_typeregular'],
                ["style", "left", '-243px'],
                ["style", "font-size", '48px']
            ],
            "${_RectangleCopy4}": [
                ["style", "height", '250px'],
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "left", '21px'],
                ["style", "top", '819px']
            ],
            "${_RectangleCopy}": [
                ["style", "top", '-252px'],
                ["style", "height", '250px'],
                ["style", "left", '26px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_RectangleCopy2}": [
                ["style", "top", '-252px'],
                ["style", "height", '250px'],
                ["style", "left", '51px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_projects}": [
                ["style", "top", '448px'],
                ["style", "left", '-244px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "top", '-252px'],
                ["style", "left", '0px'],
                ["style", "height", '250px']
            ],
            "${_Bio}": [
                ["style", "top", '264px'],
                ["style", "display", 'none'],
                ["style", "left", '-246px'],
                ["style", "font-size", '48px']
            ],
            "${_RectangleCopy3}": [
                ["style", "top", '819px'],
                ["style", "height", '250px'],
                ["style", "left", '-4px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_Text13}": [
                ["style", "top", '-300px'],
                ["style", "left", '73px'],
                ["style", "display", 'none']
            ],
            "${_Text6}": [
                ["style", "top", '663px'],
                ["style", "left", '485px'],
                ["style", "font-size", '88px']
            ],
            "${_whitearrowfw}": [
                ["style", "top", '-312px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '72px'],
                ["style", "display", 'none'],
                ["style", "left", '-5px'],
                ["style", "width", '72px']
            ],
            "${symbolSelector}": [
                ["style", "height", '554px'],
                ["style", "width", '298px']
            ],
            "${_RectangleCopy5}": [
                ["style", "height", '250px'],
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "left", '46px'],
                ["style", "top", '819px']
            ],
            "${_Media}": [
                ["style", "top", '360px'],
                ["style", "left", '-243px'],
                ["style", "display", 'none']
            ],
            "${_music}": [
                ["style", "top", '312px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'popeye_typeregular'],
                ["style", "left", '-247px'],
                ["style", "font-size", '48px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13055,
            autoPlay: true,
            labels: {
                "menu": 4000
            },
            timeline: [
                { id: "eid82", tween: [ "style", "${_music}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid83", tween: [ "style", "${_music}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid103", tween: [ "style", "${_RectangleCopy4}", "top", '548px', { fromValue: '819px'}], position: 4250, duration: 250 },
                { id: "eid86", tween: [ "style", "${_Text13}", "left", '73px', { fromValue: '73px'}], position: 4000, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Bio}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Bio}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid615", tween: [ "style", "${_RectangleCopy}", "left", '21px', { fromValue: '26px'}], position: 4000, duration: 250 },
                { id: "eid104", tween: [ "style", "${_RectangleCopy}", "left", '26px', { fromValue: '21px'}], position: 4250, duration: 250 },
                { id: "eid110", tween: [ "style", "${_Bio}", "left", '3px', { fromValue: '-246px'}], position: 4000, duration: 250 },
                { id: "eid49", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Text13}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid99", tween: [ "style", "${_RectangleCopy3}", "top", '548px', { fromValue: '819px'}], position: 4000, duration: 250 },
                { id: "eid106", tween: [ "style", "${_RectangleCopy5}", "left", '52px', { fromValue: '46px'}], position: 4500, duration: 250 },
                { id: "eid589", tween: [ "style", "${_Rectangle}", "left", '0px', { fromValue: '0px'}], position: 4000, duration: 0 },
                { id: "eid590", tween: [ "style", "${_Rectangle}", "left", '0px', { fromValue: '0px'}], position: 4250, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Media}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Media}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid323", tween: [ "style", "${_RectangleCopy2}", "top", '-214px', { fromValue: '-252px'}], position: 4000, duration: 500 },
                { id: "eid109", tween: [ "style", "${_RectangleCopy2}", "top", '0px', { fromValue: '-214px'}], position: 4500, duration: 250 },
                { id: "eid87", tween: [ "style", "${_Text13}", "top", '-300px', { fromValue: '-300px'}], position: 4000, duration: 0 },
                { id: "eid821", tween: [ "style", "${_projects}", "top", '448px', { fromValue: '448px'}], position: 4000, duration: 0 },
                { id: "eid825", tween: [ "style", "${_projects}", "top", '453px', { fromValue: '448px'}], position: 4500, duration: 250 },
                { id: "eid98", tween: [ "style", "${_RectangleCopy3}", "left", '0px', { fromValue: '-4px'}], position: 4000, duration: 250 },
                { id: "eid803", tween: [ "style", "${_Text7}", "left", '80px', { fromValue: '686px'}], position: 4500, duration: 250 },
                { id: "eid117", tween: [ "style", "${_RectangleCopy2}", "height", '250px', { fromValue: '250px'}], position: 4750, duration: 0 },
                { id: "eid95", tween: [ "style", "${_music}", "top", '312px', { fromValue: '312px'}], position: 4000, duration: 0 },
                { id: "eid827", tween: [ "style", "${_music}", "top", '309px', { fromValue: '312px'}], position: 4500, duration: 250 },
                { id: "eid116", tween: [ "style", "${_RectangleCopy}", "height", '250px', { fromValue: '250px'}], position: 4750, duration: 0 },
                { id: "eid111", tween: [ "style", "${_contacts}", "left", '6px', { fromValue: '-247px'}], position: 4000, duration: 250 },
                { id: "eid54", tween: [ "style", "${_contacts}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_contacts}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid84", tween: [ "style", "${_whitearrowfw}", "left", '-5px', { fromValue: '-5px'}], position: 4000, duration: 0 },
                { id: "eid94", tween: [ "style", "${_music}", "left", '-247px', { fromValue: '-247px'}], position: 4000, duration: 0 },
                { id: "eid112", tween: [ "style", "${_music}", "left", '3px', { fromValue: '-247px'}], position: 4250, duration: 250 },
                { id: "eid85", tween: [ "style", "${_whitearrowfw}", "top", '-312px', { fromValue: '-312px'}], position: 4000, duration: 0 },
                { id: "eid101", tween: [ "style", "${_Rectangle}", "top", '0px', { fromValue: '-252px'}], position: 4000, duration: 250 },
                { id: "eid823", tween: [ "style", "${_Text2}", "left", '5px', { fromValue: '-243px'}], position: 4500, duration: 250 },
                { id: "eid817", tween: [ "style", "${_contacts}", "top", '502px', { fromValue: '502px'}], position: 4000, duration: 0 },
                { id: "eid824", tween: [ "style", "${_Text2}", "top", '403px', { fromValue: '399px'}], position: 4500, duration: 250 },
                { id: "eid800", tween: [ "style", "${_Text6}", "left", '208px', { fromValue: '485px'}], position: 4250, duration: 250 },
                { id: "eid51", tween: [ "style", "${_projects}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_projects}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid591", tween: [ "style", "${_RectangleCopy2}", "left", '52px', { fromValue: '51px'}], position: 2835, duration: 1165 },
                { id: "eid588", tween: [ "style", "${_RectangleCopy2}", "left", '47px', { fromValue: '52px'}], position: 4000, duration: 500 },
                { id: "eid108", tween: [ "style", "${_RectangleCopy2}", "left", '52px', { fromValue: '47px'}], position: 4500, duration: 250 },
                { id: "eid50", tween: [ "style", "${_whitearrowfw}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "style", "${_whitearrowfw}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid115", tween: [ "style", "${_Rectangle}", "height", '250px', { fromValue: '250px'}], position: 4750, duration: 0 },
                { id: "eid89", tween: [ "style", "${_Bio}", "top", '264px', { fromValue: '264px'}], position: 4000, duration: 0 },
                { id: "eid826", tween: [ "style", "${_Bio}", "top", '259px', { fromValue: '264px'}], position: 4500, duration: 250 },
                { id: "eid822", tween: [ "style", "${_projects}", "left", '-243px', { fromValue: '-244px'}], position: 4000, duration: 250 },
                { id: "eid113", tween: [ "style", "${_projects}", "left", '7px', { fromValue: '-243px'}], position: 4250, duration: 250 },
                { id: "eid91", tween: [ "style", "${_Media}", "top", '360px', { fromValue: '360px'}], position: 4000, duration: 0 },
                { id: "eid828", tween: [ "style", "${_Media}", "top", '357px', { fromValue: '360px'}], position: 4500, duration: 250 },
                { id: "eid90", tween: [ "style", "${_Media}", "left", '-243px', { fromValue: '-243px'}], position: 4000, duration: 0 },
                { id: "eid114", tween: [ "style", "${_Media}", "left", '5px', { fromValue: '-243px'}], position: 4500, duration: 250 },
                { id: "eid322", tween: [ "style", "${_RectangleCopy}", "top", '-214px', { fromValue: '-252px'}], position: 4000, duration: 250 },
                { id: "eid105", tween: [ "style", "${_RectangleCopy}", "top", '0px', { fromValue: '-214px'}], position: 4250, duration: 250 },
                { id: "eid102", tween: [ "style", "${_RectangleCopy4}", "left", '26px', { fromValue: '21px'}], position: 4250, duration: 250 },
                { id: "eid107", tween: [ "style", "${_RectangleCopy5}", "top", '548px', { fromValue: '819px'}], position: 4500, duration: 250 },
                { id: "eid804", tween: [ "style", "${_Text7}", "top", '723px', { fromValue: '710px'}], position: 4500, duration: 250 },
                { id: "eid586", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_slidesCopy}', [] ], ""], position: 4000 }            ]
        }
    }
},
"about": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['180']],
                    rect: ['10px', '0px', '72px', '72px', 'auto', 'auto'],
                    display: 'none',
                    id: 'whitearrowfw',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/whitearrow.fw.png', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['88px', '12px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    id: 'Text13',
                    text: 'Bio',
                    align: 'left',
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy6',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['15px', '0px', '21px', '182px', 'auto', 'auto'],
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy9',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['10px', '548px', '21px', '182px', 'auto', 'auto'],
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy10',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['38px', '549px', '21px', '182px', 'auto', 'auto'],
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy11',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['66px', '549px', '21px', '182px', 'auto', 'auto'],
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy7',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['72px', '0px', '21px', '182px', 'auto', 'auto'],
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy8',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['43px', '0px', '21px', '182px', 'auto', 'auto'],
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    type: 'text',
                    rect: ['29px', '348px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text2',
                    text: 'B',
                    align: 'left',
                    font: ['popeye_typeregular', 68, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['42px', '416px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text3',
                    text: 'I',
                    align: 'left',
                    font: ['popeye_typeregular', 68, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['31px', '488px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4',
                    text: 'O',
                    align: 'left',
                    font: ['popeye_typeregular', 68, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['101px', '295px', '351px', '498px', 'auto', 'auto'],
                    display: 'none',
                    id: 'Text5',
                    text: 'When it comes to music, celebrities, <br>and entertainment lifestyle Tim Rahshad is the go to man.<br>Whether he is writing for his personal website Timrahshad.com or<br> spinning decks at Ms. Tootsies RBL<br> or penning an album review for <br>Divercity Magazine he is always in the know<br> when it comes to what\'s hot and<br> what\'s not in the entertainment world.',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 27, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    id: 'bioslide',
                    type: 'rect',
                    rect: ['98', '78', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'bioslide',
                symbolName: 'bioslide'
            }            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy9}": [
                ["style", "top", '811px'],
                ["style", "height", '250px'],
                ["style", "left", '5px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_Text3}": [
                ["style", "top", '421px'],
                ["style", "height", '72px'],
                ["style", "left", '-55px'],
                ["style", "text-decoration", 'none'],
                ["style", "font-size", '68px']
            ],
            "${_RectangleCopy7}": [
                ["style", "top", '-269px'],
                ["style", "height", '250px'],
                ["style", "left", '72px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_Text5}": [
                ["style", "opacity", '0'],
                ["style", "left", '101px'],
                ["style", "width", '351px'],
                ["style", "top", '309px'],
                ["style", "font-size", '25px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "text-decoration", 'none'],
                ["style", "height", '498px']
            ],
            "${_Text13}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "text-decoration", 'none'],
                ["style", "left", '491px']
            ],
            "${_RectangleCopy11}": [
                ["style", "height", '250px'],
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "left", '61px'],
                ["style", "top", '812px']
            ],
            "${_RectangleCopy8}": [
                ["style", "top", '-269px'],
                ["style", "height", '250px'],
                ["style", "left", '43px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_Text2}": [
                ["style", "top", '353px'],
                ["style", "height", '72px'],
                ["style", "left", '-68px'],
                ["style", "text-decoration", 'none'],
                ["style", "font-size", '68px']
            ],
            "${symbolSelector}": [
                ["style", "height", '799px'],
                ["style", "width", '452px']
            ],
            "${_whitearrowfw}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '72px'],
                ["style", "display", 'none'],
                ["style", "left", '-105px'],
                ["style", "width", '72px']
            ],
            "${_RectangleCopy6}": [
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "top", '-269px'],
                ["style", "left", '15px'],
                ["style", "height", '250px']
            ],
            "${_RectangleCopy10}": [
                ["style", "height", '250px'],
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "left", '33px'],
                ["style", "top", '812px']
            ],
            "${_Text4}": [
                ["style", "top", '493px'],
                ["style", "height", '72px'],
                ["style", "left", '-66px'],
                ["style", "text-decoration", 'none'],
                ["style", "font-size", '68px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5750,
            autoPlay: true,
            labels: {
                "me": 5250
            },
            timeline: [
                { id: "eid186", tween: [ "style", "${_RectangleCopy11}", "left", '61px', { fromValue: '61px'}], position: 5250, duration: 0 },
                { id: "eid202", tween: [ "style", "${_Text2}", "height", '72px', { fromValue: '72px'}], position: 5250, duration: 0 },
                { id: "eid190", tween: [ "style", "${_RectangleCopy9}", "left", '5px', { fromValue: '5px'}], position: 5250, duration: 0 },
                { id: "eid581", tween: [ "style", "${_Text5}", "left", '101px', { fromValue: '101px'}], position: 5750, duration: 0 },
                { id: "eid236", tween: [ "style", "${_RectangleCopy6}", "top", '76px', { fromValue: '-269px'}], position: 5250, duration: 500 },
                { id: "eid203", tween: [ "style", "${_Text3}", "height", '72px', { fromValue: '72px'}], position: 5250, duration: 0 },
                { id: "eid254", tween: [ "style", "${_Text2}", "top", '341px', { fromValue: '353px'}], position: 5250, duration: 500 },
                { id: "eid579", tween: [ "style", "${_Text5}", "font-size", '25px', { fromValue: '25px'}], position: 5750, duration: 0 },
                { id: "eid230", tween: [ "style", "${_Text13}", "left", '93px', { fromValue: '491px'}], position: 5250, duration: 500 },
                { id: "eid239", tween: [ "style", "${_RectangleCopy11}", "top", '545px', { fromValue: '812px'}], position: 5250, duration: 500 },
                { id: "eid238", tween: [ "style", "${_RectangleCopy9}", "top", '544px', { fromValue: '811px'}], position: 5250, duration: 500 },
                { id: "eid237", tween: [ "style", "${_RectangleCopy10}", "top", '545px', { fromValue: '812px'}], position: 5250, duration: 500 },
                { id: "eid580", tween: [ "style", "${_Text5}", "top", '309px', { fromValue: '309px'}], position: 5750, duration: 0 },
                { id: "eid191", tween: [ "style", "${_RectangleCopy6}", "left", '15px', { fromValue: '15px'}], position: 5250, duration: 0 },
                { id: "eid255", tween: [ "style", "${_whitearrowfw}", "top", '0px', { fromValue: '0px'}], position: 5250, duration: 0 },
                { id: "eid256", tween: [ "style", "${_whitearrowfw}", "top", '0px', { fromValue: '0px'}], position: 5750, duration: 0 },
                { id: "eid233", tween: [ "style", "${_whitearrowfw}", "left", '7px', { fromValue: '-105px'}], position: 5250, duration: 500 },
                { id: "eid253", tween: [ "style", "${_Text2}", "left", '23px', { fromValue: '-68px'}], position: 5250, duration: 500 },
                { id: "eid234", tween: [ "style", "${_RectangleCopy8}", "top", '76px', { fromValue: '-269px'}], position: 5250, duration: 500 },
                { id: "eid231", tween: [ "style", "${_Text13}", "top", '12px', { fromValue: '0px'}], position: 5250, duration: 500 },
                { id: "eid213", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid201", tween: [ "style", "${_Text4}", "height", '72px', { fromValue: '72px'}], position: 5250, duration: 0 },
                { id: "eid195", tween: [ "style", "${_RectangleCopy8}", "left", '43px', { fromValue: '43px'}], position: 5250, duration: 0 },
                { id: "eid120", tween: [ "style", "${_whitearrowfw}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid250", tween: [ "style", "${_Text4}", "top", '481px', { fromValue: '493px'}], position: 5250, duration: 500 },
                { id: "eid197", tween: [ "style", "${_RectangleCopy7}", "left", '72px', { fromValue: '72px'}], position: 5250, duration: 0 },
                { id: "eid235", tween: [ "style", "${_RectangleCopy7}", "top", '76px', { fromValue: '-269px'}], position: 5250, duration: 500 },
                { id: "eid249", tween: [ "style", "${_Text4}", "left", '25px', { fromValue: '-66px'}], position: 5250, duration: 500 },
                { id: "eid119", tween: [ "style", "${_Text13}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid252", tween: [ "style", "${_Text3}", "top", '409px', { fromValue: '421px'}], position: 5250, duration: 500 },
                { id: "eid215", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 5250, duration: 500 },
                { id: "eid182", tween: [ "style", "${_RectangleCopy10}", "left", '33px', { fromValue: '33px'}], position: 5250, duration: 0 },
                { id: "eid251", tween: [ "style", "${_Text3}", "left", '36px', { fromValue: '-55px'}], position: 5250, duration: 500 }            ]
        }
    }
},
"music": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['10px', '0px', '72px', '72px', 'auto', 'auto'],
                    transform: [[], ['180']],
                    id: 'whitearrowfw',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/whitearrow.fw.png', '0px', '0px']
                },
                {
                    rect: ['4px', '-264px', '21px', '182px', 'auto', 'auto'],
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['0px', '814px', '21px', '199px', 'auto', 'auto'],
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['26px', '815px', '21px', '199px', 'auto', 'auto'],
                    id: 'RectangleCopy4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['52px', '814px', '21px', '199px', 'auto', 'auto'],
                    id: 'RectangleCopy5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['54px', '-264px', '21px', '182px', 'auto', 'auto'],
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    id: 'whiterecordfw',
                    type: 'image',
                    rect: ['118px', '253px', '79px', '82px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/whiterecord.fw.png', '0px', '0px']
                },
                {
                    id: 'whitemixtapefw',
                    type: 'image',
                    rect: ['262px', '441px', '149px', '46px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/whitemixtape.fw.png', '0px', '0px']
                },
                {
                    rect: ['268px', '275px', '138px', '37px', 'auto', 'auto'],
                    id: 'review1',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/review1.png', '0px', '0px']
                },
                {
                    id: 'whotfw',
                    type: 'image',
                    rect: ['240px', '606px', '209px', '34px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/whot.fw.png', '0px', '0px']
                },
                {
                    id: 'whiteflamesfw',
                    type: 'image',
                    rect: ['118px', '584px', '92px', '84px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/whiteflames.fw.png', '0px', '0px']
                },
                {
                    id: 'whitecassettefw',
                    type: 'image',
                    rect: ['101px', '422px', '127px', '84px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/whitecassette.fw.png', '0px', '0px']
                },
                {
                    rect: ['29px', '-264px', '21px', '182px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['-51px', '352px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    id: 'Text',
                    text: 'M',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['-50px', '400px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: 'U',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['-49px', '452px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    id: 'Text3',
                    text: 'S',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['-41px', '502px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    id: 'Text4',
                    text: 'I',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['-49px', '553px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    id: 'Text5',
                    text: 'C',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['473px', '12px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    id: 'Text6',
                    text: 'Music',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['519px', '79px', '360px', '718px', 'auto', 'auto'],
                    id: 'viewR',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1)']
                },
                {
                    rect: ['517px', '72px', '360px', '718px', 'auto', 'auto'],
                    id: 'viewH',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1)']
                },
                {
                    rect: ['519px', '79px', '360px', '718px', 'auto', 'auto'],
                    id: 'viewM',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1)']
                },
                {
                    rect: ['-224px', '272px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    id: 'Text9',
                    text: 'M<br><br>X<br>T<br>A<br>P<br>E<br>S',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['-22', '306', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    id: 'Text11',
                    text: 'I',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['475px', '12', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text7',
                    text: 'Reviews',
                    font: ['popeye_typeregular', 48, 'rgba(253,253,253,1.00)', 'normal', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['-60px', '330px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(253,253,253,1)', '400', 'none', 'normal'],
                    id: 'Text8',
                    text: 'R<br>E<br>V<br>I<br>E<br>W<br>S',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['10px', '0px', '72px', '72px', 'auto', 'auto'],
                    transform: [[], ['180']],
                    id: 'back',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/whitearrow.fw.png', '0px', '0px']
                },
                {
                    rect: ['508px', '12px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    id: 'Text10',
                    text: 'MIXTAPES',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['512', '30', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    id: 'Text12',
                    text: 'Hot Releases',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['-190px', '149px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    id: 'Text13',
                    text: 'H<br>O<br>T<br><br>R<br>E<br>L<br>E<br>A<br>S<br>E<br>S',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_viewH}": [
                ["style", "height", '730px'],
                ["style", "top", '72px'],
                ["style", "left", '517px'],
                ["style", "width", '368px']
            ],
            "${_Text7}": [
                ["color", "color", 'rgba(253,253,253,1.00)'],
                ["style", "font-family", 'popeye_typeregular'],
                ["style", "left", '475px'],
                ["style", "font-size", '48px']
            ],
            "${_Text11}": [
                ["style", "left", '-22px'],
                ["style", "top", '306px']
            ],
            "${_Text3}": [
                ["style", "top", '452px'],
                ["style", "left", '-49px'],
                ["style", "text-decoration", 'none']
            ],
            "${_whitearrowfw}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '72px'],
                ["style", "display", 'none'],
                ["style", "left", '-88px'],
                ["style", "width", '72px']
            ],
            "${_Text2}": [
                ["style", "top", '400px'],
                ["style", "left", '-50px'],
                ["style", "text-decoration", 'none']
            ],
            "${_whitemixtapefw}": [
                ["style", "left", '262px'],
                ["style", "top", '441px']
            ],
            "${_whiteflamesfw}": [
                ["style", "top", '584px'],
                ["style", "height", '84px'],
                ["style", "left", '118px'],
                ["style", "width", '92px']
            ],
            "${_RectangleCopy5}": [
                ["style", "top", '814px'],
                ["style", "height", '199px'],
                ["style", "left", '52px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "top", '-264px'],
                ["style", "left", '54px'],
                ["style", "height", '250px']
            ],
            "${_RectangleCopy2}": [
                ["style", "height", '250px'],
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "left", '4px'],
                ["style", "top", '-264px']
            ],
            "${_Text8}": [
                ["style", "left", '-60px'],
                ["style", "top", '330px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "top", '-264px'],
                ["style", "left", '29px'],
                ["style", "height", '250px']
            ],
            "${_back}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '72px'],
                ["style", "display", 'none'],
                ["style", "left", '569px'],
                ["style", "width", '72px']
            ],
            "${_Text4}": [
                ["style", "top", '502px'],
                ["style", "left", '-41px'],
                ["style", "text-decoration", 'none']
            ],
            "${_Text5}": [
                ["style", "top", '553px'],
                ["style", "left", '-49px'],
                ["style", "text-decoration", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '801px'],
                ["style", "width", '79px']
            ],
            "${_viewR}": [
                ["style", "top", '79px'],
                ["style", "height", '730px'],
                ["style", "left", '519px'],
                ["style", "width", '368px']
            ],
            "${_review1}": [
                ["style", "top", '275px'],
                ["style", "height", '37px'],
                ["style", "display", 'block'],
                ["style", "left", '268px'],
                ["style", "width", '138px']
            ],
            "${_Text13}": [
                ["style", "left", '-190px'],
                ["style", "top", '149px']
            ],
            "${_RectangleCopy3}": [
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "top", '814px'],
                ["style", "left", '0px'],
                ["style", "height", '199px']
            ],
            "${_viewM}": [
                ["style", "height", '730px'],
                ["style", "top", '79px'],
                ["style", "left", '519px'],
                ["style", "width", '368px']
            ],
            "${_Text10}": [
                ["style", "left", '508px'],
                ["style", "top", '12px']
            ],
            "${_Text6}": [
                ["style", "top", '12px'],
                ["style", "left", '473px'],
                ["style", "text-decoration", 'none']
            ],
            "${_whiterecordfw}": [
                ["style", "top", '253px'],
                ["style", "height", '82px'],
                ["style", "left", '118px'],
                ["style", "width", '79px']
            ],
            "${_Text}": [
                ["style", "top", '352px'],
                ["style", "left", '-51px'],
                ["style", "text-decoration", 'none']
            ],
            "${_Text12}": [
                ["style", "left", '512px'],
                ["style", "top", '30px']
            ],
            "${_RectangleCopy4}": [
                ["style", "top", '815px'],
                ["style", "height", '199px'],
                ["style", "left", '26px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_Text9}": [
                ["style", "left", '-224px'],
                ["style", "top", '272px']
            ],
            "${_whitecassettefw}": [
                ["style", "top", '422px'],
                ["style", "height", '84px'],
                ["style", "left", '101px'],
                ["style", "width", '127px']
            ],
            "${_whotfw}": [
                ["style", "left", '240px'],
                ["style", "top", '606px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8101,
            autoPlay: true,
            labels: {
                "music": 6250,
                "reviews": 7000,
                "mixtape": 7500,
                "release": 7915
            },
            timeline: [
                { id: "eid765", tween: [ "transform", "${_back}", "rotateZ", '179deg', { fromValue: '180deg'}], position: 7250, duration: 11 },
                { id: "eid268", tween: [ "style", "${_RectangleCopy4}", "top", '599px', { fromValue: '815px'}], position: 6250, duration: 500 },
                { id: "eid305", tween: [ "style", "${_RectangleCopy4}", "top", '661px', { fromValue: '599px'}], position: 7000, duration: 250 },
                { id: "eid362", tween: [ "style", "${_RectangleCopy4}", "top", '714px', { fromValue: '661px'}], position: 7915, duration: 186 },
                { id: "eid371", tween: [ "style", "${_Text13}", "left", '22px', { fromValue: '-190px'}], position: 7915, duration: 186 },
                { id: "eid267", tween: [ "style", "${_RectangleCopy3}", "top", '598px', { fromValue: '814px'}], position: 6250, duration: 500 },
                { id: "eid307", tween: [ "style", "${_RectangleCopy3}", "top", '660px', { fromValue: '598px'}], position: 7000, duration: 250 },
                { id: "eid364", tween: [ "style", "${_RectangleCopy3}", "top", '713px', { fromValue: '660px'}], position: 7915, duration: 186 },
                { id: "eid264", tween: [ "style", "${_RectangleCopy2}", "top", '79px', { fromValue: '-264px'}], position: 6250, duration: 500 },
                { id: "eid372", tween: [ "style", "${_Text13}", "top", '141px', { fromValue: '149px'}], position: 7915, duration: 186 },
                { id: "eid853", tween: [ "style", "${_review1}", "display", 'none', { fromValue: 'block'}], position: 9, duration: 0 },
                { id: "eid854", tween: [ "style", "${_review1}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid345", tween: [ "style", "${_Text11}", "top", '316px', { fromValue: '306px'}], position: 7500, duration: 193 },
                { id: "eid370", tween: [ "style", "${_Text11}", "top", '326px', { fromValue: '316px'}], position: 7915, duration: 186 },
                { id: "eid342", tween: [ "style", "${_Text8}", "top", '332px', { fromValue: '330px'}], position: 7500, duration: 193 },
                { id: "eid334", tween: [ "style", "${_viewM}", "left", '89px', { fromValue: '519px'}], position: 7500, duration: 193 },
                { id: "eid351", tween: [ "style", "${_viewM}", "left", '469px', { fromValue: '89px'}], position: 7915, duration: 186 },
                { id: "eid263", tween: [ "style", "${_Text6}", "left", '98px', { fromValue: '473px'}], position: 6250, duration: 500 },
                { id: "eid290", tween: [ "style", "${_Text6}", "left", '-166px', { fromValue: '98px'}], position: 7000, duration: 250 },
                { id: "eid284", tween: [ "style", "${_Text4}", "left", '29px', { fromValue: '-41px'}], position: 6250, duration: 500 },
                { id: "eid312", tween: [ "style", "${_Text4}", "left", '-135px', { fromValue: '29px'}], position: 7000, duration: 250 },
                { id: "eid278", tween: [ "style", "${_Text}", "left", '19px', { fromValue: '-51px'}], position: 6250, duration: 500 },
                { id: "eid314", tween: [ "style", "${_Text}", "left", '-145px', { fromValue: '19px'}], position: 7000, duration: 250 },
                { id: "eid281", tween: [ "style", "${_Text3}", "top", '450px', { fromValue: '452px'}], position: 6250, duration: 500 },
                { id: "eid338", tween: [ "style", "${_RectangleCopy2}", "height", '174px', { fromValue: '250px'}], position: 7500, duration: 193 },
                { id: "eid358", tween: [ "style", "${_RectangleCopy2}", "height", '62px', { fromValue: '174px'}], position: 7915, duration: 186 },
                { id: "eid304", tween: [ "style", "${_RectangleCopy4}", "height", '137px', { fromValue: '199px'}], position: 7000, duration: 250 },
                { id: "eid361", tween: [ "style", "${_RectangleCopy4}", "height", '84px', { fromValue: '137px'}], position: 7915, duration: 186 },
                { id: "eid289", tween: [ "style", "${_viewR}", "top", '72px', { fromValue: '79px'}], position: 7000, duration: 250 },
                { id: "eid333", tween: [ "style", "${_viewR}", "top", '76px', { fromValue: '72px'}], position: 7500, duration: 193 },
                { id: "eid336", tween: [ "style", "${_Text10}", "left", '4px', { fromValue: '508px'}], position: 7500, duration: 193 },
                { id: "eid357", tween: [ "style", "${_Text10}", "left", '469px', { fromValue: '4px'}], position: 7915, duration: 186 },
                { id: "eid340", tween: [ "style", "${_RectangleCopy}", "height", '174px', { fromValue: '250px'}], position: 7500, duration: 193 },
                { id: "eid360", tween: [ "style", "${_RectangleCopy}", "height", '62px', { fromValue: '174px'}], position: 7915, duration: 186 },
                { id: "eid329", tween: [ "style", "${_viewR}", "height", '730px', { fromValue: '730px'}], position: 7000, duration: 0 },
                { id: "eid282", tween: [ "style", "${_Text5}", "left", '21px', { fromValue: '-49px'}], position: 6250, duration: 500 },
                { id: "eid313", tween: [ "style", "${_Text5}", "left", '-143px', { fromValue: '21px'}], position: 7000, duration: 250 },
                { id: "eid356", tween: [ "style", "${_Text12}", "top", '6px', { fromValue: '30px'}], position: 7915, duration: 186 },
                { id: "eid295", tween: [ "style", "${_back}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid287", tween: [ "style", "${_Text2}", "top", '398px', { fromValue: '400px'}], position: 6250, duration: 500 },
                { id: "eid315", tween: [ "style", "${_Text8}", "left", '21px', { fromValue: '-60px'}], position: 7000, duration: 250 },
                { id: "eid341", tween: [ "style", "${_Text8}", "left", '-63px', { fromValue: '21px'}], position: 7500, duration: 193 },
                { id: "eid288", tween: [ "style", "${_viewR}", "left", '89px', { fromValue: '519px'}], position: 7000, duration: 250 },
                { id: "eid332", tween: [ "style", "${_viewR}", "left", '901px', { fromValue: '89px'}], position: 7500, duration: 193 },
                { id: "eid308", tween: [ "style", "${_RectangleCopy5}", "height", '137px', { fromValue: '199px'}], position: 7000, duration: 250 },
                { id: "eid365", tween: [ "style", "${_RectangleCopy5}", "height", '84px', { fromValue: '137px'}], position: 7915, duration: 186 },
                { id: "eid344", tween: [ "style", "${_Text11}", "left", '29px', { fromValue: '-22px'}], position: 7500, duration: 193 },
                { id: "eid369", tween: [ "style", "${_Text11}", "left", '-239px', { fromValue: '29px'}], position: 7915, duration: 186 },
                { id: "eid306", tween: [ "style", "${_RectangleCopy3}", "height", '137px', { fromValue: '199px'}], position: 7000, duration: 250 },
                { id: "eid363", tween: [ "style", "${_RectangleCopy3}", "height", '84px', { fromValue: '137px'}], position: 7915, duration: 186 },
                { id: "eid343", tween: [ "style", "${_Text9}", "left", '19px', { fromValue: '-224px'}], position: 7500, duration: 193 },
                { id: "eid367", tween: [ "style", "${_Text9}", "left", '-249px', { fromValue: '19px'}], position: 7915, duration: 186 },
                { id: "eid352", tween: [ "style", "${_viewH}", "left", '89px', { fromValue: '517px'}], position: 7915, duration: 186 },
                { id: "eid300", tween: [ "style", "${_whitearrowfw}", "top", '-6px', { fromValue: '0px'}], position: 7000, duration: 250 },
                { id: "eid265", tween: [ "style", "${_Rectangle}", "top", '79px', { fromValue: '-264px'}], position: 6250, duration: 500 },
                { id: "eid286", tween: [ "style", "${_Text2}", "left", '20px', { fromValue: '-50px'}], position: 6250, duration: 500 },
                { id: "eid310", tween: [ "style", "${_Text2}", "left", '-144px', { fromValue: '20px'}], position: 7000, duration: 250 },
                { id: "eid283", tween: [ "style", "${_Text5}", "top", '551px', { fromValue: '553px'}], position: 6250, duration: 500 },
                { id: "eid331", tween: [ "style", "${_viewR}", "width", '368px', { fromValue: '368px'}], position: 7000, duration: 0 },
                { id: "eid279", tween: [ "style", "${_Text}", "top", '350px', { fromValue: '352px'}], position: 6250, duration: 500 },
                { id: "eid337", tween: [ "style", "${_viewM}", "top", '72px', { fromValue: '79px'}], position: 7500, duration: 193 },
                { id: "eid280", tween: [ "style", "${_Text3}", "left", '21px', { fromValue: '-49px'}], position: 6250, duration: 500 },
                { id: "eid311", tween: [ "style", "${_Text3}", "left", '-143px', { fromValue: '21px'}], position: 7000, duration: 250 },
                { id: "eid258", tween: [ "style", "${_whitearrowfw}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid339", tween: [ "style", "${_Rectangle}", "height", '174px', { fromValue: '250px'}], position: 7500, duration: 193 },
                { id: "eid359", tween: [ "style", "${_Rectangle}", "height", '62px', { fromValue: '174px'}], position: 7915, duration: 186 },
                { id: "eid355", tween: [ "style", "${_Text12}", "left", '4px', { fromValue: '512px'}], position: 7915, duration: 186 },
                { id: "eid262", tween: [ "style", "${_whitearrowfw}", "left", '1px', { fromValue: '-88px'}], position: 6250, duration: 500 },
                { id: "eid299", tween: [ "style", "${_whitearrowfw}", "left", '-249px', { fromValue: '1px'}], position: 7000, duration: 250 },
                { id: "eid285", tween: [ "style", "${_Text4}", "top", '500px', { fromValue: '502px'}], position: 6250, duration: 500 },
                { id: "eid368", tween: [ "style", "${_Text9}", "top", '282px', { fromValue: '272px'}], position: 7915, duration: 186 },
                { id: "eid266", tween: [ "style", "${_RectangleCopy}", "top", '79px', { fromValue: '-264px'}], position: 6250, duration: 500 },
                { id: "eid303", tween: [ "style", "${_back}", "left", '385px', { fromValue: '569px'}], position: 7000, duration: 250 },
                { id: "eid269", tween: [ "style", "${_RectangleCopy5}", "top", '598px', { fromValue: '814px'}], position: 6250, duration: 500 },
                { id: "eid309", tween: [ "style", "${_RectangleCopy5}", "top", '660px', { fromValue: '598px'}], position: 7000, duration: 250 },
                { id: "eid366", tween: [ "style", "${_RectangleCopy5}", "top", '713px', { fromValue: '660px'}], position: 7915, duration: 186 },
                { id: "eid291", tween: [ "style", "${_Text7}", "left", '5px', { fromValue: '475px'}], position: 7000, duration: 250 },
                { id: "eid335", tween: [ "style", "${_Text7}", "left", '901px', { fromValue: '5px'}], position: 7500, duration: 193 }            ]
        }
    }
},
"media": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    rect: ['1296px', '18px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text15',
                    text: 'Media',
                    align: 'left',
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['594px', '316px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text14',
                    text: 'M<br>E<br>D<br>I<br>A',
                    align: 'left',
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    rect: ['1254px', '357px', '72px', '72px', 'auto', 'auto'],
                    id: 'winstagramfw',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/winstagram.fw.png', '0px', '0px']
                },
                {
                    rect: ['1235px', '207px', '103px', '103px', 'auto', 'auto'],
                    id: 'wtwitLinkfw',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/wtwitLink.fw.png', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['1384px', '235px', 'auto', 'auto', 'auto', 'auto'],
                    align: 'left',
                    id: 'twitter',
                    text: 'Twitter',
                    display: 'block',
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    rect: ['1240px', '560px', '101px', '101px', 'auto', 'auto'],
                    id: 'wybLinkfw',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/wybLink..fw.png', '0px', '0px']
                },
                {
                    rect: ['1254px', '490px', '103px', '103px', 'auto', 'auto'],
                    id: 'wfbfw',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/wfb.fw.png', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['1375px', '518px', 'auto', 'auto', 'auto', 'auto'],
                    align: 'left',
                    id: 'facebook',
                    text: 'Facebook',
                    display: 'block',
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['1740px', '-26px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text3Copy',
                    text: 'Facebook',
                    align: 'left',
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    rect: ['713px', '-282px', '21px', '182px', 'auto', 'auto'],
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['763px', '-282px', '21px', '182px', 'auto', 'auto'],
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['738px', '-282px', '21px', '182px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['713px', '794px', '21px', '230px', 'auto', 'auto'],
                    id: 'RectangleCopy5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['763px', '794px', '21px', '230px', 'auto', 'auto'],
                    id: 'RectangleCopy4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['738px', '794px', '21px', '230px', 'auto', 'auto'],
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    type: 'image',
                    transform: [[0, 0], ['180']],
                    display: 'none',
                    rect: ['10px', '0px', '72px', '72px', 'auto', 'auto'],
                    id: 'back',
                    fill: ['rgba(0,0,0,0)', 'images/whitearrow.fw.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], ['180']],
                    display: 'none',
                    rect: ['10px', '0px', '72px', '72px', 'auto', 'auto'],
                    id: 'whitearrowfw',
                    fill: ['rgba(0,0,0,0)', 'images/whitearrow.fw.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'whitearrowfwCopy',
                    rect: ['1241px', '0px', '72px', '72px', 'auto', 'auto'],
                    transform: [[0, 0], ['539']],
                    fill: ['rgba(0,0,0,0)', 'images/whitearrow.fw.png', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['1350px', '369px', 'auto', 'auto', 'auto', 'auto'],
                    align: 'left',
                    id: 'instagram',
                    text: 'Instagram',
                    display: 'block',
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['1430px', '-26px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text2Copy',
                    text: 'Instagram',
                    align: 'left',
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['1402px', '685px', 'auto', 'auto', 'auto', 'auto'],
                    align: 'left',
                    id: 'youtube',
                    text: 'Youtube',
                    display: 'block',
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['2058px', '-24px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy',
                    text: 'Youtube',
                    align: 'left',
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    rect: ['1607px', '46px', '351px', '430px', 'auto', 'auto'],
                    id: 'viewF',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1)']
                },
                {
                    rect: ['1211px', '803px', '360px', '718px', 'auto', 'auto'],
                    id: 'viewI',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1)']
                },
                {
                    rect: ['1997px', '46px', '360px', '718px', 'auto', 'auto'],
                    id: 'viewT',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1)']
                },
                {
                    rect: ['1402px', '69px', '360px', '718px', 'auto', 'auto'],
                    id: 'viewY',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1)']
                },
                {
                    type: 'text',
                    rect: ['664px', '272px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text5',
                    text: 'T<br>W<br>I<br>T<br>T<br>E<br>R',
                    align: 'left',
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['1215px', '-24px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'TextCopy',
                    text: 'Twitter',
                    align: 'left',
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['662px', '229px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text6',
                    text: 'I<br>N<br>S<br>T<br>A<br>G<br>R<br>A<br>M',
                    align: 'left',
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['328', '685', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text7',
                    text: 'F<br>A<br>C<br>E<br>B<br>O<br>O<br>K',
                    align: 'left',
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['657px', '279px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text9',
                    text: 'Y<br>O<br>U<br>T<br>U<br>B<br>E',
                    align: 'left',
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_viewF}": [
                ["style", "top", '46px'],
                ["style", "height", '430px'],
                ["style", "left", '1607px'],
                ["style", "width", '351px']
            ],
            "${_viewY}": [
                ["style", "height", '730px'],
                ["style", "top", '69px'],
                ["style", "left", '1402px'],
                ["style", "width", '368px']
            ],
            "${_Text2Copy}": [
                ["style", "left", '1430px'],
                ["style", "top", '-26px']
            ],
            "${_RectangleCopy5}": [
                ["style", "height", '240px'],
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "left", '713px'],
                ["style", "top", '794px']
            ],
            "${_RectangleCopy4}": [
                ["style", "height", '240px'],
                ["style", "top", '794px'],
                ["style", "left", '763px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_Text7}": [
                ["style", "top", '244px'],
                ["style", "left", '480px']
            ],
            "${_wfbfw}": [
                ["style", "top", '395px'],
                ["style", "left", '1254px'],
                ["style", "display", 'block']
            ],
            "${_winstagramfw}": [
                ["style", "top", '239px'],
                ["style", "height", '72px'],
                ["style", "display", 'block'],
                ["style", "left", '1254px'],
                ["style", "width", '72px']
            ],
            "${symbolSelector}": [
                ["style", "height", '593px'],
                ["style", "width", '403px']
            ],
            "${_Text15}": [
                ["style", "left", '1296px'],
                ["style", "top", '0px']
            ],
            "${_RectangleCopy}": [
                ["style", "top", '-282px'],
                ["style", "height", '250px'],
                ["style", "left", '763px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_instagram}": [
                ["style", "top", '253px'],
                ["style", "left", '1350px'],
                ["style", "display", 'block']
            ],
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "top", '-282px'],
                ["style", "left", '713px'],
                ["style", "height", '250px']
            ],
            "${_Rectangle}": [
                ["style", "top", '-282px'],
                ["style", "height", '250px'],
                ["style", "left", '738px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_Text14}": [
                ["style", "left", '594px'],
                ["style", "top", '316px']
            ],
            "${_Text4Copy}": [
                ["style", "top", '-24px'],
                ["style", "left", '2058px']
            ],
            "${_whitearrowfwCopy}": [
                ["style", "top", '-12px'],
                ["transform", "rotateZ", '539deg'],
                ["style", "height", '72px'],
                ["style", "left", '1241px'],
                ["style", "width", '72px']
            ],
            "${_back}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '360deg'],
                ["style", "height", '72px'],
                ["style", "display", 'none'],
                ["style", "left", '385px'],
                ["style", "width", '72px']
            ],
            "${_viewI}": [
                ["style", "top", '46px'],
                ["style", "height", '730px'],
                ["style", "left", '2023px'],
                ["style", "width", '368px']
            ],
            "${_wtwitLinkfw}": [
                ["style", "top", '207px'],
                ["style", "left", '1235px'],
                ["style", "display", 'block']
            ],
            "${_viewT}": [
                ["style", "top", '46px'],
                ["style", "height", '730px'],
                ["style", "left", '1997px'],
                ["style", "width", '368px']
            ],
            "${_RectangleCopy3}": [
                ["style", "height", '240px'],
                ["style", "top", '794px'],
                ["style", "left", '738px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_Text5}": [
                ["style", "top", '272px'],
                ["style", "left", '664px']
            ],
            "${_twitter}": [
                ["style", "top", '235px'],
                ["style", "left", '1384px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '229px'],
                ["style", "left", '662px']
            ],
            "${_whitearrowfw}": [
                ["style", "top", '-12px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '72px'],
                ["style", "display", 'none'],
                ["style", "left", '718px'],
                ["style", "width", '72px']
            ],
            "${_facebook}": [
                ["style", "top", '441px'],
                ["style", "left", '1375px'],
                ["style", "display", 'block']
            ],
            "${_Text3Copy}": [
                ["style", "left", '1740px'],
                ["style", "top", '-26px']
            ],
            "${_youtube}": [
                ["style", "top", '650px'],
                ["style", "left", '1402px'],
                ["style", "display", 'block']
            ],
            "${_Text9}": [
                ["style", "left", '657px'],
                ["style", "top", '279px']
            ],
            "${_TextCopy}": [
                ["style", "left", '1215px'],
                ["style", "top", '-24px']
            ],
            "${_wybLinkfw}": [
                ["style", "top", '560px'],
                ["style", "left", '1240px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13500,
            autoPlay: true,
            labels: {
                "media": 8000,
                "tweet": 10000,
                "gram": 11000,
                "face": 12000,
                "tube": 13000
            },
            timeline: [
                { id: "eid461", tween: [ "style", "${_viewI}", "left", '802px', { fromValue: '2023px'}], position: 11000, duration: 500 },
                { id: "eid480", tween: [ "style", "${_viewI}", "left", '2354px', { fromValue: '802px'}], position: 12000, duration: 500 },
                { id: "eid405", tween: [ "style", "${_Text14}", "left", '734px', { fromValue: '594px'}], position: 8500, duration: 209 },
                { id: "eid448", tween: [ "style", "${_Text14}", "left", '592px', { fromValue: '734px'}], position: 10000, duration: 500 },
                { id: "eid805", tween: [ "style", "${_facebook}", "top", '421px', { fromValue: '441px'}], position: 8709, duration: 5 },
                { id: "eid806", tween: [ "style", "${_facebook}", "top", '421px', { fromValue: '421px'}], position: 8725, duration: 0 },
                { id: "eid434", tween: [ "style", "${_facebook}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid808", tween: [ "style", "${_wybLinkfw}", "left", '792px', { fromValue: '1240px'}], position: 8500, duration: 250 },
                { id: "eid500", tween: [ "style", "${_Text4Copy}", "left", '724px', { fromValue: '2058px'}], position: 13000, duration: 500 },
                { id: "eid437", tween: [ "style", "${_viewT}", "left", '802px', { fromValue: '1997px'}], position: 10000, duration: 500 },
                { id: "eid457", tween: [ "style", "${_viewT}", "left", '1994px', { fromValue: '802px'}], position: 11000, duration: 500 },
                { id: "eid390", tween: [ "style", "${_RectangleCopy3}", "top", '547px', { fromValue: '794px'}], position: 8500, duration: 209 },
                { id: "eid447", tween: [ "style", "${_RectangleCopy3}", "top", '598px', { fromValue: '547px'}], position: 10000, duration: 500 },
                { id: "eid468", tween: [ "style", "${_RectangleCopy3}", "top", '658px', { fromValue: '598px'}], position: 11000, duration: 500 },
                { id: "eid492", tween: [ "style", "${_RectangleCopy3}", "top", '621px', { fromValue: '658px'}], position: 12000, duration: 500 },
                { id: "eid514", tween: [ "style", "${_RectangleCopy3}", "top", '597px', { fromValue: '621px'}], position: 13000, duration: 500 },
                { id: "eid505", tween: [ "style", "${_Text9}", "top", '261px', { fromValue: '279px'}], position: 13000, duration: 500 },
                { id: "eid454", tween: [ "style", "${_whitearrowfwCopy}", "top", '-14px', { fromValue: '-12px'}], position: 10000, duration: 500 },
                { id: "eid478", tween: [ "style", "${_Text3Copy}", "left", '724px', { fromValue: '1740px'}], position: 12000, duration: 500 },
                { id: "eid496", tween: [ "style", "${_Text3Copy}", "left", '186px', { fromValue: '724px'}], position: 13000, duration: 500 },
                { id: "eid486", tween: [ "style", "${_Text7}", "left", '734px', { fromValue: '480px'}], position: 12000, duration: 500 },
                { id: "eid502", tween: [ "style", "${_Text7}", "left", '475px', { fromValue: '734px'}], position: 13000, duration: 500 },
                { id: "eid423", tween: [ "style", "${_TextCopy}", "left", '727px', { fromValue: '1215px'}], position: 10000, duration: 500 },
                { id: "eid458", tween: [ "style", "${_TextCopy}", "left", '1213px', { fromValue: '727px'}], position: 11000, duration: 500 },
                { id: "eid440", tween: [ "style", "${_RectangleCopy2}", "height", '197px', { fromValue: '250px'}], position: 10000, duration: 500 },
                { id: "eid469", tween: [ "style", "${_RectangleCopy2}", "height", '151px', { fromValue: '197px'}], position: 11000, duration: 500 },
                { id: "eid493", tween: [ "style", "${_RectangleCopy2}", "height", '173px', { fromValue: '151px'}], position: 12000, duration: 500 },
                { id: "eid506", tween: [ "style", "${_RectangleCopy2}", "height", '191px', { fromValue: '173px'}], position: 13000, duration: 500 },
                { id: "eid436", tween: [ "style", "${_youtube}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid453", tween: [ "style", "${_whitearrowfwCopy}", "left", '1105px', { fromValue: '1241px'}], position: 10000, duration: 500 },
                { id: "eid479", tween: [ "style", "${_Text3Copy}", "top", '0px', { fromValue: '-26px'}], position: 12000, duration: 500 },
                { id: "eid498", tween: [ "style", "${_Text3Copy}", "top", '0px', { fromValue: '0px'}], position: 13000, duration: 0 },
                { id: "eid499", tween: [ "style", "${_Text3Copy}", "top", '0px', { fromValue: '0px'}], position: 13500, duration: 0 },
                { id: "eid483", tween: [ "style", "${_viewF}", "top", '58px', { fromValue: '46px'}], position: 12000, duration: 500 },
                { id: "eid399", tween: [ "style", "${_facebook}", "left", '911px', { fromValue: '1375px'}], position: 8500, duration: 209 },
                { id: "eid383", tween: [ "style", "${_whitearrowfw}", "left", '713px', { fromValue: '718px'}], position: 8541, duration: 168 },
                { id: "eid411", tween: [ "style", "${_whitearrowfw}", "left", '475px', { fromValue: '713px'}], position: 10000, duration: 500 },
                { id: "eid518", tween: [ "style", "${_viewY}", "left", '802px', { fromValue: '1402px'}], position: 13000, duration: 500 },
                { id: "eid614", tween: [ "style", "${_RectangleCopy3}", "height", '230px', { fromValue: '240px'}], position: 8714, duration: 1286 },
                { id: "eid446", tween: [ "style", "${_RectangleCopy3}", "height", '182px', { fromValue: '230px'}], position: 10000, duration: 500 },
                { id: "eid467", tween: [ "style", "${_RectangleCopy3}", "height", '122px', { fromValue: '182px'}], position: 11000, duration: 500 },
                { id: "eid491", tween: [ "style", "${_RectangleCopy3}", "height", '159px', { fromValue: '122px'}], position: 12000, duration: 500 },
                { id: "eid513", tween: [ "style", "${_RectangleCopy3}", "height", '191px', { fromValue: '159px'}], position: 13000, duration: 500 },
                { id: "eid403", tween: [ "style", "${_Text15}", "top", '-2px', { fromValue: '0px'}], position: 8500, duration: 209 },
                { id: "eid384", tween: [ "style", "${_whitearrowfw}", "top", '-14px', { fromValue: '-12px'}], position: 8541, duration: 168 },
                { id: "eid433", tween: [ "style", "${_wfbfw}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid612", tween: [ "style", "${_RectangleCopy5}", "height", '230px', { fromValue: '240px'}], position: 8714, duration: 1286 },
                { id: "eid442", tween: [ "style", "${_RectangleCopy5}", "height", '182px', { fromValue: '230px'}], position: 10000, duration: 500 },
                { id: "eid463", tween: [ "style", "${_RectangleCopy5}", "height", '122px', { fromValue: '182px'}], position: 11000, duration: 500 },
                { id: "eid487", tween: [ "style", "${_RectangleCopy5}", "height", '159px', { fromValue: '122px'}], position: 12000, duration: 500 },
                { id: "eid509", tween: [ "style", "${_RectangleCopy5}", "height", '191px', { fromValue: '159px'}], position: 13000, duration: 500 },
                { id: "eid388", tween: [ "style", "${_RectangleCopy}", "top", '58px', { fromValue: '-282px'}], position: 8500, duration: 209 },
                { id: "eid475", tween: [ "style", "${_Text6}", "top", '231px', { fromValue: '229px'}], position: 11000, duration: 500 },
                { id: "eid385", tween: [ "style", "${_Text15}", "left", '792px', { fromValue: '1296px'}], position: 8500, duration: 209 },
                { id: "eid410", tween: [ "style", "${_Text15}", "left", '554px', { fromValue: '792px'}], position: 10000, duration: 500 },
                { id: "eid396", tween: [ "style", "${_instagram}", "left", '902px', { fromValue: '1350px'}], position: 8500, duration: 209 },
                { id: "eid501", tween: [ "style", "${_Text4Copy}", "top", '0px', { fromValue: '-24px'}], position: 13000, duration: 500 },
                { id: "eid686", tween: [ "style", "${_youtube}", "left", '927px', { fromValue: '1402px'}], position: 8500, duration: 209 },
                { id: "eid430", tween: [ "style", "${_wtwitLinkfw}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid462", tween: [ "style", "${_viewI}", "top", '58px', { fromValue: '46px'}], position: 11000, duration: 500 },
                { id: "eid481", tween: [ "style", "${_viewI}", "top", '36px', { fromValue: '58px'}], position: 12000, duration: 500 },
                { id: "eid387", tween: [ "style", "${_RectangleCopy2}", "top", '58px', { fromValue: '-282px'}], position: 8500, duration: 209 },
                { id: "eid613", tween: [ "style", "${_RectangleCopy4}", "height", '230px', { fromValue: '240px'}], position: 8714, duration: 1286 },
                { id: "eid444", tween: [ "style", "${_RectangleCopy4}", "height", '182px', { fromValue: '230px'}], position: 10000, duration: 500 },
                { id: "eid465", tween: [ "style", "${_RectangleCopy4}", "height", '122px', { fromValue: '182px'}], position: 11000, duration: 500 },
                { id: "eid489", tween: [ "style", "${_RectangleCopy4}", "height", '159px', { fromValue: '122px'}], position: 12000, duration: 500 },
                { id: "eid511", tween: [ "style", "${_RectangleCopy4}", "height", '191px', { fromValue: '159px'}], position: 13000, duration: 500 },
                { id: "eid431", tween: [ "style", "${_winstagramfw}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid429", tween: [ "style", "${_twitter}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid688", tween: [ "style", "${_wfbfw}", "left", '792px', { fromValue: '1254px'}], position: 8500, duration: 209 },
                { id: "eid460", tween: [ "style", "${_Text2Copy}", "left", '716px', { fromValue: '1430px'}], position: 11000, duration: 500 },
                { id: "eid476", tween: [ "style", "${_Text2Copy}", "left", '426px', { fromValue: '716px'}], position: 12000, duration: 500 },
                { id: "eid393", tween: [ "style", "${_wtwitLinkfw}", "top", '58px', { fromValue: '207px'}], position: 8500, duration: 209 },
                { id: "eid439", tween: [ "style", "${_RectangleCopy}", "height", '197px', { fromValue: '250px'}], position: 10000, duration: 500 },
                { id: "eid471", tween: [ "style", "${_RectangleCopy}", "height", '151px', { fromValue: '197px'}], position: 11000, duration: 500 },
                { id: "eid495", tween: [ "style", "${_RectangleCopy}", "height", '173px', { fromValue: '151px'}], position: 12000, duration: 500 },
                { id: "eid508", tween: [ "style", "${_RectangleCopy}", "height", '191px', { fromValue: '173px'}], position: 13000, duration: 500 },
                { id: "eid397", tween: [ "style", "${_winstagramfw}", "left", '802px', { fromValue: '1254px'}], position: 8500, duration: 209 },
                { id: "eid424", tween: [ "style", "${_TextCopy}", "top", '-2px', { fromValue: '-24px'}], position: 10000, duration: 500 },
                { id: "eid450", tween: [ "style", "${_Text5}", "left", '734px', { fromValue: '664px'}], position: 10000, duration: 500 },
                { id: "eid472", tween: [ "style", "${_Text5}", "left", '533px', { fromValue: '734px'}], position: 11000, duration: 500 },
                { id: "eid474", tween: [ "style", "${_Text6}", "left", '734px', { fromValue: '662px'}], position: 11000, duration: 500 },
                { id: "eid484", tween: [ "style", "${_Text6}", "left", '646px', { fromValue: '734px'}], position: 12000, duration: 500 },
                { id: "eid451", tween: [ "style", "${_Text5}", "top", '268px', { fromValue: '272px'}], position: 10000, duration: 500 },
                { id: "eid473", tween: [ "style", "${_Text5}", "top", '266px', { fromValue: '268px'}], position: 11000, duration: 500 },
                { id: "eid435", tween: [ "style", "${_wybLinkfw}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid519", tween: [ "style", "${_viewY}", "top", '52px', { fromValue: '69px'}], position: 13000, duration: 500 },
                { id: "eid386", tween: [ "style", "${_Rectangle}", "top", '58px', { fromValue: '-282px'}], position: 8500, duration: 209 },
                { id: "eid459", tween: [ "style", "${_Text2Copy}", "top", '-2px', { fromValue: '-26px'}], position: 11000, duration: 500 },
                { id: "eid477", tween: [ "style", "${_Text2Copy}", "top", '52px', { fromValue: '-2px'}], position: 12000, duration: 500 },
                { id: "eid389", tween: [ "style", "${_RectangleCopy4}", "top", '547px', { fromValue: '794px'}], position: 8500, duration: 209 },
                { id: "eid445", tween: [ "style", "${_RectangleCopy4}", "top", '598px', { fromValue: '547px'}], position: 10000, duration: 500 },
                { id: "eid466", tween: [ "style", "${_RectangleCopy4}", "top", '658px', { fromValue: '598px'}], position: 11000, duration: 500 },
                { id: "eid490", tween: [ "style", "${_RectangleCopy4}", "top", '621px', { fromValue: '658px'}], position: 12000, duration: 500 },
                { id: "eid512", tween: [ "style", "${_RectangleCopy4}", "top", '597px', { fromValue: '621px'}], position: 13000, duration: 500 },
                { id: "eid482", tween: [ "style", "${_viewF}", "left", '798px', { fromValue: '1607px'}], position: 12000, duration: 500 },
                { id: "eid515", tween: [ "style", "${_viewF}", "left", '1606px', { fromValue: '798px'}], position: 13000, duration: 500 },
                { id: "eid689", tween: [ "style", "${_wfbfw}", "top", '395px', { fromValue: '395px'}], position: 8709, duration: 0 },
                { id: "eid690", tween: [ "style", "${_wfbfw}", "top", '395px', { fromValue: '395px'}], position: 8714, duration: 0 },
                { id: "eid432", tween: [ "style", "${_instagram}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid376", tween: [ "style", "${_whitearrowfw}", "display", 'block', { fromValue: 'none'}], position: 8541, duration: 0 },
                { id: "eid687", tween: [ "style", "${_youtube}", "top", '591px', { fromValue: '650px'}], position: 8500, duration: 209 },
                { id: "eid441", tween: [ "style", "${_Rectangle}", "height", '197px', { fromValue: '250px'}], position: 10000, duration: 500 },
                { id: "eid470", tween: [ "style", "${_Rectangle}", "height", '151px', { fromValue: '197px'}], position: 11000, duration: 500 },
                { id: "eid494", tween: [ "style", "${_Rectangle}", "height", '173px', { fromValue: '151px'}], position: 12000, duration: 500 },
                { id: "eid507", tween: [ "style", "${_Rectangle}", "height", '191px', { fromValue: '173px'}], position: 13000, duration: 500 },
                { id: "eid394", tween: [ "style", "${_twitter}", "left", '955px', { fromValue: '1384px'}], position: 8500, duration: 209 },
                { id: "eid438", tween: [ "style", "${_viewT}", "top", '52px', { fromValue: '46px'}], position: 10000, duration: 500 },
                { id: "eid504", tween: [ "style", "${_Text9}", "left", '734px', { fromValue: '657px'}], position: 13000, duration: 500 },
                { id: "eid395", tween: [ "style", "${_twitter}", "top", '86px', { fromValue: '235px'}], position: 8500, duration: 209 },
                { id: "eid485", tween: [ "style", "${_Text7}", "top", '237px', { fromValue: '244px'}], position: 12000, duration: 500 },
                { id: "eid503", tween: [ "style", "${_Text7}", "top", '231px', { fromValue: '237px'}], position: 13000, duration: 500 },
                { id: "eid404", tween: [ "style", "${_Text14}", "top", '309px', { fromValue: '316px'}], position: 8500, duration: 209 },
                { id: "eid449", tween: [ "style", "${_Text14}", "top", '306px', { fromValue: '309px'}], position: 10000, duration: 500 },
                { id: "eid391", tween: [ "style", "${_RectangleCopy5}", "top", '547px', { fromValue: '794px'}], position: 8500, duration: 209 },
                { id: "eid443", tween: [ "style", "${_RectangleCopy5}", "top", '598px', { fromValue: '547px'}], position: 10000, duration: 500 },
                { id: "eid464", tween: [ "style", "${_RectangleCopy5}", "top", '658px', { fromValue: '598px'}], position: 11000, duration: 500 },
                { id: "eid488", tween: [ "style", "${_RectangleCopy5}", "top", '621px', { fromValue: '658px'}], position: 12000, duration: 500 },
                { id: "eid510", tween: [ "style", "${_RectangleCopy5}", "top", '597px', { fromValue: '621px'}], position: 13000, duration: 500 },
                { id: "eid392", tween: [ "style", "${_wtwitLinkfw}", "left", '800px', { fromValue: '1235px'}], position: 8500, duration: 209 }            ]
        }
    }
},
"form": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'contactsCopy2',
                    text: 'Contact',
                    display: 'none',
                    rect: ['342px', '530px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['344px', '24px', '72px', '72px', 'auto', 'auto'],
                    transform: [[0, 0], ['180']],
                    id: 'whitearrowfw',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/whitearrow.fw.png', '0px', '0px']
                },
                {
                    rect: ['337px', '-230px', '21px', '210px', 'auto', 'auto'],
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['394px', '-230px', '21px', '210px', 'auto', 'auto'],
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['365px', '-230px', '21px', '210px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['10px', '0px', '72px', '72px', 'auto', 'auto'],
                    transform: [[0, 0], ['180']],
                    id: 'whitearrowfwCopy',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/whitearrow.fw.png', '0px', '0px']
                },
                {
                    rect: ['337px', '834px', '21px', '170px', 'auto', 'auto'],
                    id: 'RectangleCopy5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['394px', '834px', '21px', '170px', 'auto', 'auto'],
                    id: 'RectangleCopy4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['365px', '834px', '21px', '170px', 'auto', 'auto'],
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text',
                    text: 'C<br>O<br>N<br>T<br>A<br>C<br>T',
                    align: 'left',
                    rect: ['282px', '314px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['822px', '90px', '364px', '730px', 'auto', 'auto'],
                    id: 'viewC',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_viewC}": [
                ["style", "height", '730px'],
                ["style", "left", '822px']
            ],
            "${_RectangleCopy3}": [
                ["style", "height", '170px'],
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "left", '365px'],
                ["style", "top", '834px']
            ],
            "${_contactsCopy2}": [
                ["style", "top", '36px'],
                ["style", "left", '979px'],
                ["style", "display", 'none']
            ],
            "${_RectangleCopy4}": [
                ["style", "height", '170px'],
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "left", '394px'],
                ["style", "top", '834px']
            ],
            "${symbolSelector}": [
                ["style", "height", '524px'],
                ["style", "width", '202px']
            ],
            "${_whitearrowfw}": [
                ["style", "top", '24px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '72px'],
                ["style", "display", 'none'],
                ["style", "left", '221px'],
                ["style", "width", '72px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "top", '-230px'],
                ["style", "left", '394px'],
                ["style", "height", '210px']
            ],
            "${_RectangleCopy2}": [
                ["style", "height", '210px'],
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "left", '337px'],
                ["style", "top", '-230px']
            ],
            "${_RectangleCopy5}": [
                ["style", "top", '834px'],
                ["style", "height", '170px'],
                ["style", "left", '337px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "top", '-230px'],
                ["style", "left", '365px'],
                ["style", "height", '210px']
            ],
            "${_whitearrowfwCopy}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '72px'],
                ["style", "display", 'none'],
                ["style", "left", '7px'],
                ["style", "width", '72px']
            ],
            "${_Text}": [
                ["style", "top", '314px'],
                ["style", "left", '282px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14750,
            autoPlay: true,
            timeline: [
                { id: "eid541", tween: [ "style", "${_RectangleCopy4}", "top", '650px', { fromValue: '834px'}], position: 14250, duration: 250 },
                { id: "eid535", tween: [ "style", "${_whitearrowfw}", "left", '337px', { fromValue: '221px'}], position: 14250, duration: 250 },
                { id: "eid550", tween: [ "style", "${_RectangleCopy}", "left", '391px', { fromValue: '394px'}], position: 14250, duration: 250 },
                { id: "eid520", tween: [ "style", "${_contactsCopy2}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid539", tween: [ "style", "${_RectangleCopy3}", "top", '650px', { fromValue: '834px'}], position: 14250, duration: 250 },
                { id: "eid536", tween: [ "style", "${_whitearrowfw}", "top", '23px', { fromValue: '24px'}], position: 14250, duration: 250 },
                { id: "eid542", tween: [ "style", "${_RectangleCopy4}", "left", '391px', { fromValue: '394px'}], position: 14250, duration: 250 },
                { id: "eid547", tween: [ "style", "${_RectangleCopy2}", "top", '90px', { fromValue: '-230px'}], position: 14250, duration: 250 },
                { id: "eid544", tween: [ "style", "${_RectangleCopy5}", "left", '334px', { fromValue: '337px'}], position: 14250, duration: 250 },
                { id: "eid540", tween: [ "style", "${_RectangleCopy3}", "left", '362px', { fromValue: '365px'}], position: 14250, duration: 250 },
                { id: "eid523", tween: [ "style", "${_whitearrowfw}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid538", tween: [ "style", "${_contactsCopy2}", "top", '35px', { fromValue: '36px'}], position: 14250, duration: 500 },
                { id: "eid537", tween: [ "style", "${_contactsCopy2}", "left", '415px', { fromValue: '979px'}], position: 14250, duration: 250 },
                { id: "eid548", tween: [ "style", "${_RectangleCopy2}", "left", '334px', { fromValue: '337px'}], position: 14250, duration: 250 },
                { id: "eid545", tween: [ "style", "${_Rectangle}", "top", '90px', { fromValue: '-230px'}], position: 14250, duration: 250 },
                { id: "eid546", tween: [ "style", "${_Rectangle}", "left", '362px', { fromValue: '365px'}], position: 14250, duration: 250 },
                { id: "eid549", tween: [ "style", "${_RectangleCopy}", "top", '90px', { fromValue: '-230px'}], position: 14250, duration: 250 },
                { id: "eid551", tween: [ "style", "${_Text}", "left", '355px', { fromValue: '282px'}], position: 14250, duration: 250 },
                { id: "eid543", tween: [ "style", "${_RectangleCopy5}", "top", '650px', { fromValue: '834px'}], position: 14250, duration: 250 },
                { id: "eid552", tween: [ "style", "${_viewC}", "left", '422px', { fromValue: '822px'}], position: 14250, duration: 250 }            ]
        }
    }
},
"slides": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '460px', '800px', 'auto', 'auto'],
                    id: 'beats',
                    opacity: 0.43902441786557,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/beats.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '460px', '800px', 'auto', 'auto'],
                    id: 'cherrymartini',
                    opacity: 0.56910569105691,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cherrymartini.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '460px', '800px', 'auto', 'auto'],
                    id: 'pioneer',
                    opacity: 0.61788614154831,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/pioneer.png', '0px', '0px']
                },
                {
                    rect: ['0', '0', '460px', '800px', 'auto', 'auto'],
                    id: 'tim12',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/tim12.png', '0px', '0px']
                },
                {
                    id: 'tim2',
                    type: 'image',
                    rect: ['0', '0', '460px', '800px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tim2.png', '0px', '0px']
                },
                {
                    rect: ['0', '0', '460px', '800px', 'auto', 'auto'],
                    id: 'tim3',
                    opacity: 0,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/tim3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_beats}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_cherrymartini}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_pioneer}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '800px'],
                ["style", "width", '460px']
            ],
            "${_tim3}": [
                ["style", "opacity", '0']
            ],
            "${_tim12}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_tim2}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13055,
            autoPlay: true,
            timeline: [
                { id: "eid782", tween: [ "style", "${_tim2}", "opacity", '0.67479674796748', { fromValue: '0'}], position: 0, duration: 2011 },
                { id: "eid783", tween: [ "style", "${_tim2}", "opacity", '0', { fromValue: '0.67479674796748'}], position: 2011, duration: 989 },
                { id: "eid557", tween: [ "style", "${_cherrymartini}", "opacity", '0.5691056847572327', { fromValue: '0'}], position: 4022, duration: 2011 },
                { id: "eid563", tween: [ "style", "${_cherrymartini}", "opacity", '0', { fromValue: '0.569106'}], position: 6033, duration: 989 },
                { id: "eid559", tween: [ "style", "${_beats}", "opacity", '0.439024418592453', { fromValue: '0'}], position: 8044, duration: 2011 },
                { id: "eid564", tween: [ "style", "${_beats}", "opacity", '0', { fromValue: '0.439024'}], position: 10055, duration: 1000 },
                { id: "eid781", tween: [ "style", "${_tim12}", "opacity", '0.39024390243902', { fromValue: '0'}], position: 6033, duration: 2011 },
                { id: "eid784", tween: [ "style", "${_tim12}", "opacity", '0', { fromValue: '0.3902440071105957'}], position: 8044, duration: 1000 },
                { id: "eid779", tween: [ "style", "${_tim12}", "display", 'block', { fromValue: 'none'}], position: 6033, duration: 0 },
                { id: "eid555", tween: [ "style", "${_pioneer}", "opacity", '0.6178861260414124', { fromValue: '0'}], position: 2011, duration: 2011 },
                { id: "eid562", tween: [ "style", "${_pioneer}", "opacity", '0', { fromValue: '0.617886'}], position: 4022, duration: 989 },
                { id: "eid797", tween: [ "style", "${_tim3}", "opacity", '0.30081300813008', { fromValue: '0'}], position: 10055, duration: 2011 },
                { id: "eid798", tween: [ "style", "${_tim3}", "opacity", '0', { fromValue: '0.300813'}], position: 12066, duration: 989 }            ]
        }
    }
},
"projects": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['123px', '254px', '72px', '72px', 'auto', 'auto'],
                    transform: [[], ['180']],
                    id: 'whitearrowfw',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/whitearrow.fw.png', '0px', '0px']
                },
                {
                    rect: ['327px', '942px', '72px', '72px', 'auto', 'auto'],
                    transform: [[], ['90']],
                    id: 'whitearrowfwCopy',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/whitearrow.fw.png', '0px', '0px']
                },
                {
                    rect: ['597', '242', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(253,253,253,1)', '400', 'none', 'normal'],
                    id: 'Text',
                    text: 'Projects',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['72px', '446', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(253,253,253,1)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: 'P<br>R<br>O<br>J<br>E<br>C<br>T<br>S',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'divercitySlide',
                    type: 'image',
                    rect: ['583px', '300px', '358px', '224px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/divercitySlide.png', '0px', '0px']
                },
                {
                    id: 'rgLookBook2',
                    type: 'image',
                    rect: ['589px', '542px', '345px', '216px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/rgLookBook2.png', '0px', '0px']
                },
                {
                    rect: ['116px', '0px', '21px', '210px', 'auto', 'auto'],
                    id: 'RectangleCopy5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['173px', '0px', '21px', '210px', 'auto', 'auto'],
                    id: 'RectangleCopy4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['144px', '0px', '21px', '210px', 'auto', 'auto'],
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['116px', '1064px', '21px', '170px', 'auto', 'auto'],
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['173px', '1064px', '21px', '170px', 'auto', 'auto'],
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['144px', '1064px', '21px', '170px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['205px', '536px', '345px', '332px', 'auto', 'auto'],
                    id: 'Text3',
                    text: 'The premiere magazine for entrepeneurs created by entrepeneurs, providing a showcase of up and coming companies from all walks of life and industries.Provider of tips and strategies for individuals looking to make their ideas a reality as well as established brands looking to take it to the next level.',
                    font: ['Arial, Helvetica, sans-serif', 28, 'rgba(251,245,245,1.00)', 'normal', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['999px', '536px', '308px', '254px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 27, 'rgba(251,245,245,1)', '400', 'none', 'normal'],
                    id: 'Text5',
                    text: '<br>For those smart enough to reject the norms and embrace the chaos, Rebel Genius presents a limited run collection for the Summer of 2015 filled with high quality fabrics and colorful imagery and bold statements. Are you smart enough to wear it?',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['205px', '1311px', '272px', '194px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 27, 'rgba(251,245,245,1)', '400', 'none', 'normal'],
                    id: 'Text6',
                    text: 'Whiskey or vodka? Red or white wine DrinkLikeMe.com will answer all of your questions and more. Home for seasoned drinkers,mixoligists and socialites to review spirits, recipes and embrace drinking culture.',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'emojis',
                    type: 'image',
                    rect: ['810px', '790px', '347px', '222px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/emojis.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '1044px'],
                ["style", "width", '345px'],
                ["color", "color", 'rgba(251,245,245,1.00)'],
                ["style", "height", '332px'],
                ["style", "left", '205px'],
                ["style", "font-size", '28px']
            ],
            "${_Text5}": [
                ["style", "top", '1593px'],
                ["style", "left", '199px'],
                ["style", "font-size", '27px']
            ],
            "${_whitearrowfwCopy}": [
                ["style", "top", '942px'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '72px'],
                ["style", "display", 'none'],
                ["style", "left", '327px'],
                ["style", "width", '72px']
            ],
            "${_rgLookBook2}": [
                ["style", "top", '542px'],
                ["style", "height", '216px'],
                ["style", "left", '589px'],
                ["style", "width", '345px']
            ],
            "${_RectangleCopy}": [
                ["style", "top", '1064px'],
                ["style", "height", '170px'],
                ["style", "left", '173px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${symbolSelector}": [
                ["style", "height", '1234px'],
                ["style", "width", '194px']
            ],
            "${_Rectangle}": [
                ["style", "top", '1064px'],
                ["style", "height", '170px'],
                ["style", "left", '144px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_RectangleCopy3}": [
                ["style", "height", '210px'],
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "left", '144px'],
                ["style", "top", '0px']
            ],
            "${_RectangleCopy4}": [
                ["style", "height", '210px'],
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "left", '173px'],
                ["style", "top", '0px']
            ],
            "${_Text6}": [
                ["style", "top", '1311px'],
                ["style", "height", '194px'],
                ["style", "width", '272px'],
                ["style", "left", '205px'],
                ["style", "font-size", '27px']
            ],
            "${_whitearrowfw}": [
                ["style", "top", '254px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '72px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '72px']
            ],
            "${_Text}": [
                ["style", "left", '597px'],
                ["style", "top", '242px']
            ],
            "${_emojis}": [
                ["style", "height", '222px'],
                ["style", "top", '790px'],
                ["style", "left", '810px'],
                ["style", "width", '347px']
            ],
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "top", '1064px'],
                ["style", "left", '116px'],
                ["style", "height", '170px']
            ],
            "${_Text2}": [
                ["style", "left", '72px'],
                ["style", "top", '446px']
            ],
            "${_divercitySlide}": [
                ["style", "top", '300px'],
                ["style", "height", '224px'],
                ["style", "left", '583px'],
                ["style", "width", '358px']
            ],
            "${_RectangleCopy5}": [
                ["style", "top", '0px'],
                ["style", "height", '210px'],
                ["style", "left", '116px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 20749,
            autoPlay: true,
            labels: {
                "projects": 15005,
                "city": 18000,
                "rebel": 19000,
                "dlm": 20011
            },
            timeline: [
                { id: "eid658", tween: [ "style", "${_RectangleCopy2}", "height", '160px', { fromValue: '170px'}], position: 15500, duration: 500 },
                { id: "eid664", tween: [ "style", "${_divercitySlide}", "top", '290px', { fromValue: '300px'}], position: 15500, duration: 500 },
                { id: "eid760", tween: [ "style", "${_divercitySlide}", "top", '1035px', { fromValue: '290px'}], position: 19000, duration: 500 },
                { id: "eid639", tween: [ "style", "${_RectangleCopy5}", "top", '289px', { fromValue: '0px'}], position: 15500, duration: 500 },
                { id: "eid751", tween: [ "style", "${_Text5}", "left", '228px', { fromValue: '199px'}], position: 19000, duration: 500 },
                { id: "eid753", tween: [ "style", "${_Text5}", "left", '251px', { fromValue: '228px'}], position: 20011, duration: 475 },
                { id: "eid666", tween: [ "style", "${_rgLookBook2}", "top", '536px', { fromValue: '542px'}], position: 16000, duration: 500 },
                { id: "eid745", tween: [ "style", "${_rgLookBook2}", "top", '1086px', { fromValue: '536px'}], position: 18000, duration: 500 },
                { id: "eid746", tween: [ "style", "${_rgLookBook2}", "top", '1014px', { fromValue: '1086px'}], position: 18500, duration: 500 },
                { id: "eid717", tween: [ "style", "${_rgLookBook2}", "top", '289px', { fromValue: '1014px'}], position: 19000, duration: 500 },
                { id: "eid767", tween: [ "style", "${_rgLookBook2}", "top", '1286px', { fromValue: '289px'}], position: 20011, duration: 489 },
                { id: "eid756", tween: [ "style", "${_Text6}", "top", '532px', { fromValue: '1311px'}], position: 20011, duration: 475 },
                { id: "eid665", tween: [ "style", "${_rgLookBook2}", "left", '207px', { fromValue: '589px'}], position: 16000, duration: 500 },
                { id: "eid743", tween: [ "style", "${_rgLookBook2}", "left", '194px', { fromValue: '207px'}], position: 18000, duration: 500 },
                { id: "eid744", tween: [ "style", "${_rgLookBook2}", "left", '215px', { fromValue: '194px'}], position: 18500, duration: 500 },
                { id: "eid718", tween: [ "style", "${_rgLookBook2}", "left", '209px', { fromValue: '215px'}], position: 19000, duration: 500 },
                { id: "eid651", tween: [ "style", "${_RectangleCopy}", "top", '854px', { fromValue: '1064px'}], position: 15500, duration: 500 },
                { id: "eid648", tween: [ "style", "${_Text2}", "top", '470px', { fromValue: '446px'}], position: 15500, duration: 500 },
                { id: "eid747", tween: [ "style", "${_Text3}", "left", '201px', { fromValue: '205px'}], position: 18000, duration: 500 },
                { id: "eid749", tween: [ "style", "${_Text3}", "left", '220px', { fromValue: '201px'}], position: 19000, duration: 500 },
                { id: "eid649", tween: [ "style", "${_Rectangle}", "top", '854px', { fromValue: '1064px'}], position: 15500, duration: 500 },
                { id: "eid657", tween: [ "style", "${_RectangleCopy3}", "height", '160px', { fromValue: '210px'}], position: 15500, duration: 500 },
                { id: "eid752", tween: [ "style", "${_Text5}", "top", '554px', { fromValue: '1593px'}], position: 19000, duration: 500 },
                { id: "eid754", tween: [ "style", "${_Text5}", "top", '1057px', { fromValue: '554px'}], position: 20011, duration: 475 },
                { id: "eid635", tween: [ "style", "${_RectangleCopy3}", "top", '289px', { fromValue: '0px'}], position: 15500, duration: 500 },
                { id: "eid641", tween: [ "style", "${_whitearrowfw}", "top", '218px', { fromValue: '254px'}], position: 15500, duration: 500 },
                { id: "eid646", tween: [ "style", "${_Text}", "top", '230px', { fromValue: '242px'}], position: 15500, duration: 500 },
                { id: "eid647", tween: [ "style", "${_Text2}", "left", '134px', { fromValue: '72px'}], position: 15500, duration: 500 },
                { id: "eid653", tween: [ "style", "${_RectangleCopy2}", "top", '854px', { fromValue: '1064px'}], position: 15500, duration: 500 },
                { id: "eid663", tween: [ "style", "${_divercitySlide}", "left", '199px', { fromValue: '583px'}], position: 15500, duration: 500 },
                { id: "eid761", tween: [ "style", "${_divercitySlide}", "left", '203px', { fromValue: '199px'}], position: 19000, duration: 500 },
                { id: "eid769", tween: [ "style", "${_whitearrowfwCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid772", tween: [ "style", "${_whitearrowfwCopy}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid759", tween: [ "style", "${_whitearrowfwCopy}", "display", 'block', { fromValue: 'block'}], position: 19500, duration: 0 },
                { id: "eid758", tween: [ "style", "${_whitearrowfwCopy}", "display", 'block', { fromValue: 'block'}], position: 20011, duration: 0 },
                { id: "eid757", tween: [ "style", "${_whitearrowfwCopy}", "display", 'block', { fromValue: 'block'}], position: 20749, duration: 0 },
                { id: "eid643", tween: [ "style", "${_whitearrowfw}", "left", '116px', { fromValue: '0px'}], position: 15500, duration: 500 },
                { id: "eid656", tween: [ "style", "${_RectangleCopy5}", "height", '160px', { fromValue: '210px'}], position: 15500, duration: 500 },
                { id: "eid634", tween: [ "style", "${_whitearrowfw}", "display", 'block', { fromValue: 'none'}], position: 15500, duration: 0 },
                { id: "eid631", tween: [ "style", "${_whitearrowfw}", "display", 'block', { fromValue: 'block'}], position: 20749, duration: 0 },
                { id: "eid660", tween: [ "style", "${_Rectangle}", "height", '160px', { fromValue: '170px'}], position: 15500, duration: 500 },
                { id: "eid810", tween: [ "style", "${_emojis}", "top", '770px', { fromValue: '790px'}], position: 16500, duration: 500 },
                { id: "eid812", tween: [ "style", "${_emojis}", "top", '1103px', { fromValue: '770px'}], position: 18000, duration: 500 },
                { id: "eid814", tween: [ "style", "${_emojis}", "top", '290px', { fromValue: '1103px'}], position: 20011, duration: 475 },
                { id: "eid655", tween: [ "style", "${_RectangleCopy4}", "height", '160px', { fromValue: '210px'}], position: 15500, duration: 500 },
                { id: "eid637", tween: [ "style", "${_RectangleCopy4}", "top", '289px', { fromValue: '0px'}], position: 15500, duration: 500 },
                { id: "eid659", tween: [ "style", "${_RectangleCopy}", "height", '160px', { fromValue: '170px'}], position: 15500, duration: 500 },
                { id: "eid748", tween: [ "style", "${_Text3}", "top", '532px', { fromValue: '1044px'}], position: 18000, duration: 500 },
                { id: "eid750", tween: [ "style", "${_Text3}", "top", '1045px', { fromValue: '532px'}], position: 19000, duration: 500 },
                { id: "eid645", tween: [ "style", "${_Text}", "left", '201px', { fromValue: '597px'}], position: 15500, duration: 500 },
                { id: "eid755", tween: [ "style", "${_Text6}", "left", '238px', { fromValue: '205px'}], position: 20011, duration: 475 },
                { id: "eid809", tween: [ "style", "${_emojis}", "left", '205px', { fromValue: '810px'}], position: 16500, duration: 500 },
                { id: "eid811", tween: [ "style", "${_emojis}", "left", '193px', { fromValue: '205px'}], position: 18000, duration: 500 },
                { id: "eid813", tween: [ "style", "${_emojis}", "left", '194px', { fromValue: '193px'}], position: 20011, duration: 475 }            ]
        }
    }
},
"bioslide": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '1px', '338px', '224px', 'auto', 'auto'],
                    id: 'timbio1',
                    fill: ['rgba(0,0,0,0)', 'images/timbio1.png', '0px', '0px']
                },
                {
                    id: 'timbio2',
                    type: 'image',
                    rect: ['0px', '0px', '337px', '225px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/timbio2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'timbio3',
                    opacity: 0,
                    rect: ['0px', '1px', '337px', '223px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/timbio3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_timbio3}": [
                ["style", "top", '1px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_timbio2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_timbio1}": [
                ["style", "top", '1px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '225px'],
                ["style", "width", '338px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5034,
            autoPlay: true,
            timeline: [
                { id: "eid785", tween: [ "style", "${_timbio1}", "display", 'block', { fromValue: 'block'}], position: 3022, duration: 0 },
                { id: "eid787", tween: [ "style", "${_timbio3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1511 },
                { id: "eid788", tween: [ "style", "${_timbio3}", "opacity", '0', { fromValue: '1'}], position: 1511, duration: 489 },
                { id: "eid791", tween: [ "style", "${_timbio2}", "opacity", '1', { fromValue: '0'}], position: 1511, duration: 1511 },
                { id: "eid792", tween: [ "style", "${_timbio2}", "opacity", '0', { fromValue: '1'}], position: 3022, duration: 489 },
                { id: "eid794", tween: [ "style", "${_timbio1}", "opacity", '1', { fromValue: '0'}], position: 3022, duration: 1511 },
                { id: "eid795", tween: [ "style", "${_timbio1}", "opacity", '0', { fromValue: '1'}], position: 4533, duration: 501 }            ]
        }
    }
},
"timsevents": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '-205px', '21px', '235px', 'auto', 'auto'],
                    id: 'RectangleCopy5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['50px', '-205px', '21px', '235px', 'auto', 'auto'],
                    id: 'RectangleCopy4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['25px', '-205px', '21px', '235px', 'auto', 'auto'],
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['0px', '893px', '21px', '198px', 'auto', 'auto'],
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['50px', '893px', '21px', '198px', 'auto', 'auto'],
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['25px', '893px', '21px', '198px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1.00)']
                },
                {
                    rect: ['-81px', '393px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    id: 'Text6',
                    text: 'E<br>V<br>E<br>N<br>T<br>S',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['-703px', '71px', '72px', '72px', 'auto', 'auto'],
                    transform: [[], ['180']],
                    id: 'whitearrowfw',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/whitearrow.fw.png', '0px', '0px']
                },
                {
                    rect: ['668px', '143px', '360px', '718px', 'auto', 'auto'],
                    id: 'viewE',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,252,1)']
                },
                {
                    rect: ['82px', '83px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['popeye_typeregular', 48, 'rgba(249,245,245,1)', '400', 'none', 'normal'],
                    id: 'Text5',
                    text: 'Events',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_viewE}": [
                ["style", "height", '730px'],
                ["style", "top", '143px'],
                ["style", "left", '668px'],
                ["style", "width", '368px']
            ],
            "${_RectangleCopy3}": [
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "top", '-205px'],
                ["style", "left", '25px'],
                ["style", "height", '235px']
            ],
            "${_Text5}": [
                ["style", "left", '553px'],
                ["style", "top", '83px']
            ],
            "${_RectangleCopy5}": [
                ["style", "height", '235px'],
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "left", '0px'],
                ["style", "top", '-205px']
            ],
            "${_Text6}": [
                ["style", "left", '-81px'],
                ["style", "top", '393px']
            ],
            "${_whitearrowfw}": [
                ["style", "top", '71px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '72px'],
                ["style", "display", 'none'],
                ["style", "left", '471px'],
                ["style", "width", '72px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "height", '198px'],
                ["style", "left", '50px'],
                ["style", "top", '893px']
            ],
            "${_RectangleCopy2}": [
                ["style", "top", '893px'],
                ["style", "height", '198px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(252,252,252,1)']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "height", '198px'],
                ["style", "left", '25px'],
                ["style", "top", '893px']
            ],
            "${symbolSelector}": [
                ["style", "height", '813px'],
                ["style", "width", '1057px']
            ],
            "${_RectangleCopy4}": [
                ["color", "background-color", 'rgba(252,252,252,1)'],
                ["style", "top", '-205px'],
                ["style", "left", '50px'],
                ["style", "height", '235px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 22250,
            autoPlay: true,
            timeline: [
                { id: "eid844", tween: [ "style", "${_RectangleCopy2}", "top", '675px', { fromValue: '893px'}], position: 21500, duration: 500 },
                { id: "eid842", tween: [ "style", "${_Text5}", "left", '82px', { fromValue: '553px'}], position: 21500, duration: 500 },
                { id: "eid841", tween: [ "style", "${_whitearrowfw}", "left", '0px', { fromValue: '471px'}], position: 21500, duration: 500 },
                { id: "eid836", tween: [ "style", "${_whitearrowfw}", "display", 'block', { fromValue: 'none'}], position: 21001, duration: 0 },
                { id: "eid849", tween: [ "style", "${_Text6}", "left", '18px', { fromValue: '-81px'}], position: 22000, duration: 250 },
                { id: "eid850", tween: [ "style", "${_viewE}", "left", '82px', { fromValue: '668px'}], position: 22000, duration: 250 },
                { id: "eid847", tween: [ "style", "${_RectangleCopy4}", "top", '143px', { fromValue: '-205px'}], position: 22000, duration: 250 },
                { id: "eid848", tween: [ "style", "${_RectangleCopy}", "top", '675px', { fromValue: '893px'}], position: 22000, duration: 250 },
                { id: "eid846", tween: [ "style", "${_RectangleCopy3}", "top", '143px', { fromValue: '-205px'}], position: 21750, duration: 250 },
                { id: "eid843", tween: [ "style", "${_RectangleCopy5}", "top", '143px', { fromValue: '-205px'}], position: 21500, duration: 500 },
                { id: "eid845", tween: [ "style", "${_Rectangle}", "top", '675px', { fromValue: '893px'}], position: 21750, duration: 250 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-29124179");
