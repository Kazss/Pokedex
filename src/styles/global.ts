import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    // Global Background
    --background: ${props => props.theme.colors.background};

    // List Style
    --list-default-background: ${props => props.theme.colors.list_default_background};
    --list-active-background: ${props => props.theme.colors.list_active_background};
    --list-scrollbar-background: ${props => props.theme.colors.list_scrollbar_background};

    // Card Style
    --border-bottom-50: ${props => props.theme.colors.border_bottom_50};    
    --border-bottom-100: ${props => props.theme.colors.border_bottom_100};    
    --card-background-shape: ${props => props.theme.colors.card_background_shape};    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ul{
    list-style-type: none;
  }

`;
