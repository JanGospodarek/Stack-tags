import Filtering from "./components/Filtering";
import Heading from "./components/Heading";
import PagesNav from "./components/Pagination";
import TagList from "./components/TagList";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col p-2">
      <Heading />
      <Filtering />
      <TagList />
      <PagesNav />
    </div>
  );
}

export default App;
