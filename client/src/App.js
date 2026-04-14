import products from "./products";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <h1>AI E-Commerce Dashboard</h1>

      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default App;