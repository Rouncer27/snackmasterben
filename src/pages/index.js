import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import ProfileFoodImage from "../components/ProfileFoodImage"
import SEO from "../components/seo"
import Episodes from "../components/Episodes"
import YouTubeIcon from "../components/YouTubeIcon"

import { BigWrapper, colors } from "../Utilities/"

const Wrapper = styled.div`
  ${BigWrapper}
`

const AboutBen = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;

  .food-profile-image {
    width: 100%;
    max-width: 100%;

    @media (min-width: 768px) {
      width: calc(50% - 5rem);
      margin-right: 5rem;
    }

    .gatsby-image-wrapper {
      max-width: 100% !important;
    }
  }
  .ben-profile-wrapper {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50% - 10rem);
      margin-left: 5rem;
      margin-right: 5rem;
    }
  }
  .ben-profile-image {
    max-width: 12.5rem;
    margin: 2.5rem auto 2.5rem 0;
    border-radius: 50%;
    overflow: hidden;
  }
`

const EpisodesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  .single-episode:nth-of-type(4n + 1) {
    .catchphrase-section {
      background: ${colors.colorSecondary};

      &:after {
        background: ${colors.colorSecondary};
      }
    }
  }

  .single-episode:nth-of-type(4n + 2) {
    .catchphrase-section {
      background: ${colors.colorTertiary};

      &:after {
        background: ${colors.colorTertiary};
      }
    }
  }

  .single-episode:nth-of-type(4n + 3) {
    .catchphrase-section {
      background: ${colors.colorAccent};

      &:after {
        background: ${colors.colorAccent};
      }
    }
  }

  .single-episode:nth-of-type(4n + 4) {
    .catchphrase-section {
      background: ${colors.colorPrimary};

      &:after {
        background: ${colors.colorPrimary};
      }
    }
  }
`

const EpisodeTitle = styled.div`
  width: 100%;
  padding: 5rem 0;
  text-align: center;

  h2 {
    width: 100%;
    margin-bottom: 0;
  }
`

const IndexPage = props => {
  console.log(props.data.episodes.edges)
  const episodes = props.data.episodes.edges
  return (
    <Layout>
      <SEO title="Snack Master Ben" />
      <Wrapper>
        <div
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "25px",
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          <h1>OMG! Shut the front door!</h1>
          <h3>This website is still being cooked.</h3>
          <p>Om Nom!</p>
          <p>Come back soon and see what we've Ben cookin</p>
          <p>In the mean time checkout my youtube channel</p>
          <YouTubeIcon />
        </div>

        <AboutBen>
          <div className="food-profile-image">
            <ProfileFoodImage />
          </div>
          <div className="ben-profile-wrapper">
            <div className="ben-profile-image">
              <Image />
            </div>
            <p style={{ marginBottom: "0px", fontWeight: "bold" }}>
              About Snack Master Ben...
            </p>
            <p
              style={{
                marginBottom: "0px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Just an old dude that loves to cook for folks, has lots of fun and
              wants to share recipes and stories with others. Hope you enjoy the
              food and the stories. Low production value but good food and fun.
              Eat well, tell stories...be kind.
            </p>
            <p
              style={{
                marginTop: "15px",
                marginBottom: "0px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              With this website I want to create a community and home base for
              the fans of the Om Nom.
            </p>
          </div>
        </AboutBen>

        <EpisodesWrapper>
          <EpisodeTitle>
            <h2>Come for the fun, stay for the food.</h2>
            <p>Watch the latest episodes and adventures of the Snackmaster.</p>
          </EpisodeTitle>
          {episodes.map((episode, index) => {
            return (
              <Episodes
                key={episode.node.contentful_id}
                episode={episode.node}
                index={index}
              />
            )
          })}
        </EpisodesWrapper>
      </Wrapper>
    </Layout>
  )
}

export const getTours = graphql`
  query {
    episodes: allContentfulEpisodes {
      edges {
        node {
          contentful_id
          title
          date
          slug
          featuredImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          description {
            description
          }
          youtubeVideoEmbed {
            youtubeVideoEmbed
          }
          youtubeVideo
          catchphrase
        }
      }
    }
  }
`

export default IndexPage
