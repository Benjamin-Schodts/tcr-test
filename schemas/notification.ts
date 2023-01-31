import * as dotenv from 'dotenv';

import { text, timestamp } from '@keystone-6/core/fields';

import { allowAll } from '@keystone-6/core/access';
import { list } from '@keystone-6/core';

dotenv.config();

export default list({
	access: allowAll,
	fields: {
		createdAt: timestamp({
			defaultValue: { kind: 'now' },
			ui: {
				createView: {
					fieldMode: 'hidden',
				},
			},
		}),
		text: text({
			validation: { isRequired: true },
		}),
		buttonText: text({
			validation: { isRequired: false },
		}),
		buttonLink: text({
			validation: { isRequired: false },
		}),
	},
});
