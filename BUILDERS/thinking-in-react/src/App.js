import { Fragment, useState } from 'react';
import './App.css';

function App() {
  return (
    <main>
      <FilterableProductTable products={PRODUCTS} />
    </main>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
    </>
  );
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <>
      <div>
        <input
          type="search"
          placeholder="Search..."
          value={filterText}
          onChange={e => onFilterTextChange(e.target.value)}></input>
      </div>
      <div>
        <input
          id="instock"
          type="checkbox"
          checked={inStockOnly}
          onChange={e => onInStockOnlyChange(e.target.checked)}
        ></input>
        <label htmlFor="instock">Only products in stock</label>
      </div>
    </>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  let lastCategory = null;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          products
            .filter(product => product.name.toLowerCase().includes(filterText.toLowerCase()))
            .filter(product => !inStockOnly || product.stocked)
            .map(product => <Fragment key={product.name}>
              {
                lastCategory !== product.category ?
                  <ProductCategoryRow category={lastCategory = product.category} /> :
                  null
              }
              <ProductRow product={product} />
            </Fragment>)}
      </tbody>
    </table>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr className="categoria">
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  return (
    <tr>
      <td className={!product.stocked ? 'outofstock' : null}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

export default App;
