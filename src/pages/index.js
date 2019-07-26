import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Episodes from "../components/Episodes"

const EpisodesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

const EpisodeTitle = styled.div`
  width: 100%;

  h2 {
    width: 100%;
  }
`

const IndexPage = props => {
  console.log(props.data.episodes.edges)
  const episodes = props.data.episodes.edges
  return (
    <Layout>
      <SEO title="Snack Master Ben" />
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            marginBottom: "0px",
            fontWeight: "bold",
            fontSize: "22px",
            color: "#bada55",
          }}
          href="https://www.youtube.com/channel/UCDnu7ZmLZUHSNQtyI6XCX-A"
        >
          In the mean time checkout my youtube channel
        </a>
      </div>

      <div style={{ marginTop: "25px", marginBottom: "25px" }}>
        <div
          style={{
            maxWidth: "125px",
            marginRight: "auto",
            marginLeft: "0",
            marginTop: "25px",
            marginBottom: "25px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image />
        </div>
        <p style={{ marginBottom: "0px", fontWeight: "bold" }}>
          About Snack Master Ben...
        </p>
        <p
          style={{ marginBottom: "0px", fontWeight: "bold", fontSize: "14px" }}
        >
          Just an old dude that loves to cook for folks, has lots of fun and
          wants to share recipes and stories with others. Hope you enjoy the
          food and the stories. Low production value but good food and fun. Eat
          well, tell stories...be kind.
        </p>
        <p
          style={{
            marginTop: "15px",
            marginBottom: "0px",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          With this website I want to create a community and home base for the
          fans of the Om Nom.
        </p>
      </div>
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
          featuredImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          description {
            description
          }
          youtubeVideo
          catchphrase
        }
      }
    }
  }
`

export default IndexPage
