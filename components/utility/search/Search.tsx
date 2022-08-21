export interface ISearch {
  sampleTextProp: string;
}

const Search: React.FC<ISearch> = ({ sampleTextProp }) => {
  return (
    <form>
      <input type="text" />
      <button type="submit">Google Search</button>
      <button type="submit">I&apos;m Feeling Lucky </button>
    </form>
  );
};

export default Search;
