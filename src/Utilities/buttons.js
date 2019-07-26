import { colors } from "./index"
import { fonts, fontSizer } from "./index"

export const boxBtn = `
  display: inline-block;
  padding: 0.5em 1.5em;
  transition: all 0.3s ease;
  border: 0.1em solid ${colors.colorSecondary};
  color: ${colors.colorSecondary};
  font-family: ${fonts.fontSecondary};
  font-size: 2.2rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1025px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
  }

  @media (min-width: 1600px) {
    font-size: 2.2rem;
  }

  &:hover {
    border-color: ${colors.colorPrimary};
    color: ${colors.colorPrimary};
  }
`

export const paintBtn = `
  width: 100%;
  margin-top: 2rem;
  text-align: right;

  .paint-button-wrapper {
    position: relative;
    display: inline-block;
  }

  a {
    position: relative;
    display: inline-block;
    padding: 1.25rem 7rem 1.75rem 3rem;
    border: none;
    background: transparent;
    color: ${colors.white};
    font-family: ${fonts.fontPrimary};
    ${fontSizer(1.6, 1.8, 76.8, 110)}
    font-weight: 300;
    text-transform: uppercase;
    z-index: 100;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`
