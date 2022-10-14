// NOTE: This script is my rewrite of the token grabber.
// NOTE: However, this does not contain the malicious part,
// NOTE:  so executing this is guaranteed to be safe, so long
// NOTE:  as you aren't recording or streaming while executing
// NOTE:  the script, as it only reveals the token locally.

/** Discord's Webpack property name */
const discordWebpack = 'webpackChunkdiscord_app';

(async function ()
{
	// Can you top-level await in a browser?
	// Regardless, this is better-supported.
	const token = await getToken();
	alert('Token: ' + token);
})();

/** @returns {Promise<string?>} */
async function getToken ()
{
	// Webpack returns modules in some `c` property
	const modules = (await getModuleList()).c;

	for (const moduleName in modules)
	{
		const module = modules[moduleName];

		// Filter out redundant results
		if (!modules.hasOwnProperty(moduleName)
			|| !isEligibleModule(module))
		{
			continue;
		}

		// Find exported `getToken` if it exists and return its value
		const defaultExports = module.exports.default;
		for (const exportName in defaultExports)
		{
			if (exportName === 'getToken')
			{
				return defaultExports.getToken();
			}
		}
	}

	return null;
}

/**
 * Obtains Discord's webpack module list
 * @returns {Promise<Array<*?>>}
 */
async function getModuleList ()
{
	// Assure this is a valid Discord environment
	if (!(discordWebpack in window))
	{
		alert("Discord's WebPack hasn't loaded or doesn't exist!");
		return null;
	}

	// Modern JS with async
	return new Promise((resolve) =>
	{
		// Register a blank module
		webpackChunkdiscord_app.push([
			[ Math.random() ],
			{},

			// This is called after registration
			function (exportList)
			{
				// Contains all imported modules
				resolve(exportList);
			}
		]);
	});
}

/**
 * @param {object?} module Candidate
 * @returns {bool} Whether the argument is an ES module and has a default export
 */
function isEligibleModule (module)
{
	return (
		module?.exports
		&& module.exports.__esModule
		&& module.exports.default
	);
}
