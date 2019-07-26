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

import { BigWrapper, colors, fontSizer } from "../Utilities/"

const IntroSection = styled.div`
  margin: 2rem auto;
  text-align: center;

  h2 {
    ${fontSizer(3, 6, 76.8, 150)}
    margin-bottom: 0;
    color: ${colors.colorSecondary};
    line-height: 1.25;
  }

  p {
    margin: 0;
  }

  p:first-of-type {
    ${fontSizer(2, 3, 76.8, 150)}
    margin-top: 0;
    margin-bottom: 2rem;
    color: ${colors.colorPrimary};
    text-transform: uppercase;
    line-height: 1.25;
  }
`

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
      max-height: 35rem !important;

      @media (min-width: 768px) {
        max-height: 100% !important;
      }
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
  margin-bottom: 7.5rem;

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
    color: ${colors.colorSecondary};
  }

  p {
    width: 100%;
    margin-bottom: 0;
    color: ${colors.colorSecondary};
  }
`

const SocialMediaContainer = styled.div`
  margin-top: 5rem;
  p {
    ${fontSizer(1.4, 2, 76.8, 150)}
    margin-bottom: 0;
  }

  a {
    margin-left: 0;
  }
`

const UrbanDictionary = styled.div`
  width: 100%;
  max-width: 65rem;
  margin: 0 auto 5rem;
  p {
    ${fontSizer(1.4, 2.2, 76.8, 150)}
  }
`

const IndexPage = props => {
  console.log(props.data.episodes.edges)
  const episodes = props.data.episodes.edges
  return (
    <Layout>
      <SEO title="Snackmaster Ben" />
      <Wrapper>
        <IntroSection>
          <h2>OMG! Shut the front door!</h2>
          <p>Om Nom!</p>
        </IntroSection>

        <AboutBen>
          <div className="food-profile-image">
            <ProfileFoodImage />
          </div>
          <div className="ben-profile-wrapper">
            <div className="ben-profile-image">
              <Image />
            </div>
            <p style={{ marginBottom: "0px", fontWeight: "bold" }}>
              About Snackmaster Ben...
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
            <SocialMediaContainer>
              <p>Come back often and see what we've Ben cookin</p>
              <p>Checkout my youtube channel</p>
              <YouTubeIcon />
            </SocialMediaContainer>
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
        <UrbanDictionary>
          <p>
            What is a snackmaster anyways? Well from the urban dictionary...
          </p>
          <p>
            Someone who has the perpetual munchies and rocks out the best snacks
            ever. Highly inventive and can make edible and delicious snacks out
            of the scraps in your barren cupboards. Have food? Prepare to be
            dazzled! Word of caution: the Snackmaster can and will eat you out
            of home if you pass out before him/her
          </p>
        </UrbanDictionary>
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
