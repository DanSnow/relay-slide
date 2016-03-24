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
  connect: require('../assets/connect.png'),
  relay: require('../assets/relay.png'),
  list: require('../assets/list.png')
};

preloader(images);

const theme = createTheme();

const listCode = `class RecordList extends Component {
  render() {
    let { list } = this.props;
    return (
      <div>
        <h3> Total count: { list.count } </h3>
        <ul>
          {
            list.records.map((record) => {
              return (
                <li key={ record.id }>
                  <Link to={\`/\${record.id}\`}>
                    <span> {record.name} </span>
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    )
  }
}`

const containerCode = `RecordList = Relay.createContainer(RecordList, {
  fragments: {
    list: () => Relay.QL\`
      fragment on RecordList {
        count,
        records {
          id,
          name
        }
      }
    \`
  }
});`

const queryCode = `export const RecordsQuery = {
  list: (Component) => Relay.QL\`
    query {
      recordList {
        \${Component.getFragment('list')}
      }
    }
  \`
}`

const relayContainerCode = `<Relay.RootContainer
  Component={ Component }
  renderFetched={ (data) => <Component { ...props }  { ...data } /> }
  route={ { name, params, queries } }
/>`

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
            <Text>A JAVASCRIPT FRAMEWORK FOR BUILDING DATA-DRIVEN REACT APPLICATIONS</Text>
          </Slide>
          <Slide>
            <Image src={ images.connect } />
          </Slide>
          <Slide>
            <Image src={ images.relay } />
          </Slide>
          <Slide>
            <CodePane lang="jsx" source={ listCode } />
          </Slide>
          <Slide>
            <Image src={ images.list } />
          </Slide>
          <Slide>
            <CodePane lang="jsx" source={ containerCode } />
          </Slide>
          <Slide>
            <CodePane lang="jsx" source={ queryCode } />
          </Slide>
          <Slide>
            <CodePane lang="jsx" source={ relayContainerCode } />
          </Slide>
          <Slide>
            <Heading size={2}>
              Live Demo
            </Heading>
          </Slide>
          <Slide>
            <Heading size={3}>
              References:
            </Heading>
            <List>
              <ListItem>
                <Link>https://facebook.github.io/relay/</Link>
              </ListItem>
              <ListItem>
                <Link>https://medium.com/@clayallsopp/relay-101-building-a-hacker-news-client-bb8b2bdc76e6#.735ck82y3</Link>
              </ListItem>
              <ListItem>
                <Link>https://medium.com/@cpojer/relay-and-routing-36b5439bad9</Link>
              </ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
