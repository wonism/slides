// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Heading,
  Text,
  S,
  CodePane,
  List,
  ListItem,
  Image,
} from 'spectacle';
import Terminal from 'spectacle-terminal';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import hook from './hook.gif';
import magic from './magic.gif';
import hereWeGo from './here-we-go.gif';
import dive from './dive.gif';
import takeALook from './take-a-look.gif';

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
            Introduction to
          </Heading>
          <Heading size={1} fit caps bold lineHeight={1} textColor="tertiary">
            React Hooks
          </Heading>
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            Advantage of Hooks (Briefly)
          </Heading>
          <Image src={hook} alt="hook" style={imgStyle} />
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="quaternary">
          <Text textAlign="left">
            One of the
            <S type="bold" textColor="tertiary">
              &nbsp;key concept&nbsp;
            </S>
            of
            <S type="bold" textColor="tertiary">
              &nbsp;hooks&nbsp;
            </S>
            is that you can use state and other features of React
            <S type="bold" textColor="tertiary">
              &nbsp;without writing a Class
            </S>
            .
          </Text>
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            The background to the emergence of React hooks
          </Heading>
          <Image src={magic} alt="magic" style={imgStyle} />
        </Slide>
        <Slide transition={['zoom', 'fade']}>
          <Text textAlign="left">
            It was
            <S type="bold" textColor="tertiary">
              &nbsp;hard to reuse state logics&nbsp;
            </S>
            accross your application.
            We've dealt with this via using HOC or complex props.
            But, It is quite complex to maintain.
          </Text>
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Image src={hereWeGo} alt="here we go" style={imgStyle} />
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Terminal
            title="1. wonism@wonism: ~(bash)"
            output={[
              '$ npm i -S react@next react-dom@next',
              <div>
                <div>
                  '+ react@16.7.0-alpha.2'
                </div>
                <div>
                  '+ react-dom@16.7.0-alpha.2',
                </div>
                <div>
                  'added 7 packages from 3 contributors and audited 24 packages in 1.402s',
                </div>
                <div>
                  'found 0 vulnerabilities',
                </div>
              </div>
            ]}
          />
        </Slide>
        <Slide transition={['zoom', 'fade']}>
          <Heading size={4} textColor="tertiary">
            useState
          </Heading>
          <Text textAlign="left">
            <S type="bold" textColor="tertiary">
              useState
            </S>
            &nbsp;is used to mutate Component's state.
          </Text>
          <iframe
            height="300"
            scrolling="no"
            title="Counter App with React hooks"
            src="//codepen.io/wonism/embed/ebexYX/?height=300&theme-id=dark&default-tab=js,result"
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
            style={{ width: '100%' }}
          >
            See the Pen
            &nbsp;
            <a href='https://codepen.io/wonism/pen/ebexYX/'>Counter App with React hooks</a>
            &nbsp;by Jaewon (
            <a href='https://codepen.io/wonism'>@wonism</a>
            ) on&nbsp;
            <a href='https://codepen.io'>CodePen</a>
            .
          </iframe>
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            Let's deep dive into the codes!
          </Heading>
          <Image src={dive} alt="dive" style={imgStyle} />
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <CodePane
            style={{ fontSize: '1.5rem' }}
            lang="javascript"
            source={`const [num, setNum] = React.useState(0);
// The result of useState is array. So, We destructured it.
// First value is the current state(like this.state).
// And the other one is the function that is used to update the state value(like this.setState).
const addOne = () => { setNum(num + 1); };
const subOne = () => { setNum(num - 1); };
// With setNumber, we created 2 functions to increase/decrease the state value.
// These are used as event handlers.`}
          />
        </Slide>
        <Slide transition={['zoom', 'fade']}>
          <Text textAlign="left">
            As you see this code,
            <S type="bold" textColor="tertiary">
              &nbsp;useState&nbsp;
            </S>
            declare a state variable.
            And the parameter is passed to useState can be initialized as an
            <S type="bold" textColor="tertiary">
              &nbsp;initial value
            </S>
            .
          </Text>
          <Text textAlign="left">
            You can also use multiple useState.
            But, You should notice that
            <S type="bold" textColor="tertiary">
              &nbsp;hooks must be called at the top level of component.
            </S>
          </Text>
        </Slide>
        <Slide transition={['zoom', 'fade']}>
          <Heading size={4} textColor="tertiary">
            useEffect
          </Heading>
          <Text textAlign="left">
            <S type="bold" textColor="tertiary">
              useEffect
            </S>
            &nbsp;is used to handle side effects.
          </Text>
          <List>
            <Text>
              With this, You can
            </Text>
            <ListItem style={{ fontSize: '1.5rem' }}>
              Call APIs
            </ListItem>
            <ListItem style={{ fontSize: '1.5rem' }}>
              Subscribe events
            </ListItem>
            <ListItem style={{ fontSize: '1.5rem' }}>
              Access client storage
            </ListItem>
            <ListItem style={{ fontSize: '1.5rem' }}>
              etc.
            </ListItem>
          </List>
          <iframe
            height="300"
            scrolling="no"
            title="Side effects with React hooks (de-optimized)"
            src="//codepen.io/wonism/embed/GPOzGQ/?height=300&theme-id=dark&default-tab=js,result"
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
            style={{ width: '100%' }}
          >
            See the Pen
            &nbsp;
            <a href='https://codepen.io/wonism/pen/GPOzGQ/'>Side effects with React hooks (de-optimized)</a>
            &nbsp;by Jaewon (
            <a href='https://codepen.io/wonism'>@wonism</a>
            ) on&nbsp;
            <a href='https://codepen.io'>CodePen</a>
            .
          </iframe>
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            let's take a look at useEffect!
          </Heading>
          <Image src={takeALook} alt="take a look" style={imgStyle} />
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <CodePane
            style={{ fontSize: '1.5rem' }}
            lang="javascript"
            source={`// To perform side effect, we should pass a function as the first argument to useEffect.
// async function can not be passed. If you want to use it, you need to wrap the async function.
React.useEffect(() => {
  fetch('https://swapi.co/api/people/1/')
    .then(response => response.json())
    .then((data) => { setUser(data); });
}, [num]);
// second argument is used to skipping useEffect.
// Currently, when num is changed, useless request will be sent.
// If you want to skipping useEffect, you can pass [] instead of [num]
`}
          />
        </Slide>
        <Slide transition={['zoom', 'fade']}>
          <Text textAlign="left">
            It's so easy to handle side effect.
            But, You should notice that
            <S type="bold" textColor="tertiary">
              &nbsp;useEffect will be called on every render phase if it is not optimized.
            </S>
          </Text>
        </Slide>
        <Slide transition={['zoom', 'fade']}>
          <Heading size={4} textColor="tertiary">
            References
          </Heading>
          <List>
            <Text>
              ReactJS Document
            </Text>
            <ListItem style={{ fontSize: '1.5rem' }}>
              ReactJS Document : https://reactjs.org/
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
