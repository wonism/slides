// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Heading,
  S,
  Text,
  List,
  ListItem,
  Image,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import serverRenderingTti from './server-rendering-tti.png';
import staticRenderingTti from './static-rendering-tti.png';

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
          <Heading size={1} fit bold lineHeight={1} textColor="secondary">
            Server Rendering
          </Heading>
          <Heading size={3} caps bold lineHeight={1} textColor="tertiary">
            VS
          </Heading>
          <Heading size={1} fit bold lineHeight={1} textColor="secondary">
            Static Rendering
          </Heading>
        </Slide>
        {/* 로직과 렌더를 애플리케이션의 어디에서 처리할지 결정하는 일에 도움을 주기 위한 주제입니다.  */}

        {/* 먼저, 서버렌더링은 사용자의 매 요청마다 HTML을 생성합니다. */}
        {/* 데이터 페칭, 템플릿팅 과정 등이 서버에서 수행됩니다. */}
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary" textAlign="left">
            Server Rendering의 장점
          </Heading>
          <br />
          <List>
            <ListItem>
              <S type="bold" textColor="tertiary">
                FP
                {/* FP: 픽셀이 처음으로 사용자에게 보여지는 시기 */}
              </S>
              (First Paint) 🐇
            </ListItem>
            <ListItem>
              <S type="bold" textColor="tertiary">
                FCP
                {/* FCP: 콘텐츠가 처음으로 사용자에게 보여지는 시기 */}
              </S>
              (First Contentful Paint) 🐇
            </ListItem>
            <ListItem>
              <S type="bold" textColor="tertiary">
                TTI
                {/* TTI: 콘텐츠가 렌더링된 뒤, 유저가 페이지와 인터랙션할 수 있는 데 걸리는 시간 */}
              </S>
              (Time to Interactive) 🐇
              {/* 서버에서 큰 자바스크립트 파일을 전달할 필요도 없기 때문에 TTI가 짧습니다. */}
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary" textAlign="left">
            Server Rendering의 단점
          </Heading>
          <br />
          <List>
            <ListItem>
              <S type="bold" textColor="tertiary">
                TTFB
                {/* TTFB 최초 응답을 기다리는 데 걸리는 시간 */}
              </S>
              (Time to First Byte) 🐢
            </ListItem>
            {/* 넷플릭스의 경우, 하이브리드 렌더링을 통해 성능을 크게 향상시켰습니다. */}
            {/* 넷플릭스 서버는 랜딩 페이지에는 스태틱 렌더를 사용하며, 상호작용이 많은 페이지는 JS를 프리페치합니다. */}
            {/* 이를 통해, 클라이언트가 렌더링한 무거운 페이지를 빠르게 서빙합니다. */}
          </List>
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary" textAlign="left">
            Server Rendering 과정 도식화
          </Heading>
          <br />
          <Image src={serverRenderingTti} alt="server rendering tti" style={imgStyle} />
          <caption style={{ color: '#fff', fontSize: '1rem', textAlign: 'left', whiteSpace: 'nowrap' }}>
            Resource from
            &nbsp;
            <a href="https://developers.google.com/web/updates/2019/02/rendering-on-the-web" target="_blank" rel="noopener noreferrer">
              https://developers.google.com/
            </a>
          </caption>
        </Slide>

        {/* 스태틱렌더링은 빌드 타임에 HTML을 생성합니다. */}
        {/* 빌드 타임에도 데이터 페칭 등을 수행할 순 있지만, 동적으로 데이터를 페칭할 수는 없습니다. */}
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary" textAlign="left">
            Static Rendering의 장점
          </Heading>
          <br />
          <List>
            <ListItem>
              <S type="bold" textColor="tertiary">
                FP
              </S>
              (First Paint) 🐇
            </ListItem>
            <ListItem>
              <S type="bold" textColor="tertiary">
                FCP
              </S>
              (First Contentful Paint) 🐇
            </ListItem>
            <ListItem>
              <S type="bold" textColor="tertiary">
                TTI
              </S>
              (Time To Interactive) 🐇
            </ListItem>
            <ListItem>
              {/* HTML을 즉석에서 생성하지 않아도 되므로 */}
              <S type="bold" textColor="tertiary">
                TTFB
                {/* TTFB 최초 응답을 기다리는 데 걸리는 시간 */}
              </S>
              (Time to First Byte) 🐇
            </ListItem>
            <ListItem>
              캐싱 가능
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary" textAlign="left">
            Static Rendering의 단점
          </Heading>
          <br />
          <List>
            <ListItem>
              모든 URL에 대한 별도의 HTML 파일
            </ListItem>
            <ListItem>
              동적인 URL 사용 불가
              {/* 프록시를 통해 패스베리어블이 있을 때, 특정 URL로 리다이렉트 시키는 방법도 있습니다. */}
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary" textAlign="left">
            Static Rendering 과정 도식화
          </Heading>
          <br />
          <Image src={staticRenderingTti} alt="static rendering tti" style={imgStyle} />
          <caption style={{ color: '#fff', fontSize: '1rem', textAlign: 'left', whiteSpace: 'nowrap' }}>
            Resource from
            &nbsp;
            <a href="https://developers.google.com/web/updates/2019/02/rendering-on-the-web" target="_blank" rel="noopener noreferrer">
              https://developers.google.com/
            </a>
          </caption>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary" textAlign="left">
            선택에 대한 고려 사항
          </Heading>
          <br />
          <Text textAlign="left">
            데이터가 얼마나 정적/동적인가?
            {/* 데이터가 정적이거나 자주 변경되지 않는다면, 스태틱 렌더 */}
            {/* 데이터가 동적이라면 서버 렌더 */}
            {/* 데이터 변경 주기가 어느 정도 긴 곳이라면, 스태틱 렌더와 자동화 배포등을 사용할 수도 있습니다. */}
            {/* 예를 들면, 한 시간 주기로 데이터 변경을 확인한 다음, 변경이 일어나면 자동으로 스태틱 사이트를 생성하는 등 */}
          </Text>
          <br />
          <Text textAlign="left">
            데이터 변경 시점은 언제인가?
            {/* 콘텐츠가 배포 이후에도 변경되는 경우라면 서버 렌더 */}
            {/* 배포 시에만 데이터가 변경된다면, 스태틱 렌더 */}
          </Text>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary" textAlign="left">
            서버 렌더 + React 를 위한 솔루션들
          </Heading>
          <br />
          <List>
            <ListItem>
              Express, Koa, etc.
            </ListItem>
            <ListItem>
              React on Rails
            </ListItem>
            <ListItem>
              V8 Javascript Engine for PHP
            </ListItem>
            <ListItem>
              ...
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary" textAlign="left">
            스태틱 렌더 + React 를 위한 솔루션들
          </Heading>
          <br />
          <List>
            <ListItem>
              <a href="https://github.com/markdalgleish/static-site-generator-webpack-plugin" target="_blank" rel="noopener noreferrer">
                static-site-generator-webpack-plugin
              </a>
            </ListItem>
            <ListItem>
              <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
                Gatsby
              </a>
            </ListItem>
            <ListItem>
              <a href="https://frontarm.com/navi/en/" target="_blank" rel="noopener noreferrer">
                Navi
              </a>
            </ListItem>
            <ListItem>
              <a href="https://github.com/brillout/awesome-universal-rendering" target="_blank" rel="noopener noreferrer">
                Awesome Universal Rendering
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom', 'fade']}>
          <Heading size={4} textColor="tertiary">
            참고 사이트
          </Heading>
          <List>
            <ListItem style={{ fontSize: '1.5rem' }}>
              <a href="https://developers.google.com/web/updates/2019/02/rendering-on-the-web" target="_blank" rel="noopener noreferrer">
                Rendering on the Web - Google Developers
              </a>
            </ListItem>
            <ListItem style={{ fontSize: '1.5rem' }}>
              <a href="https://frontarm.com/james-k-nelson/static-vs-server-rendering/" target="_blank" rel="noopener noreferrer">
                Static vs. Server Rendering - Frontend Armory
              </a>
            </ListItem>
            <ListItem style={{ fontSize: '1.5rem' }}>
              <a href="https://www.toptal.com/front-end/client-side-vs-server-side-pre-rendering" target="_blank" rel="noopener noreferrer">
                Client-side vs. Server-side vs. Pre-rendering for Web Apps - Toptal Developers
              </a>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
