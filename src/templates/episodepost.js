import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"

import { standardWrapper, fontSizer, colors } from "../Utilities/"

const EpisodeHero = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;

  @media (min-width: 786px) {
    height: 50rem;
  }

  @media (min-width: 1025px) {
    height: 60rem;
  }

  .hero-img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
  }

  .hero-title-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    padding: 0 4rem;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 10;

    h2 {
      ${fontSizer(3, 10, 76.8, 160)}
      color: #fff;
    }
  }

  .hero-overlay-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;
  }
`

const Wrapper = styled.div`
  ${standardWrapper}
  margin-top: 0;
  padding-top: 0;
`

const EpisodeVideoWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 5rem 0;
  background: rgba(112, 193, 179, 0.5);

  iframe {
    display: block;
    max-width: 100%;
    margin: auto;
  }
`

const EpisodeDescription = styled.div`
  width: 100%;
  margin: 5rem auto;

  p {
    ${fontSizer(1.8, 2.4, 76.8, 160)}
  }
`

const GoHomeButton = styled.div`
  margin: 0 auto 5rem;

  a {
    ${fontSizer(1.4, 2, 76.8, 160)}
    display: inline-block;
    padding: 1rem 4rem;
    border: 0.1rem solid ${colors.colorSecondary};
    border-radius: 0.25rem;
    color: ${colors.black};

    &:hover {
      background: ${colors.colorPrimary};
      border-color: ${colors.colorPrimary};
      color: ${colors.white};
    }
  }
`

const episodepost = ({ data }) => {
  const {
    title,
    date,
    featuredImage,
    description: { description },
  } = data.episode
  const youtubeVideoEmbed =
    data.episode.youtubeVideoEmbed.content[0].content[0].value
  return (
    <Layout>
      <EpisodeHero>
        <div className="hero-img-wrapper">
          <Img fluid={featuredImage.fluid} alt={title} />
        </div>
        <div className="hero-title-wrapper">
          <h2>{title}</h2>
        </div>
        <div className="hero-overlay-wrapper" />
      </EpisodeHero>

      <EpisodeVideoWrap>
        <div dangerouslySetInnerHTML={{ __html: youtubeVideoEmbed }} />
      </EpisodeVideoWrap>
      <Wrapper>
        <EpisodeDescription>
          <p>{date}</p>
          <p>{description}</p>
        </EpisodeDescription>
        <GoHomeButton>
          <Link to="/">Its thyme to go home.</Link>
        </GoHomeButton>
      </Wrapper>
    </Layout>
  )
}

export default episodepost

export const pageQuery = graphql`
  query($slug: String!) {
    episode: contentfulEpisodes(slug: { eq: $slug }) {
      title
      slug
      date(formatString: "dddd MMMM Do, YYYY")
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
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
