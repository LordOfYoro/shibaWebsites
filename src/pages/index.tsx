import * as React from "react";

import { store, persistedStore } from "../store/store";

import { Provider } from "react-redux";
import App from "../components/App";

import type { HeadFC, PageProps } from "gatsby";
import { PersistGate } from "redux-persist/integration/react";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Les shibas d'Inari</title>;
