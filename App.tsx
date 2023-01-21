import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import List from "./src/components/List";
import { persistor, store } from "./src/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <List />
      </PersistGate>
    </Provider>
  );
};

export default App;
