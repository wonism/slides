// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Heading,
  Text,
  S,
  BlockQuote,
  Quote,
  Cite,
  CodePane,
  List,
  ListItem,
  Image,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import firstOfAll from './first-of-all.gif';
import soWhat from './so-what.gif';
import next from './next.gif';
import reduxDataFlow from './redux-data-flow.gif';
import deep from './deep.gif';
import letsgo from './letsgo.gif';
import thatsAll from './thats-all.gif';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#fff',
    secondary: '#222',
    tertiary: '#3b9cff',
    quaternary: '#ddd',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const imgStyle = {
  width: '40vw',
  height: 'auto',
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} bold lineHeight={1} textColor="secondary">
            How to make
          </Heading>
          <Heading size={1} fit caps bold lineHeight={1} textColor="tertiary">
            Redux Middleware?
          </Heading>
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Image src={firstOfAll} alt="first of all" style={imgStyle} />
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading size={2} textColor="secondary">
            What is
            <S type="bold" textColor="tertiary">
              &nbsp;Redux
            </S>
            ?
          </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="quaternary">
          <Heading size={6} textColor="secondary" textAlign="left">
            According to
            <br />
            <S type="italic" bold textColor="tertiary">
              Redux Documentation:
            </S>
          </Heading>
          <BlockQuote>
            <Quote textColor="secondary">
              Redux is a predictable state container for JavaScript apps.
            </Quote>
            <Cite textColor="primary" bold textAlign="right">
              redux.js.org
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            So why we use Redux?
          </Heading>
          <Image src={soWhat} alt="so what" style={imgStyle} />
        </Slide>
        <Slide transition={['zoom', 'fade']}>
          <Text textAlign="left">
            Redux provides an object that manages the state for your web application.
            <br />
            It contains data from your Back-end API, User's information, Inputted text, and so on.
            <br />
            <br />
          </Text>
          <Text bold textColor="tertiary" textAlign="left">
            It means Redux can diagnose bottlenecks, asynchronous issues or errors easily.
          </Text>
          <Text textAlign="left">
            (Also, Redux makes state changes predictable and transparent.)
          </Text>
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Image src={next} alt="next" style={imgStyle} />
        </Slide>
        <Slide transition={['zoom', 'fade']}>
          <Heading size={4} textColor="tertiary">
            Redux Middleware
          </Heading>
          <Text textAlign="left">
            Between dispatching an action and the action is dispatched to the reducer, Redux provides a third-party extension point.
            <br />
            <br />
            With this third-party, developer can log something, request to API, and so one.
          </Text>
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            Data flow of Redux
            <br />
          </Heading>
          <Image src={reduxDataFlow} alt="redux data flow" style={imgStyle} />
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Image src={deep} alt="deep" style={imgStyle} />
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Heading fit size={4} textColor="primary">
            Appearance of applyMiddleware
            <br />
            of Redux
          </Heading>
          <CodePane
            style={{ fontSize: '1.5rem' }}
            lang="javascript"
            source={`export default function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    // ...

    // As you see, Redux Middlewares will be run sequentially.
    const chain = middlewares.map(middleware => middleware({
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }))
    dispatch = compose(...chain)(store.dispatch)

    // Then, Store will be returned finally.
    return {
      ...store,
      dispatch
    }
  }
}`}
          />
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            Let's make a Middleware!
          </Heading>
          <Image src={letsgo} alt="let's go" style={imgStyle} />
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            Simple Logger for Redux
          </Heading>
          <CodePane
            style={{ fontSize: '1.5rem' }}
            lang="javascript"
            source={`function middleware(store) { // Most of case, you don't need store
  return function wrapDispatchToAddMiddleware(next) {
    return function dispatchAndDoSomething(action) {
      console.group(action.type); console.info('dispatching', action);

      const isHookable = !action.type.match(/^PRE_/);
      // (If you call store.dispatch in middleware instead of next,
      // The action will travel the whole middleware chain again.)
      if (isHookable) store.dispatch({ type: 'PRE_' + action.type });

      const result = next(action);

      // Will get state via calling store.getState
      const state = store.getState();
      console.log('next state', state); console.groupEnd();

      return result;
    };
  };
}`}
          />
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Image src={thatsAll} alt="that is all" style={imgStyle} />
        </Slide>
        <Slide transition={['zoom', 'fade']}>
          <Text textAlign="left">
            As you see the codes,
            <br />
            <br />
          </Text>
          <Text textAlign="left">
            Developer can
            <S type="bold" textColor="tertiary">
              &nbsp;dispatch&nbsp;
            </S>
            another action or get
            <S type="bold" textColor="tertiary">
              &nbsp;state&nbsp;
            </S>
            from redux with store parameter,
          </Text>
        </Slide>
        <Slide transition={['zoom', 'fade']}>
          <Heading size={4} textColor="tertiary">
            References
          </Heading>
          <List>
            <Text>
              Redux Document
            </Text>
            <ListItem style={{ fontSize: '1.5rem' }}>
              Redux Document : https://redux.js.org/
            </ListItem>
            <br />
            <Text>
              Image sources
            </Text>
            <ListItem style={{ fontSize: '1.5rem' }}>
              Redux data flow : https://kuanhsuh.github.io/
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
