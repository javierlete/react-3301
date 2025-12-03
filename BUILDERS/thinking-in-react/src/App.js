import './App.css';

function App() {
  return (
    <main>
      <FilterableProductTable />
    </main>
  );
}

function FilterableProductTable() {
  return (
    <>
      <SearchBar />
      <ProductTable />
    </>
  );
}

function SearchBar() {
  return (
    <>
      <div>
        <input type="search" placeholder="Search..."></input>
      </div>
      <div>
        <input type="checkbox"></input>
        <label for="instock">Only products in stock</label>
      </div>
    </>
  );
}

function ProductTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductCategoryRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductCategoryRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
      </tbody>
    </table>
  );
}

function ProductCategoryRow() {
  return (
    <tr class="categoria">
      <th colspan="2">Frutos</th>
    </tr>
  );
}

function ProductRow() {
  return (
    <tr>
      <td className="outofstock">Plátano</td>
      <td>5</td>
    </tr>
  );
}

export default App;
