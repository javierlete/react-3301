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
        <input id="instock" type="checkbox"></input>
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
        <ProductCategoryRow category="Fruits" />
        <ProductRow product={{ name: 'Apple', price: 1, onstock: true }} />
        <ProductRow product={{ name: 'Dragonfruit', price: 1, onstock: true }} />
        <ProductRow product={{ name: 'Passionfruit', price: 2, onstock: false }} />
        <ProductCategoryRow category="Vegetables" />
        <ProductRow product={{ name: 'Spinach', price: 2, onstock: true }} />
        <ProductRow product={{ name: 'Pumpkin', price: 4, onstock: false }} />
        <ProductRow product={{ name: 'Peas', price: 1, onstock: true }} />
      </tbody>
    </table>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr class="categoria">
      <th colspan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  return (
    <tr>
      <td className={!product.onstock ? 'outofstock' : null}>{product.name}</td>
      <td>${product.price}</td>
    </tr>
  );
}

export default App;
