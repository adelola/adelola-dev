const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `{
          allContentfulProject(
            filter: { hasPage: {eq: true} }
            sort: { fields: rating order: DESC }
          ){
            edges{
              node{
                name
                slug
              }
            }
          } 
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        //Create individual pages for projects with additional content
        const projects = result.data.allContentfulProject.edges
        const projectPage = path.resolve('./src/templates/project-page.js')

        projects.forEach((project, index) => {
          const previous = index === projects.length - 1 ? null : projects[index + 1].node
          const next = index === 0 ? null : projects[index - 1].node  
  
          createPage({
            path: `/projects/${project.node.slug}/`,
            component: projectPage,
            context: {
              slug: project.node.slug,
              previous,
              next,
            },
          })
        })
       
      })

    )}
  )}
