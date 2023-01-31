import { group, list } from '@keystone-6/core';
import { select, text, timestamp } from '@keystone-6/core/fields';

import { allowAll } from '@keystone-6/core/access';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import { document } from '@keystone-6/fields-document';
import { relationship } from '@keystone-6/core/fields';

export default list({
	access: allowAll,
	fields: {
		...group({
			label: 'Basic information',
			fields: {
				createdAt: timestamp({
					defaultValue: { kind: 'now' },
					ui: {
						createView: {
							fieldMode: 'hidden',
						},
						itemView: {
							fieldMode: 'read',
						},
					},
				}),
				status: select({
					defaultValue: 'draft',
					ui: { displayMode: 'segmented-control' },
					options: [
						{ label: 'Published', value: 'published' },
						{ label: 'Draft', value: 'draft' },
					],
				}),
			},
		}),
		...group({
			label: 'Page content',
			fields: {
				title: text({
					validation: { isRequired: true },
				}),
				summary: text({
					validation: { isRequired: true },
					isIndexed: 'unique',
				}),
				content: document({
					formatting: true,
					links: true,
					dividers: true,
					layouts: [
						[1, 1],
						[1, 1, 1],
						[2, 1],
						[1, 2],
						[1, 2, 1],
					],
				}),
			},
		}),
		coverImage: cloudinaryImage({
			cloudinary: {
				cloudName: 'raine' || '',
				apiKey: '129116343565762' || '',
				apiSecret: 'VUXq96-ELkVkaguPxMnH0_FTOqI' || '',
				folder: '' || '',
			},
			ui: {
				itemView: {
					fieldPosition: 'sidebar',
				},
			},
		}),
		imageGallery: relationship({
			ref: 'Image',
			many: true,
			ui: {
				displayMode: 'cards',
				cardFields: ['image'],
				inlineCreate: {
					fields: ['title', 'description', 'image'],
				},
				inlineConnect: true,
				itemView: {
					fieldPosition: 'sidebar',
				},
			},
		}),
	},
});
