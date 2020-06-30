import React from "react";
import styled from 'styled-components';
import { theme } from './theme';

const AppContainer = styled.div`
  font-family: sans-serif;
  color: ${({theme}) => theme.colors.mainColor}
`;

const App: React.FC = () => {
    return(
      <AppContainer className="App" theme={theme}>
        <h1> Hello, World! </h1>
      </AppContainer>
    )
};

export default App;
