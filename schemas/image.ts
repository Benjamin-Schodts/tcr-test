import * as dotenv from 'dotenv';

import { text, timestamp } from '@keystone-6/core/fields';

import { allowAll } from '@keystone-6/core/access';
import { cloudinaryImage } from '@keystone-6/cloudinary';
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
		title: text({
			validation: { isRequired: true },
		}),
		description: text({
			validation: { isRequired: false },
		}),
		image: cloudinaryImage({
			cloudinary: {
				cloudName: 'raine' || '',
				apiKey: '129116343565762' || '',
				apiSecret: 'VUXq96-ELkVkaguPxMnH0_FTOqI' || '',
				folder: '' || '',
			},
		}),
	},
});
