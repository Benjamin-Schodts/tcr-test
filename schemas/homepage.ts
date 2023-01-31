import * as dotenv from 'dotenv';

import { relationship, select } from '@keystone-6/core/fields';

import { allowAll } from '@keystone-6/core/access';
import { list } from '@keystone-6/core';

dotenv.config();

export default list({
	access: allowAll,
	isSingleton: true,
	fields: {
		hero: relationship({ ref: 'Hero', many: false }),
		size: select({
			type: 'enum',
			options: [
				{
					label: 'Small (1/2 Screen height)',
					value: 'small',
				},
				{
					label: 'Medium (3/4 Screen height)',
					value: 'medium',
				},
				{
					label: 'Large (Full screen height)',
					value: 'large',
				},
			],
			validation: { isRequired: true },
			ui: { displayMode: 'select' },
		}),
		notification: relationship({
			ref: 'Notification',
			many: false,
			ui: {
				displayMode: 'select',
				labelField: 'text',
			},
		}),
		categories: relationship({
			ref: 'Page',
			many: true,
			ui: {
				displayMode: 'select',
				labelField: 'title',
			},
		}),
	},
});
