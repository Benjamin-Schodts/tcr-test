// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { session, withAuth } from './auth';

import Hero from './schemas/hero';
import Homepage from './schemas/homepage';
import Image from './schemas/image';
import Notification from './schemas/notification';
import Page from './schemas/page';
import User from './schemas/user';
import { config } from '@keystone-6/core';
import { statelessSessions } from '@keystone-6/core/session';

export default withAuth(
	config({
		server: {
			cors: { origin: ['http://localhost:3001'], credentials: true },
		},
		db: {
			// we're using sqlite for the fastest startup experience
			//   for more information on what database might be appropriate for you
			//   see https://keystonejs.com/docs/guides/choosing-a-database#title
			// provider: 'sqlite',
			// url: 'file:./keystone.db',
			provider: 'postgresql',
			url: 'postgres://ehxgkxrr:3I72KyScTMgVCoHnJbY5PZ8gxyygJgCR@manny.db.elephantsql.com/ehxgkxrr',
		},
		lists: {
			User,
			Page,
			Hero,
			Homepage,
			Notification,
			Image,
		},
		session: statelessSessions({
			secret: 'ABCDEFGHgdsfsdcx1234567887654321HGFEDCBA',
			maxAge: 60 * 60 * 24,
		}),
		ui: {
			isAccessAllowed: (context) => !!context.session?.data,
		},
	})
);
