import * as primary from "../../../fonts/primary"

const PrimaryFonts = `
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 100;
  src: local('Lato Hairline'), local('Lato-Hairline'),
    url('${primary.WOFF2_1}') format("woff2"),
    url('${primary.WOFF_1}') format("woff");
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 100;
  src: local('Lato Hairline Italic'), local('Lato-HairlineItalic'),
    url('${primary.IWOFF2_1}') format("woff2"),
    url('${primary.IWOFF_1}') format("woff");
}


@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  src: local('Lato Light'), local('Lato-Light'),
    url('${primary.WOFF2_3}') format("woff2"),
    url('${primary.WOFF_3}') format("woff");
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 300;
  src: local('Lato Light Italic'), local('Lato-LightItalic'),
    url('${primary.IWOFF2_3}') format("woff2"),
    url('${primary.IWOFF_3}') format("woff");
}


@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'),
    url('${primary.WOFF2_4}') format("woff2"),
    url('${primary.WOFF_4}') format("woff");
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  src: local('Lato Italic'), local('Lato-Italic'),
    url('${primary.IWOFF2_4}') format("woff2"),
    url('${primary.IWOFF_4}') format("woff");
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: local('Lato Bold'), local('Lato-Bold'),
    url('${primary.WOFF2_7}') format("woff2"),
    url('${primary.WOFF_7}') format("woff");
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 700;
  src: local('Lato Bold Italic'), local('Lato-BoldItalic'),
    url('${primary.IWOFF2_7}') format("woff2"),
    url('${primary.IWOFF_7}') format("woff");
}


@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  src: local('Lato Black'), local('Lato-Black'),
    url('${primary.WOFF2_9}') format("woff2"),
    url('${primary.WOFF_9}') format("woff");
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 900;
  src: local('Lato Black Italic'), local('Lato-BlackItalic'),
    url('${primary.IWOFF2_9}') format("woff2"),
    url('${primary.IWOFF_9}') format("woff");
}

`

export default PrimaryFonts
