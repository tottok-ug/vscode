/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import nls = require('vs/nls');
import ModesExtensions = require('vs/editor/common/modes/modesRegistry');
import ConfigurationRegistry = require('vs/platform/configuration/common/configurationRegistry');
import Platform = require('vs/platform/platform');

ModesExtensions.registerMode({
	id: 'markdown',
	extensions: ['.hatena', '.htn', '.md'],
	aliases: ['Hatena', 'hatena'],
	mimetypes: ['text/x-web-hatena'],
	moduleId: 'vs/languages/hatena/common/hatena',
	ctorName: 'HatenaMode'
});

// Configuration
const configurationRegistry = <ConfigurationRegistry.IConfigurationRegistry>Platform.Registry.as(ConfigurationRegistry.Extensions.Configuration);
configurationRegistry.registerConfiguration({
	'id': 'hatena',
	'order': 20,
	'type': 'object',
	'title': nls.localize('hatenaConfigurationTitle', "Hatena preview configuration"),
	'properties': {
		'markdown.styles': {
			'type': 'array',
			'description': nls.localize('styles', "A list of URLs or local paths to CSS style sheets to use from the markdown preview."),
			'items': {
				'type': 'string'
			}
		}
	}
});