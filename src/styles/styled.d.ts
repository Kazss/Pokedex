import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      // Global Background
      background: string;

      // List Style
      list_default_background: string;
      list_active_background: string;
      list_scrollbar_background: string;

      // Card Style
      border_bottom_50: string;
      border_bottom_100: string;
      card_background_shape: string;
    }
  }
}