export const fontPrimary = "Lato"
export const fontSecondary = "Ubuntu"
export const fontTertiary = "Shadows Into Light"
export const fontAwesome = "FontAwesome"

export const fontSizer = (
  minFont = 1.8,
  maxFont = 2.2,
  minScreen = 76.8,
  maxScreen = 110
) => {
  return `
  font-size: calc(${minFont} * 1rem);

  @media (min-width: calc(${minScreen} * 10px)) {
    font-size: calc(
      (${minFont} * 1rem) + (${maxFont} - ${minFont}) *
        (((100vw - (${minScreen} * 1rem))) / (${maxScreen} - ${minScreen}))
    );
  }

  @media (min-width: calc(${maxScreen} * 10px)) {
    font-size: calc(${maxFont} * 1rem);
  }
  `
}

export default {
  fontPrimary,
  fontSecondary,
  fontTertiary,
  fontAwesome,
}
