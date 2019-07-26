import * as secondary from "../../../fonts/secondary"

const SecondaryFonts = `
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 300;
  src: local('Ubuntu Light'), local('Ubuntu-Light'),
  url('${secondary.WOFF2_3}') format("woff2"),
  url('${secondary.WOFF_3}') format("woff");
}

@font-face {
  font-family: 'Ubuntu';
  font-style: italic;
  font-weight: 300;
  src: local('Ubuntu Light Italic'), local('Ubuntu-LightItalic'),
  url('${secondary.IWOFF2_3}') format("woff2"),
  url('${secondary.IWOFF_3}') format("woff");
}

@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  src: local('Ubuntu Regular'), local('Ubuntu-Regular'),
  url('${secondary.WOFF2_4}') format("woff2"),
  url('${secondary.WOFF_4}') format("woff");
}

@font-face {
  font-family: 'Ubuntu';
  font-style: italic;
  font-weight: 400;
  src: local('Ubuntu Italic'), local('Ubuntu-Italic'),
  url('${secondary.IWOFF2_4}') format("woff2"),
  url('${secondary.IWOFF_4}') format("woff");
}

@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  src: local('Ubuntu Medium'), local('Ubuntu-Medium'),
  url('${secondary.WOFF2_5}') format("woff2"),
  url('${secondary.WOFF_5}') format("woff");
}

@font-face {
  font-family: 'Ubuntu';
  font-style: italic;
  font-weight: 500;
  src: local('Ubuntu Medium Italic'), local('Ubuntu-MediumItalic'),
  url('${secondary.IWOFF2_5}') format("woff2"),
  url('${secondary.IWOFF_5}') format("woff");
}

@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  src: local('Ubuntu Bold'), local('Ubuntu-Bold'),
  url('${secondary.WOFF2_7}') format("woff2"),
  url('${secondary.WOFF_7}') format("woff");
}

@font-face {
  font-family: 'Ubuntu';
  font-style: italic;
  font-weight: 700;
  src: local('Ubuntu Bold Italic'), local('Ubuntu-BoldItalic'),
  url('${secondary.IWOFF_7}') format("woff2"),
  url('${secondary.IWOFF2_7}') format("woff");
}
`

export default SecondaryFonts
