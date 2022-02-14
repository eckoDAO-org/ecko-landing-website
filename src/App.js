import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import Router from './router/router';
import { theme } from './styles/theme';
import { ModalConsumer, ModalProvider } from './context/ModalContext';
import Modal from './components/layout/Modal';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ModalProvider>
        <Router />
        <ModalConsumer>
          {(value) => {
            console.log('value', value);
            return (
              <Modal
                mountNode={value?.mountNode}
                open={value.open}
                loading={value.loading}
                title={value.title}
                content={value.content}
                buttons={value.buttons}
                contentStyle={value.contentStyle}
                footer={value.footer}
                onClose={value.closeModal || value.onClose}
              />
            );
          }}
        </ModalConsumer>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
