import { PropTypes } from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'radnika_next';
  src: url('/static/radnikanext-medium-webfont.woff2');
  forma:('woff2');
}
*,*::before,*:after{
  box-sizing:inherit;
}
html{
  font-family: 'Roboto', sans-serif;
  --red:#ff0000;
  --black:#393939;
  --grey:#3A3A3A;
  --grey:var(--grey);
  --lightGrey:#e1e1e1;
  --offWhite:#ededed;
  --maWidth: 1000px;
  --bs:0 12px 24px 0 rgba(0,0,0,0.9);
  box-sizing:border-box;
}
body{
  font-family: 'radnika_next',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin:0;
  font-size:1.5rem;
  line-height:2;
}
a{
  text-decoration:none;
  color:var(--black);
}
a:hover{
  text-decoration:underline;
}
button{
  font-family: 'radnika_next',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;
const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;
export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};

// oneOf([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
