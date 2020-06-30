import React, { FunctionComponent  } from "react";
import styled, { ThemeProvider } from "styled-components";
import MainNavbar from './../components/layout/MainNavbar'
import { theme } from './index'

const AppContainer = styled.div`
    font-family: sans-serif;
`;
const YearContainer = styled.div`
    text-align: center;
    color: ${ (props) => props.theme.colors.mainColor }
`;

const Main = styled.main`
    min-height: 100vh;  
`;

const getCurrentYear = () => new Date().getFullYear();

interface LayoutProps {
}

export const Layout: FunctionComponent<LayoutProps> = (props) => {
    return(
        <ThemeProvider theme={theme}>
            <AppContainer>
                <header>
                    <MainNavbar />
                </header>


                <Main>
                    { props.children }
                </Main>

                <footer>
                    <YearContainer>
                        { getCurrentYear() }
                    </YearContainer>
                </footer>
            </AppContainer>
        </ThemeProvider>
    )
};
