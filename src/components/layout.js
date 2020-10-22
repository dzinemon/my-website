/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Helmet } from "react-helmet"

import Header from "./header"
import Hero from "./hero"
import Services from "./services"
import OtherServices from "./other-services"
import Contact from "./contact"

import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata?.title || `Title`}</title>
          <meta 
            name="description" 
            content="I am Andrii web developer from Ukraine, welcome to my website"></meta>
          <link rel="canonical" href="https://andrii-on.netlify.app/" />
        </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Hero />
      <Services />
      <OtherServices />
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      > */}
        {/* <main>{children}</main> */}
        <Contact />
        <Footer />
      {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
