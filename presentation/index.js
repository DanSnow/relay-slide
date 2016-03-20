// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from '../theme';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
  logo: require('../assets/logo.svg'),
  connect: require('../assets/connect.png')
};

preloader(images);

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade", "slide"]} transitionDuration={500}>
          <Slide>
            <Heading size={2} fit lineHeight={1}>
              Relay
            </Heading>
          </Slide>
          <Slide>
            <Image src={ images.logo } />
          </Slide>
          <Slide>
            <Image src={ images.connect } />
          </Slide>
          <Slide>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
