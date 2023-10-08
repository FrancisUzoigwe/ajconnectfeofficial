import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { persistStore } from "redux-persist";
import { store } from "./global/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  let persistor = persistStore(store);
  let client = new QueryClient();
  return (
    <div className="font-Poppin">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <QueryClientProvider client={client}>
            <RouterProvider router={mainRouter} />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
