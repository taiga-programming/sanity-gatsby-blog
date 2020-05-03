export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eae55677feab7edbd3547a3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-t89efu87',
                  apiId: 'f1176182-7f4e-47ed-a63a-54859eac1b04'
                },
                {
                  buildHookId: '5eae5567e83a65ae0888bd6d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8ej99xk8',
                  apiId: '0ab5348d-bea0-4fd9-a60e-fc46443ed849'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/taiga-programming/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8ej99xk8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
