export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className="rounded-full border-2 w-5/6 sm:w-128 h-12 px-3"
        type="text"
      />
      <button type="submit">Google Search</button>
      <button type="submit">I&apos;m Feeling Lucky </button>
    </form>
  );
};

export default Search;
