import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout.js'

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          repositories(
            first: 4
            isFork: false
            privacy: PUBLIC
            orderBy: { field: STARGAZERS, direction: DESC }
          ) {
            edges {
              node {
                id
                name
                description
                url
                stargazers {
                  totalCount
                }
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
`)
  return (
    <Layout>
       <h1>This is the index page.</h1>
       <div>
       <ul>
        {data.github.viewer.repositories.edges.map(edge => {
          return (
            <li>
              <Link
                href={edge.node.url}
              >
                <h1>{edge.node.name}</h1>
                <p>{edge.node.description}</p>
                <p>{edge.node.stargazers.totalCount}</p>
                <p>
                  {edge.node.primaryLanguage && edge.node.primaryLanguage.name}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
       </div>
    </Layout>
  )
}

export default Index;