/** @jsx jsx */
/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Styled, jsx } from "theme-ui"

const ShowItemV2 = ({ id, name, date, location, info_url, map_url, locale }) => {
  const utcDate = `${date}T00:00:00`

  return (
    <li key={id} className="GtmShowItem" sx={{ variant: "components.show" }}>
      <time
        dateTime={date}
        aria-label={new Date(utcDate).toLocaleDateString(locale, {
          day: "numeric",
          month: "long",
          year: "numeric",
          timeZone: 'UTC',
        })}
        className="GtmShowItem__date"
        sx={{ variant: "components.show.date" }}
      >
        <span
          className="GtmShowItem__month"
          sx={{ variant: "components.show.date.month" }}
        >
          {" "}
          {new Date(utcDate).toLocaleDateString(locale, {
            month: "short",
            timeZone: 'UTC',
          })}{" "}
        </span>
        <span
          className="GtmShowItem__day"
          sx={{ variant: "components.show.date.day" }}
        >
          {new Date(utcDate).toLocaleDateString(locale, {
            day: "numeric",
            timeZone: 'UTC',
          })}
        </span>
      </time>
      <div sx={{ variant: "components.show.colWrapper" }}>
        <div sx={{ variant: "components.show.desc" }}>
          <Styled.h4
            className="GtmShowItem__title"
            sx={{
              m: 0,
              pt: [0, 2],
              pb: [1, 2],
            }}
          >
            {name}
          </Styled.h4>
          <div sx={{ variant: "textStyles.itemSubheading" }}>
            {location}
            {map_url && (
              <>
                {" "}
                &middot;{" "}
                <Styled.a href={map_url} rel="external nofollow" target="__blank">
                  <strong>Map</strong>
                </Styled.a>
              </>
            )}
          </div>
        </div>
        <div sx={{ variant: "components.show.rsvpLink" }}>
          {info_url ? (
            <a
              href={info_url}
              rel="external nofollow"
              sx={{ variant: "textStyles.button" }}
              target="__blank"
            >
              Detalles
            </a>
          ) : (
            <small
              sx={{
                color: "muted",
              }}
            >
              Sin detalles
            </small>
          )}
        </div>
      </div>
    </li>
  )
}

export default ShowItemV2
