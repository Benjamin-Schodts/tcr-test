import { password, text, timestamp } from '@keystone-6/core/fields';

import { allowAll } from '@keystone-6/core/access';
import { list } from '@keystone-6/core';

export default list({
	access: allowAll,
	fields: {
		name: text({
			validation: { isRequired: true },
		}),
		email: text({
			validation: { isRequired: true },
			isIndexed: 'unique',
		}),
		password: password({
			validation: { isRequired: true },
		}),
		createdAt: timestamp({
			defaultValue: { kind: 'now' },
		}),
	},
});
