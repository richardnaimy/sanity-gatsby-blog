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
                  buildHookId: '6049600f1eee2000b7ce9017',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-475wzgyg',
                  apiId: '88cd8732-3442-47ee-b6f2-3ed0cc896ec5'
                },
                {
                  buildHookId: '6049601076fe5900869d4891',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yvrdwe69',
                  apiId: '050e119d-913a-47d0-8cac-22c6e188220d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/richardnaimy/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yvrdwe69.netlify.app', category: 'apps' }
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
