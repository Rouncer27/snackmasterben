import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const EpisodeWrapper = styled.div`
  width: 100%;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 1px 1px #f3ffbd;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    width: calc(33.33% - 20px);
    margin: 10px;
  }

  &:hover {
    box-shadow: 7.5px 7.5px 7.5px 1px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .catchphrase-section {
    position: relative;
    padding: 100px 50px;
    background: #ff1654;

    &:after {
      position: absolute;
      bottom: -10px;
      right: 20px;
      width: 20px;
      height: 20px;
      background: #ff1654;
      transform: rotate(45deg);
      content: "";
      z-index: 10;
    }

    &__1 {
      background: #247ba0;

      &:after {
        background: #247ba0;
      }
    }

    &__2 {
      background: #b2dbbf;

      &:after {
        background: #b2dbbf;
      }
    }

    &__3 {
      background: #70c1b3;

      &:after {
        background: #70c1b3;
      }
    }

    p {
      position: relative;
      width: 100%;
      margin: 0;
      color: #fff;
      font-size: 22px;
      text-align: center;

      &::after,
      &::before {
        position: absolute;
        font-size: 75px;
        color: #fff;
        content: "”";
      }

      &::before {
        top: -10px;
        left: -20px;
        content: "“";
      }

      &::after {
        bottom: -30px;
        right: -20px;
        content: "”";
      }
    }
  }

  .image-section {
    position: relative;
    width: 100%;
    height: 250px;

    h3 {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      color: #fff;
      font-family: "Lato";
      z-index: 10;
    }

    &__featured {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`

const Episodes = props => {
  console.log(props.episode)
  return (
    <EpisodeWrapper>
      <div class={`catchphrase-section catchphrase-section__${props.index}`}>
        <p>{props.episode.catchphrase}</p>
      </div>
      <div className="image-section">
        <h3>{props.episode.title}</h3>
        <div className="image-section__featured">
          <Img
            fluid={props.episode.featuredImage.fluid}
            alt={props.episode.title}
          />
        </div>
      </div>
    </EpisodeWrapper>
  )
}

export default Episodes
