import React from 'react';
import './App.css';

function App() {
  return (
    <main>
      <FilterableProductTable products={PRODUCTS} />
    </main>
  );
}

function FilterableProductTable({ products }) {
  return (
    <>
      <SearchBar />
      <ProductTable products={products} />
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
        <label htmlFor="instock">Only products in stock</label>
      </div>
    </>
  );
}

function ProductTable({ products }) {
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
          products.map(product => <React.Fragment key={product.name}>
            {
              lastCategory !== product.category ?
                <ProductCategoryRow category={lastCategory = product.category} /> :
                null
            }
            <ProductRow product={product} />
          </React.Fragment>)}
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
