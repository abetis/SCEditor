import { attr } from './dom.js';

/**
 * Default options for SCEditor
 * @type {Object}
 */
export default {
	/** @lends jQuery.sceditor.defaultOptions */
	/**
	 * Toolbar buttons order and groups. Should be comma separated and
	 * have a bar | to separate groups
	 *
	 * @type {string}
	 */
	toolbar: 'bold,italic,underline,strike,subscript,superscript|' +
		'left,center,right,justify|font,size,color,removeformat|' +
		'cut,copy,pastetext|bulletlist,orderedlist,indent,outdent|' +
		'table|code,quote|horizontalrule,image,email,link,unlink|' +
		'emoticon,youtube,date,time|ltr,rtl|product,productslist|' +
		'print,maximize,source',

	/**
	 * Comma separated list of commands to excludes from the toolbar
	 *
	 * @type {string}
	 */
	//toolbarExclude: null,
	// TODO: add to parser the excluded list
	// Alex changed to:
	toolbarExclude: 'strike,subscript,superscript,left,center,right,' +
		'justify,indent,outdent,table,font,indent,outdent,horizontalrule,' +
		'ltr,rtl,print',

	/**
	 * Stylesheet to include in the WYSIWYG editor. This is what will style
	 * the WYSIWYG elements
	 *
	 * @type {string}
	 */
	style: 'jquery.sceditor.default.css',

	/**
	 * Comma separated list of fonts for the font selector
	 *
	 * @type {string}
	 */
	//fonts: 'Arial,Arial Black,Comic Sans MS,Courier New,Georgia,Impact,' +
	//	'Sans-serif,Serif,Times New Roman,Trebuchet MS,Verdana',
	// Alex changed to:
	fonts: 'Lucida Grande, Trebuchet MS, Verdana, Helvetica, Arial, sans-serif',

	/**
	 * Colors should be comma separated and have a bar | to signal a new
	 * column.
	 *
	 * If null the colors will be auto generated.
	 *
	 * @type {string}
	 */
	colors: '#000000,#44B8FF,#1E92F7,#0074D9,#005DC2,#00369B,#b3d5f4|' +
			'#444444,#C3FFFF,#9DF9FF,#7FDBFF,#68C4E8,#419DC1,#d9f4ff|' +
			'#666666,#72FF84,#4CEA5E,#2ECC40,#17B529,#008E02,#c0f0c6|' +
			'#888888,#FFFF44,#FFFA1E,#FFDC00,#E8C500,#C19E00,#fff5b3|' +
			'#aaaaaa,#FFC95F,#FFA339,#FF851B,#E86E04,#C14700,#ffdbbb|' +
			'#cccccc,#FF857A,#FF5F54,#FF4136,#E82A1F,#C10300,#ffc6c3|' +
			'#eeeeee,#FF56FF,#FF30DC,#F012BE,#D900A7,#B20080,#fbb8ec|' +
			'#ffffff,#F551FF,#CF2BE7,#B10DC9,#9A00B2,#9A00B2,#e8b6ef',

	/**
	 * The locale to use.
	 * @type {string}
	 */
	locale: attr(document.documentElement, 'lang') || 'en',

	/**
	 * The Charset to use
	 * @type {string}
	 */
	charset: 'utf-8',

	/**
	 * Compatibility mode for emoticons.
	 *
	 * Helps if you have emoticons such as :/ which would put an emoticon
	 * inside http://
	 *
	 * This mode requires emoticons to be surrounded by whitespace or end of
	 * line chars. This mode has limited As You Type emoticon conversion
	 * support. It will not replace AYT for end of line chars, only
	 * emoticons surrounded by whitespace. They will still be replaced
	 * correctly when loaded just not AYT.
	 *
	 * @type {boolean}
	 */
	// Alex changed to true, was false
	emoticonsCompat: true,

	/**
	 * If to enable emoticons. Can be changes at runtime using the
	 * emoticons() method.
	 *
	 * @type {boolean}
	 * @since 1.4.2
	 */
	emoticonsEnabled: true,

	/**
	 * Emoticon root URL
	 *
	 * @type {string}
	 */
	emoticonsRoot: '',
	/*
	emoticons: {
		dropdown: {
			':)': 'emoticons/smile.png',
			':angel:': 'emoticons/angel.png',
			':angry:': 'emoticons/angry.png',
			'8-)': 'emoticons/cool.png',
			':\'(': 'emoticons/cwy.png',
			':ermm:': 'emoticons/ermm.png',
			':D': 'emoticons/grin.png',
			'<3': 'emoticons/heart.png',
			':(': 'emoticons/sad.png',
			':O': 'emoticons/shocked.png',
			':P': 'emoticons/tongue.png',
			';)': 'emoticons/wink.png'
		},
		more: {
			':alien:': 'emoticons/alien.png',
			':blink:': 'emoticons/blink.png',
			':blush:': 'emoticons/blush.png',
			':cheerful:': 'emoticons/cheerful.png',
			':devil:': 'emoticons/devil.png',
			':dizzy:': 'emoticons/dizzy.png',
			':getlost:': 'emoticons/getlost.png',
			':happy:': 'emoticons/happy.png',
			':kissing:': 'emoticons/kissing.png',
			':ninja:': 'emoticons/ninja.png',
			':pinch:': 'emoticons/pinch.png',
			':pouty:': 'emoticons/pouty.png',
			':sick:': 'emoticons/sick.png',
			':sideways:': 'emoticons/sideways.png',
			':silly:': 'emoticons/silly.png',
			':sleeping:': 'emoticons/sleeping.png',
			':unsure:': 'emoticons/unsure.png',
			':woot:': 'emoticons/w00t.png',
			':wassat:': 'emoticons/wassat.png'
		},
		hidden: {
			':whistling:': 'emoticons/whistling.png',
			':love:': 'emoticons/wub.png'
		}
	},
	*/
	// Alex changed to:
	emoticons: {
		dropdown: {
			':)': 'emoticons/smile.png',
			':angel:': 'emoticons/angel.png',
			':angry:': 'emoticons/angry.png',
			'8-)': 'emoticons/cool.png',
			':cry:(': 'emoticons/cwy.png',
			':ermm:': 'emoticons/ermm.png',
			':D': 'emoticons/grin.png',
			'<3': 'emoticons/heart.png',
			':(': 'emoticons/sad.png',
			':shocked:': 'emoticons/shocked.png',
			':P': 'emoticons/tongue.png',
			';)': 'emoticons/wink.png'
		},
		more: {
			':alien:': 'emoticons/alien.png',
			':blink:': 'emoticons/blink.png',
			':blush:': 'emoticons/blush.png',
			':cheerful:': 'emoticons/cheerful.png',
			':devil:': 'emoticons/devil.png',
			':dizzy:': 'emoticons/dizzy.png',
			':getlost:': 'emoticons/getlost.png',
			':happy:': 'emoticons/happy.png',
			':kissing:': 'emoticons/kissing.png',
			':ninja:': 'emoticons/ninja.png',
			':pinch:': 'emoticons/pinch.png',
			':pouty:': 'emoticons/pouty.png',
			':sick:': 'emoticons/sick.png',
			':sideways:': 'emoticons/sideways.png',
			':silly:': 'emoticons/silly.png',
			':sleeping:': 'emoticons/sleeping.png',
			':unsure:': 'emoticons/unsure.png',
			':woot:': 'emoticons/w00t.png',
			':wassat:': 'emoticons/wassat.png',
			':whistling:': 'emoticons/whistling.png',
			':love:': 'emoticons/wub.png',
			':lol:': 'emoticons/laughing.png',
			':face:': 'emoticons/face.png',
			':arrow:': 'emoticons/arrow.gif',
			':eek:': 'emoticons/eek.gif',
			':evil:': 'emoticons/evil.gif',
			':!:': 'emoticons/exclaim.gif',
			':?:': 'emoticons/question.gif',
			':geek:': 'emoticons/geek.gif',
			':idea:': 'emoticons/idea.gif',
			':mrgreen:': 'emoticons/mrgreen.gif',
			':|': 'emoticons/neutral.gif',
			':rolleyes:': 'emoticons/rolleyes.gif',
			':O': 'emoticons/surprised.gif',
			':ugeek:': 'emoticons/ugeek.gif',
			':clap:': 'emoticons/clap.gif',
			':crazy:': 'emoticons/crazy.gif',
			':eh:': 'emoticons/eh.gif',
			':lolno:': 'emoticons/lolno.gif',
			':problem:': 'emoticons/problem.gif',
			':shh:': 'emoticons/shh.gif',
			':shifty:': 'emoticons/shifty.gif',
			':silent:': 'emoticons/silent.gif',
			':think:': 'emoticons/think.gif',
			':thumbdown:': 'emoticons/thumbdown.gif',
			':thumbup:': 'emoticons/thumbup.gif',
			':wave:': 'emoticons/wave.gif',
			':wtf:': 'emoticons/wtf.gif',
			':yawn:': 'emoticons/yawn.gif',
			':confused:': 'emoticons/confused.gif'
		},
		hidden: {
			'(:': 'emoticons/smile.png',
			':smile:': 'emoticons/smile.png',
			':smiling:': 'emoticons/smile.png',
			'D:': 'emoticons/grin.png',
			':biggrin:': 'emoticons/grin.png',
			':grin:': 'emoticons/grin.png',
			'(-8': 'emoticons/cool.png',
			':cool:': 'emoticons/cool.png',
			':\'(': 'emoticons/cwy.png',
			':cwy:': 'emoticons/cwy.png',
			':verysad:': 'emoticons/cwy.png',
			'[=': 'emoticons/sideways.png',
			'(;': 'emoticons/wink.png',
			':wink:': 'emoticons/wink.png',
			':x': 'emoticons/angry.png',
			'x:': 'emoticons/angry.png',
			':X': 'emoticons/angry.png',
			'X:': 'emoticons/angry.png',
			':mad:': 'emoticons/angry.png',
			'P:': 'emoticons/tongue.png',
			':p': 'emoticons/tongue.png',
			'p:': 'emoticons/tongue.png',
			':razz:': 'emoticons/tongue.png',
			':tongue:': 'emoticons/tongue.png',
			':heart:': 'emoticons/heart.png',
			':laughing:': 'emoticons/laughing.png',
			':sad:': 'emoticons/sad.png',
			'):': 'emoticons/sad.png',
			':oops:': 'emoticons/blush.png',
			':redface:': 'emoticons/blush.png',
			':notsure:': 'emoticons/unsure.png',
			':love:': 'emoticons/wub.png',
			':twisted:': 'emoticons/devil.png',
			':kiss:': 'emoticons/kissing.png',
			'=]': 'emoticons/sideways.png',
			':shock:': 'emoticons/eek.gif',
			':verymad:': 'emoticons/evil.gif',
			':exclaim:': 'emoticons/exclaim.gif',
			':question:': 'emoticons/question.gif',
			':roll:': 'emoticons/rolleyes.gif',
			'?:': 'emoticons/confused.gif',
			':?': 'emoticons/confused.gif',
			'O:': 'emoticons/surprised.gif',
			':o': 'emoticons/surprised.gif',
			'o:': 'emoticons/surprised.gif',
			':surprised:': 'emoticons/surprised.gif',
			'|:': 'emoticons/neutral.gif',
			':neutral:': 'emoticons/neutral.gif'
		}
	},

	/**
	 * Width of the editor. Set to null for automatic with
	 *
	 * @type {?number}
	 */
	width: null,

	/**
	 * Height of the editor including toolbar. Set to null for automatic
	 * height
	 *
	 * @type {?number}
	 */
	height: null,

	/**
	 * If to allow the editor to be resized
	 *
	 * @type {boolean}
	 */
	resizeEnabled: true,

	/**
	 * Min resize to width, set to null for half textarea width or -1 for
	 * unlimited
	 *
	 * @type {?number}
	 */
	resizeMinWidth: null,
	/**
	 * Min resize to height, set to null for half textarea height or -1 for
	 * unlimited
	 *
	 * @type {?number}
	 */
	resizeMinHeight: null,
	/**
	 * Max resize to height, set to null for double textarea height or -1
	 * for unlimited
	 *
	 * @type {?number}
	 */
	resizeMaxHeight: null,
	/**
	 * Max resize to width, set to null for double textarea width or -1 for
	 * unlimited
	 *
	 * @type {?number}
	 */
	resizeMaxWidth: null,
	/**
	 * If resizing by height is enabled
	 *
	 * @type {boolean}
	 */
	resizeHeight: true,
	/**
	 * If resizing by width is enabled
	 *
	 * @type {boolean}
	 */
	resizeWidth: true,

	/**
	 * Date format, will be overridden if locale specifies one.
	 *
	 * The words year, month and day will be replaced with the users current
	 * year, month and day.
	 *
	 * @type {string}
	 */
	//dateFormat: 'year-month-day',
	// Alex changed to:
	dateFormat: 'day/month/year',

	/**
	 * Element to inset the toolbar into.
	 *
	 * @type {HTMLElement}
	 */
	toolbarContainer: null,

	/**
	 * If to enable paste filtering. This is currently experimental, please
	 * report any issues.
	 *
	 * @type {boolean}
	 */
	enablePasteFiltering: false,

	/**
	 * If to completely disable pasting into the editor
	 *
	 * @type {boolean}
	 */
	disablePasting: false,

	/**
	 * If the editor is read only.
	 *
	 * @type {boolean}
	 */
	readOnly: false,

	/**
	 * If to set the editor to right-to-left mode.
	 *
	 * If set to null the direction will be automatically detected.
	 *
	 * @type {boolean}
	 */
	rtl: false,

	/**
	 * If to auto focus the editor on page load
	 *
	 * @type {boolean}
	 */
	autofocus: false,

	/**
	 * If to auto focus the editor to the end of the content
	 *
	 * @type {boolean}
	 */
	autofocusEnd: true,

	/**
	 * If to auto expand the editor to fix the content
	 *
	 * @type {boolean}
	 */
	autoExpand: false,

	/**
	 * If to auto update original textbox on blur
	 *
	 * @type {boolean}
	 */
	// Alex changed to true since submitting forms from script doesn't trigger
	// the submit event in the SCEditor
	autoUpdate: true,

	/**
	 * If to enable the browsers built in spell checker
	 *
	 * @type {boolean}
	 */
	spellcheck: true,

	/**
	 * If to run the source editor when there is no WYSIWYG support. Only
	 * really applies to mobile OS's.
	 *
	 * @type {boolean}
	 */
	runWithoutWysiwygSupport: false,

	/**
	 * If to load the editor in source mode and still allow switching
	 * between WYSIWYG and source mode
	 *
	 * @type {boolean}
	 */
	startInSourceMode: false,

	/**
	 * Optional ID to give the editor.
	 *
	 * @type {string}
	 */
	id: null,

	/**
	 * Comma separated list of plugins
	 *
	 * @type {string}
	 */
	plugins: 'undo,inline-code,format,percentage-fontsize,list-enhanced,' +
		'video,products,plaintext',

	/**
	 * z-index to set the editor container to. Needed for jQuery UI dialog.
	 *
	 * @type {?number}
	 */
	zIndex: null,

	/**
	 * If to trim the BBCode. Removes any spaces at the start and end of the
	 * BBCode string.
	 *
	 * @type {boolean}
	 */
	//bbcodeTrim: false,
	// Alex set to true
	bbcodeTrim: true,

	/**
	 * If to disable removing block level elements by pressing backspace at
	 * the start of them
	 *
	 * @type {boolean}
	 */
	disableBlockRemove: false,

	/**
	 * BBCode parser options, only applies if using the editor in BBCode
	 * mode.
	 *
	 * See SCEditor.BBCodeParser.defaults for list of valid options
	 *
	 * @type {Object}
	 */
	parserOptions: {
		/**
		* Parameters that will be added to YouTube frame tag
		*
		* @type {string}
		*/
		youtubeParameters: 'width="380" height="250" frameborder="0" ' +
			'allowfullscreen title="YouTube Video"',

		/**
			* Parameters that will be added to Facebook frame tag
			*
			* @type {string}
			*/
		facebookParameters: 'width="380" height="250" ' +
			'style="border:none;overflow:hidden" scrolling="no" ' +
			'frameborder="0" allowTransparency="true" allowFullScreen="true" ' +
			'title="Facebook Video"'
	},

	/**
	 * CSS that will be added to the to dropdown menu (eg. z-index)
	 *
	 * @type {Object}
	 */
	dropDownCss: { },

	// list-enhanced plugin configuration
	listEnhanced: {
		/**
		* Default configuration of the ordered list options.
		*
		* The list should include BBCode tagName, valid css style
		* list-style-type and the description of the option that
		* will be shown in the dropdown list
		*
		* The format of the list is:
		* bbCode-type: { "type": style-type, "description": Description }
		*
		* @type {Object}
		*/
		orderedList: {
			'1': {
				type: 'decimal',
				description: 'Decimal numbers (1, 2, 3, 4)'
			},
			'h': {
				type: 'hebrew',
				description: 'Hebrew letters (א, ב, ג, ד)'
			},
			'a': {
				type: 'lower-alpha',
				description: 'Alphabetic lowercase (a, b, c, d)'
			},
			'A': {
				type: 'upper-alpha',
				description: 'Alphabetic uppercase (A, B, C, D)'
			},
			'i': {
				type: 'lower-roman',
				description: 'Roman lowercase (i, ii, iii, iv)'
			},
			'I': {
				type: 'upper-roman',
				description: 'Roman uppercase (I, II, III, IV)'
			}
		},

		/**
		* Default configuration of the bullet list options.
		*
		* The list should include BBCode tagName, which is valid css style name
		* and the description of the option that will be shown in the
		* dropdown list
		*
		* The format of the list is:
		* bbCode-type: Description
		*
		* @type {Object}
		*/
		bulletList: {
			'disc': 'Bullet',
			'circle': 'Circle',
			'square': 'Square'
		}
	}
};
