import { colors } from "./index"
import { fonts, fontSizer } from "./index"

export const mainPara = `
  ${fontSizer(1.8, 2, 76.8, 160)}
  color: ${colors.black};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  line-height: 1.33;
  letter-spacing: 1.4px;  
`

export const bigPara = `
  ${mainPara}  
  ${fontSizer(2, 2.2, 76.8, 160)}
  line-height: 1.33;
  letter-spacing: 1.42px;
`

export const striptPara = `
  ${fontSizer(2, 2.8, 76.8, 160)}
  font-family: ${fonts.fontTertiary};  
  font-weight: 300;
  line-height: 1.33;
  letter-spacing: 2.12px;
`
