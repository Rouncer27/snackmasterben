import { colors } from "./index"
import { fonts } from "./index"

export const labelSmall = `
  display: block;
  width: 100%;
  color: ${colors.black};
  font-family: ${fonts.fontPrimary};
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.33;
  letter-spacing: 1.4px;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1025px) {
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
  }

  @media (min-width: 1600px) {
    font-size: 2.8rem;
  }
`

export const smallInput = `
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: solid 1px #707070;
  background-color: #ffffff;
  color: ${colors.black};
  font-family: ${fonts.fontPrimary};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem ${colors.colorSecondary};
  }
`