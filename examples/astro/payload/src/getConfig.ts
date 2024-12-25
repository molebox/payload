import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig, SanitizedConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/**
 * Accepts an object with environment variables to support different methods to retrieve them, for example:
 * import.meta.env - Astro, Vite
 * process.env - Node.js
 */
export const resolveConfig = (env: Partial<Record<string, string>>): Promise<SanitizedConfig> => {
  return buildConfig({
    admin: {
      user: Users.slug,
      importMap: {
        baseDir: path.resolve(dirname),
      },
    },
    collections: [
      Users,
      Media,
      {
        slug: 'posts',
        fields: [
          {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
          },
        ],
      },
    ],
    editor: lexicalEditor(),
    secret: env.PAYLOAD_SECRET || '',
    typescript: {
      outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    async onInit(payload) {
      const { totalDocs: postsCount } = await payload.count({ collection: 'posts' })

      if (!postsCount) {
        await payload.create({ collection: 'posts', data: { title: 'Post 1' } })
      }
    },
    db: mongooseAdapter({
      url: env.DATABASE_URI || '',
    }),
    sharp,
    plugins: [],
  })
}
