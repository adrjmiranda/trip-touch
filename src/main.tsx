import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App.tsx';

// Style
import GlobalStyle from './style/GlobalStyle.ts';
import Theme from './style/Theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
