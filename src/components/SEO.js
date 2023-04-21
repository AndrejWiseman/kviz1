import React from 'react'
// import { Helmet } from 'react-helmet'
// import { useStaticQuery, graphql } from 'gatsby'
import { graphql } from 'gatsby'


const query = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`


const SEO = ({ title, description, children }) => {

    const seo = {
        title: title,
        description: description,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="google-site-verification" content="4Q3YiXMUj6TdUiPcWPiSxAGHhjj6qg-7nS9TpWgEdvE" />
            { children }
        </>
    )


}

export default SEO





// const SEO = ({ title, description }) => {

//     const {site} = useStaticQuery(query)
//     const metaDescription = description || site.siteMetadata.description

//     return (
//         <Helmet
//             htmlAttributes={{ lang:"sr" }}
//             title={`${title} | ${site.siteMetadata.title}`}
//             meta={[{name:`description`, content: metaDescription }]}
            
//         >

//         </Helmet>
//     )
// }



// export default SEO