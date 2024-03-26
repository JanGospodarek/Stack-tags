import Filtering from "./components/Filtering";
import Heading from "./components/Heading";
import TagList from "./components/TagList";

function App() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Heading />
      <Filtering />
      <TagList />
    </div>
  );
}

export default App;
