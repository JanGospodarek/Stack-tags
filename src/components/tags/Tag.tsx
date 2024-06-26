import { Tag as TagType } from "../../store/types";
const Tag = (props: { tag: TagType; tagIndex: number }) => {
  const { name, popularity, hasSynonyms, isRequired } = props.tag;
  return (
    <div className="p-3 border-2 rounded-2xl bg-slate-700/30  max-h-[180px] border-slate-400 flex-grow-1 sm:flex-grow-0">
      <div className="flex justify-between gap-2 items-center">
        <p className="text-xl font-bold text-white">{name}</p>
        <p className="font-bold text-slate-500/80">
          nº <span className="text-xl text-white">{props.tagIndex}</span>
        </p>
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <div className="flex justify-between gap-2 items-center">
          <p className="text-sm dark:text-slate-300/60">Popularity:</p>
          <p>{popularity}</p>
        </div>
        <div className="flex justify-between gap-2">
          <p className="text-sm dark:text-slate-300/60">Has Synonyms:</p>
          <p>{hasSynonyms ? "Yes" : "No"}</p>
        </div>
        <div className="flex justify-between gap-2">
          <p className="text-sm dark:text-slate-300/60">Required:</p>
          <p>{isRequired ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  );
};
export default Tag;
