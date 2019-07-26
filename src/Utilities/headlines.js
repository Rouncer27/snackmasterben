import { colors } from "./index"
import { fonts, fontSizer } from "./index"

export const titleMain = `
  ${fontSizer(2.2, 5.5, 76.8, 160)}
  font-family: ${fonts.fontSecondary};
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.36;
  letter-spacing: normal;
`

export const titleMainFunc = color => {
  return `
    ${fontSizer(2.2, 5.5, 76.8, 160)}
    color: ${color}
    font-family: ${fonts.fontSecondary};
    font-style: normal;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1.36;
    letter-spacing: normal;
  `
}

export const titleMainBlue = `
  ${titleMain}
  color: ${colors.colorPrimary};
`

export const titleMainGreen = `
  ${titleMain}
  color: ${colors.colorSecondary};
`

export const titleSmall = `
  ${fontSizer(2, 4.5, 76.8, 160)}
  font-family: ${fonts.fontSecondary};
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.36;
  letter-spacing: normal;
`

export const titleSmallBlue = `
  ${titleSmall}
  color: ${colors.colorPrimary};
`

export const titleScript = `
  ${fontSizer(2.2, 5.5, 76.8, 160)}
  font-family: ${fonts.fontTertiary};
  font-weight: 300;
  line-height: 1.36;
  letter-spacing: normal;
`

export const titleScriptBlue = `
  ${titleScript}
  color: ${colors.colorPrimary};
`

export const titleH3 = `
  color: ${colors.colorPrimary};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  ${fontSizer(2.2, 3, 76.8, 160)}
`
