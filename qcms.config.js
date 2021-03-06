// @ts-check

/** @type {import('@mvr-studio/qcms/src/types').QcmsConfig} */
const config = {
  name: 'Simple Blog',
  schema: {
    post: {
      fields: [
        { name: 'name', type: 'String', required: true },
        { name: 'content', type: 'String' },
        { name: 'imageUrl', type: 'String' },
        {
          name: 'categories',
          type: 'Relation',
          relation: 'hasMany',
          model: 'Category'
        }
      ],
      permissions: {
        findOne: true,
        findAll: true,
        create: ({ user }) => user.role === 'ADMIN',
        update: ({ user }) => user.role === 'ADMIN',
        delete: ({ user }) => user.role === 'ADMIN'
      }
    },
    category: {
      fields: [
        { name: 'name', type: 'String', required: true },
        {
          name: 'posts',
          type: 'Relation',
          relation: 'hasMany',
          model: 'Post'
        }
      ],
      permissions: {
        findOne: true,
        findAll: true,
        create: ({ user }) => user.role === 'ADMIN',
        update: ({ user }) => user.role === 'ADMIN',
        delete: ({ user }) => user.role === 'ADMIN'
      }
    }
  }
}

module.exports = config
