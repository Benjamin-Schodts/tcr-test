import * as dotenv from 'dotenv';

import { select, text, timestamp } from '@keystone-6/core/fields';

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
		subtitle: text({
			validation: { isRequired: true },
		}),
		image: cloudinaryImage({
			cloudinary: {
				cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
				apiKey: process.env.CLOUDINARY_API_KEY || '',
				apiSecret: process.env.CLOUDINARY_API_SECRET || '',
				folder: process.env.CLOUDINARY_API_FOLDER || '',
			},
		}),
	},
});
