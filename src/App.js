import React from "react";
import styled from 'styled-components';
import { theme } from './theme/'

const AppContainer = styled.div`
  font-family: sans-serif;
  color: ${({theme}) => theme.colours.mainColor};
 `;

const App = () => {
    return(
      <AppContainer className="App" theme={theme}>
        <h1> Hello, World! </h1>
      </AppContainer>
    )
};

export default App;
