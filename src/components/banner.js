/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import PropTypes from "prop-types"
import { jsx, Container } from "theme-ui"

import useSiteMetadata from "./use-site-metadata"
import HeroImage from "./hero-image"
import Social from "./social"

let additionalStyles = {
  minHeight: '200px',
}
let bgOverlayStyles = {}

const BannerV2 = ({ children, bgOverlay, color }) => {
  const { bannerImg } = useSiteMetadata()

  if (color) {
    additionalStyles["color"] = color
  }

  if (bgOverlay) {
    bgOverlayStyles = {
      "&:after": {
        background: bgOverlay,
      },
    }
  }

  const bannerContentElement = (
    <Social />
  )

  return (
    <div
      className="GtmBanner"
      sx={{
        variant: "components.banner",
        ...additionalStyles,
        ...bgOverlayStyles,
      }}
    >
      {bannerImg ? (
        <HeroImage
          className="GtmBanner__hero-wrapper"
          fluid={bannerImg.fluid}
          sx={{ flexGrow: 0, display: 'contents' }}
        >
          <Container
            className="GtmBanner__content-wrapper abc"
            sx={{ flexGrow: 0 }}
            style={{ paddingTop: 40 }}
            >
            {children || bannerContentElement}
          </Container>
        </HeroImage>
      ) : (
        <Container
          className="GtmBanner__content-wrapper"
        >
          {children || bannerContentElement}
        </Container>
      )}
    </div>
  )
}

BannerV2.propTypes = {
  children: PropTypes.any,
  bgOverlay: PropTypes.string,
  color: PropTypes.string,
}

export default BannerV2
