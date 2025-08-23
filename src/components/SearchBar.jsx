function SearchBar({ setQuery, query }) {
  return (
    <div className="d-flex justify-content-center my-4">
      <form
        className="d-flex"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="form-control me-2 rounded-pill"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark rounded-pill" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
