import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout.js'

const Blog = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
    return (
        <Layout>
            <h1>This is the blog page.</h1>
            <ol>
                {data.allContentfulBlogPost.edges.map(edge => {
                return (
                <li>
                    <Link to={`/blog/${edge.node.slug}`}>
                        <h2>{edge.node.title}</h2>
                        <p>Published {edge.node.publishedDate}</p>
                    </Link>
                </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Blog;