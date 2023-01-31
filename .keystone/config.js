"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);

// auth.ts
var import_auth = require("@keystone-6/auth");
var import_crypto = require("crypto");
var import_session = require("@keystone-6/core/session");
var sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  sessionData: "name createdAt",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"]
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// schemas/hero.ts
var dotenv = __toESM(require("dotenv"));
var import_fields = require("@keystone-6/core/fields");
var import_access = require("@keystone-6/core/access");
var import_cloudinary = require("@keystone-6/cloudinary");
var import_core = require("@keystone-6/core");
dotenv.config();
var hero_default = (0, import_core.list)({
  access: import_access.allowAll,
  fields: {
    createdAt: (0, import_fields.timestamp)({
      defaultValue: { kind: "now" },
      ui: {
        createView: {
          fieldMode: "hidden"
        }
      }
    }),
    title: (0, import_fields.text)({
      validation: { isRequired: true }
    }),
    subtitle: (0, import_fields.text)({
      validation: { isRequired: true }
    }),
    image: (0, import_cloudinary.cloudinaryImage)({
      cloudinary: {
        cloudName: "raine",
        apiKey: "129116343565762",
        apiSecret: "VUXq96-ELkVkaguPxMnH0_FTOqI",
        folder: "hero"
      }
    })
  }
});

// schemas/homepage.ts
var dotenv2 = __toESM(require("dotenv"));
var import_fields2 = require("@keystone-6/core/fields");
var import_access2 = require("@keystone-6/core/access");
var import_core2 = require("@keystone-6/core");
dotenv2.config();
var homepage_default = (0, import_core2.list)({
  access: import_access2.allowAll,
  isSingleton: true,
  fields: {
    hero: (0, import_fields2.relationship)({ ref: "Hero", many: false }),
    size: (0, import_fields2.select)({
      type: "enum",
      options: [
        {
          label: "Small (1/2 Screen height)",
          value: "small"
        },
        {
          label: "Medium (3/4 Screen height)",
          value: "medium"
        },
        {
          label: "Large (Full screen height)",
          value: "large"
        }
      ],
      validation: { isRequired: true },
      ui: { displayMode: "select" }
    }),
    notification: (0, import_fields2.relationship)({
      ref: "Notification",
      many: false,
      ui: {
        displayMode: "select",
        labelField: "text"
      }
    }),
    categories: (0, import_fields2.relationship)({
      ref: "Page",
      many: true,
      ui: {
        displayMode: "select",
        labelField: "title"
      }
    })
  }
});

// schemas/image.ts
var dotenv3 = __toESM(require("dotenv"));
var import_fields3 = require("@keystone-6/core/fields");
var import_access3 = require("@keystone-6/core/access");
var import_cloudinary2 = require("@keystone-6/cloudinary");
var import_core3 = require("@keystone-6/core");
dotenv3.config();
var image_default = (0, import_core3.list)({
  access: import_access3.allowAll,
  fields: {
    createdAt: (0, import_fields3.timestamp)({
      defaultValue: { kind: "now" },
      ui: {
        createView: {
          fieldMode: "hidden"
        }
      }
    }),
    title: (0, import_fields3.text)({
      validation: { isRequired: true }
    }),
    description: (0, import_fields3.text)({
      validation: { isRequired: false }
    }),
    image: (0, import_cloudinary2.cloudinaryImage)({
      cloudinary: {
        cloudName: "raine",
        apiKey: "129116343565762",
        apiSecret: "VUXq96-ELkVkaguPxMnH0_FTOqI",
        folder: ""
      }
    })
  }
});

// schemas/notification.ts
var dotenv4 = __toESM(require("dotenv"));
var import_fields4 = require("@keystone-6/core/fields");
var import_access4 = require("@keystone-6/core/access");
var import_core4 = require("@keystone-6/core");
dotenv4.config();
var notification_default = (0, import_core4.list)({
  access: import_access4.allowAll,
  fields: {
    createdAt: (0, import_fields4.timestamp)({
      defaultValue: { kind: "now" },
      ui: {
        createView: {
          fieldMode: "hidden"
        }
      }
    }),
    text: (0, import_fields4.text)({
      validation: { isRequired: true }
    }),
    buttonText: (0, import_fields4.text)({
      validation: { isRequired: false }
    }),
    buttonLink: (0, import_fields4.text)({
      validation: { isRequired: false }
    })
  }
});

// schemas/page.ts
var import_core5 = require("@keystone-6/core");
var import_fields5 = require("@keystone-6/core/fields");
var import_access5 = require("@keystone-6/core/access");
var import_cloudinary3 = require("@keystone-6/cloudinary");
var import_fields_document = require("@keystone-6/fields-document");
var import_fields6 = require("@keystone-6/core/fields");
var page_default = (0, import_core5.list)({
  access: import_access5.allowAll,
  fields: {
    ...(0, import_core5.group)({
      label: "Basic information",
      fields: {
        createdAt: (0, import_fields5.timestamp)({
          defaultValue: { kind: "now" },
          ui: {
            createView: {
              fieldMode: "hidden"
            },
            itemView: {
              fieldMode: "read"
            }
          }
        }),
        status: (0, import_fields5.select)({
          defaultValue: "draft",
          ui: { displayMode: "segmented-control" },
          options: [
            { label: "Published", value: "published" },
            { label: "Draft", value: "draft" }
          ]
        })
      }
    }),
    ...(0, import_core5.group)({
      label: "Page content",
      fields: {
        title: (0, import_fields5.text)({
          validation: { isRequired: true }
        }),
        summary: (0, import_fields5.text)({
          validation: { isRequired: true },
          isIndexed: "unique"
        }),
        content: (0, import_fields_document.document)({
          formatting: true,
          links: true,
          dividers: true,
          layouts: [
            [1, 1],
            [1, 1, 1],
            [2, 1],
            [1, 2],
            [1, 2, 1]
          ]
        })
      }
    }),
    coverImage: (0, import_cloudinary3.cloudinaryImage)({
      cloudinary: {
        cloudName: "raine",
        apiKey: "129116343565762",
        apiSecret: "VUXq96-ELkVkaguPxMnH0_FTOqI",
        folder: ""
      },
      ui: {
        itemView: {
          fieldPosition: "sidebar"
        }
      }
    }),
    imageGallery: (0, import_fields6.relationship)({
      ref: "Image",
      many: true,
      ui: {
        displayMode: "cards",
        cardFields: ["image"],
        inlineCreate: {
          fields: ["title", "description", "image"]
        },
        inlineConnect: true,
        itemView: {
          fieldPosition: "sidebar"
        }
      }
    })
  }
});

// schemas/user.ts
var import_fields7 = require("@keystone-6/core/fields");
var import_access6 = require("@keystone-6/core/access");
var import_core6 = require("@keystone-6/core");
var user_default = (0, import_core6.list)({
  access: import_access6.allowAll,
  fields: {
    name: (0, import_fields7.text)({
      validation: { isRequired: true }
    }),
    email: (0, import_fields7.text)({
      validation: { isRequired: true },
      isIndexed: "unique"
    }),
    password: (0, import_fields7.password)({
      validation: { isRequired: true }
    }),
    createdAt: (0, import_fields7.timestamp)({
      defaultValue: { kind: "now" }
    })
  }
});

// keystone.ts
var import_core7 = require("@keystone-6/core");
var keystone_default = withAuth(
  (0, import_core7.config)({
    server: {
      cors: { origin: ["http://localhost:3001"], credentials: true }
    },
    db: {
      provider: "postgresql",
      url: "postgres://ehxgkxrr:3I72KyScTMgVCoHnJbY5PZ8gxyygJgCR@manny.db.elephantsql.com/ehxgkxrr"
    },
    lists: {
      User: user_default,
      Page: page_default,
      Hero: hero_default,
      Homepage: homepage_default,
      Notification: notification_default,
      Image: image_default
    },
    session,
    ui: {
      isAccessAllowed: (context) => !!context.session?.data
    }
  })
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
