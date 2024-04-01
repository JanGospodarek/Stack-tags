import Sorting from "./components/sorting/Sorting";
import Heading from "./components/Heading";
import PagesNav from "./components/Pagination";
import TagList from "./components/tags/TagList";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col p-2">
      <Heading />
      <Sorting />
      <TagList />
      <PagesNav />
    </div>
  );
}

export default App;
