import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { colors, fontSizer } from "../Utilities/"

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
    background: ${colors.colorPrimary};

    &:after {
      position: absolute;
      bottom: -10px;
      right: 20px;
      width: 20px;
      height: 20px;
      background: ${colors.colorPrimary};
      transform: rotate(45deg);
      content: "";
      z-index: 10;
    }

    &__1 {
      background: ${colors.colorSecondary};

      &:after {
        background: ${colors.colorSecondary};
      }
    }

    &__2 {
      background: ${colors.colorTertiary};

      &:after {
        background: ${colors.colorTertiary};
      }
    }

    &__3 {
      background: ${colors.colorAccent};

      &:after {
        background: ${colors.colorAccent};
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
        top: -4rem;
        left: -2rem;
        content: "“";
      }

      &::after {
        bottom: -6rem;
        right: -2rem;
        content: "”";
      }
    }
  }

  .image-section {
    position: relative;
    width: 100%;
    height: 250px;

    h3 {
      ${fontSizer(2, 3, 76.8, 110)}
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      color: #fff;
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
  return (
    <EpisodeWrapper>
      <Link to={`/episodes/${props.episode.slug}`}>
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
      </Link>
    </EpisodeWrapper>
  )
}

export default Episodes
