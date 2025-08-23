import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";
import data from "../Data/data.js";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";

function Home({ addToBasket, removeFromBasket, query, setQuery }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  // 1. Filter data by query
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  // 2. Calculate total pages based on filtered data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // 3. Paginate filtered data
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  // 4. Reset to page 1 when query changes
  useEffect(() => {
    setPage(1);
  }, [query]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Slider />
      <h1 className="text-center mt-4">Pizza Menu</h1>
      <SearchBar setQuery={setQuery} />
      <ProductList
        addToBasket={addToBasket}
        removeFromBasket={removeFromBasket}
        query={query}
        data={currentItems}
      />
      <div className="d-flex justify-content-center mt-4">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </div>
    </div>
  );
}

export default Home;
