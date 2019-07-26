import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

import { standardWrapper } from "../Utilities/"

const Wrapper = styled.div`
  ${standardWrapper}
`

const EpisodeVideoWrap = styled.div`
  width: 100%;
  margin: 0 auto;

  iframe {
    display: block;
    max-width: 100%;
    margin: auto;
  }
`

const episodepost = ({ data }) => {
  const { title, date, youtubeVideo } = data.contentfulEpisodes
  const youtubeVideoEmbed =
    data.contentfulEpisodes.youtubeVideoEmbed.content[0].content[0].value

  console.log(youtubeVideoEmbed)
  return (
    <Layout>
      <Wrapper>
        <EpisodeVideoWrap>
          <div dangerouslySetInnerHTML={{ __html: youtubeVideoEmbed }} />
        </EpisodeVideoWrap>
        <h2>{data.contentfulEpisodes.title}</h2>
      </Wrapper>
    </Layout>
  )
}

export default episodepost

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulEpisodes(slug: { eq: $slug }) {
      title
      slug
      date
      youtubeVideo
      catchphrase
      youtubeVideoEmbed {
        content {
          content {
            value
          }
        }
      }
      description {
        description
      }
      featuredImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
