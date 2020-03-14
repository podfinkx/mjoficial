/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Styled, jsx } from "theme-ui"
import Footer from "gatsby-theme-musician/src/components/footer" // eslint-disable-line

import useSiteMetadata from "gatsby-theme-musician/src/use-site-metadata"
import Social from "gatsby-theme-musician/src/components/social"

export default ({ children }) => {
  const { title, social } = useSiteMetadata()

  let hasSocial = false
  if (social.length) {
    if (typeof social[0].name !== "undefined") {
      if (social[0].name.length) {
        hasSocial = true
      }
    }
  }

  return (
    <footer role="contentinfo" sx={{ variant: "layout.footer" }}>
      {hasSocial && (
        <>
          <strong
            className="GtmFooter__social-heading"
            sx={{ variant: "styles.caps" }}
          >
            Sigueme &amp; Suscribete
          </strong>
          <div className="GtmFooter__social-wrapper">
            <Social />
          </div>
        </>
      )}
      <hr sx={{ variant: "layout.footer.hr" }} />
      {children ? (
        <div sx={{ variant: "layout.footer.copyright" }}>{children}</div>
      ) : (
        <small sx={{ variant: "layout.footer.copyright" }}>
          Copyright © {new Date().getFullYear()} {title}. Todos los derechos reservados.
          <br />
          Desarrollador web{" "}
          <Styled.a href="https://instagram.com/podfinkx" rel="external nofollow">
            @podfinkx
          </Styled.a>{" "}
          <br />
          Creado con{" "}
          <Styled.a href="https://gatsbyjs.org" rel="external nofollow">
            Gatsby
          </Styled.a>{" "}
          y{" "}
          <Styled.a
            href="https://www.npmjs.com/package/gatsby-theme-musician"
            rel="external nofollow"
          >
            gatsby-theme-musician
          </Styled.a>
          .
        </small>
      )}
    </footer>
  )
}
