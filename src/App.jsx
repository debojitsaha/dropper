import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Editor from "./pages/Editor";

import { Provider } from "react-redux";
import store from "./store/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DndProvider backend={HTML5Backend}>
          <Editor />
        </DndProvider>
      </div>
    </Provider>
  );
}

export default App;
