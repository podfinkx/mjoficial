/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx } from "theme-ui"

import useSiteMetadata from "./use-site-metadata"
import LandingSectionTitle from "./landing-section-title"
import ShowItem from "./show-item"

const ShowsV2 = ({ shows = [], locale = "es-VE" }) => {
  const { textLabels } = useSiteMetadata()
  const sectionTitle = textLabels.section_shows_title || "Eventos"

  return (
    <section id="shows" sx={{ variant: "layout.landingSection", paddingTop: 0 }}>
      <LandingSectionTitle>{sectionTitle}</LandingSectionTitle>
      <ol
        sx={{
          m: 0,
          p: 0,
          listStyle: "none",
        }}
      >
        {shows.length > 0 &&
          shows.map(node => {
            return <ShowItem {...node} key={node.id} locale={locale} />
          })}
      </ol>
      <div id="special-announcement" className="text-center">
        <h3>Proximamente!</h3>
      </div>
    </section>
  )
}

export default ShowsV2
