import React from "react"
import { graphql, Link } from "gatsby"

export default function Index({ data }) {
  const edges = data.allMarkdownRemark.edges;
  return (
    <div>
      <h1>
        Yo... welcome
      </h1>
      <p>
        Imagine some pretty interface here.
      </p>
      <div>
        {edges.map(({ node }) => (
          <div>
            <h2>
              <Link to={node.frontmatter.path}>
                {node.frontmatter.title}
              </Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`
