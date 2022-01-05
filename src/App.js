import Banana from "./components/banana/Banana";
import Monkey from "./components/monkey/Monkey";
import { MonkeyContextProvider } from "./contexts/MonkeyContext";

function App() {
  return (
    <MonkeyContextProvider>
      <div>Hello</div>
      <div style={{ height: 40 }} />
      <Monkey />
      <div style={{ height: 40 }} />
      <Banana />
    </MonkeyContextProvider>
  );
}

export default App;
