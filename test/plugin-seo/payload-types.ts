/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    pages: Page;
    media: Media;
    pagesWithImportedFields: PagesWithImportedField;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    pagesWithImportedFields: PagesWithImportedFieldsSelect<false> | PagesWithImportedFieldsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: 'en' | 'es' | 'de';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  productName?: string | null;
  collectionName?: string | null;
  city?: string | null;
  floristName?: string | null;
  title: string;
  excerpt?: string | null;
  slug: string;
  meta?: {
    title?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    description?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    image?: (string | null) | Media;
    ogTitle?: string | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  media?: (string | null) | Media;
  richText?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pagesWithImportedFields".
 */
export interface PagesWithImportedField {
  id: string;
  title: string;
  excerpt?: string | null;
  slug: string;
  metaAndSEO: {
    title: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    };
    innerMeta?: {
      description?: {
        root: {
          type: string;
          children: {
            type: string;
            version: number;
            [k: string]: unknown;
          }[];
          direction: ('ltr' | 'rtl') | null;
          format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
          indent: number;
          version: number;
        };
        [k: string]: unknown;
      } | null;
    };
    innerMedia?: {
      image?: (string | null) | Media;
    };
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'pagesWithImportedFields';
        value: string | PagesWithImportedField;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  productName?: T;
  collectionName?: T;
  city?: T;
  floristName?: T;
  title?: T;
  excerpt?: T;
  slug?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        ogTitle?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  media?: T;
  richText?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pagesWithImportedFields_select".
 */
export interface PagesWithImportedFieldsSelect<T extends boolean = true> {
  title?: T;
  excerpt?: T;
  slug?: T;
  metaAndSEO?:
    | T
    | {
        title?: T;
        innerMeta?:
          | T
          | {
              description?: T;
            };
        innerMedia?:
          | T
          | {
              image?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  // @ts-ignore 
  export interface GeneratedTypes extends Config {}
}