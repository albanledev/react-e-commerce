import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../services/API";
import Header from "../Components/Header";
function Products() {

    let { data, isLoading, isError } = useGetProductsQuery();

    // const renderProducts = (products) => {
    //   // Utilisez `map` pour créer une liste d'éléments JSX et retournez-la
    //   return products.map((product) => (
    //     <div key={product.id}>
    //       <Link to={`/products/${product.id}`}>{product.name}</Link>
    //       <p>{product.price}</p>
    //     </div>
    //   ));
    // };
  
    return (
      <div className="products">
                <Header />

        <h1 className="titleProducts">Products</h1>

        <div className="grid">
        {
            isLoading ? <p>Loading...</p> : isError ? <p>Error</p> : data.map((product) => (
                
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <div className="card">
                            <div><img className="cardImage" src={product.image} alt={product.name} /></div>
                            <h3 className="cardTitle">{product.title}</h3>
                        </div>
                    </Link>
                </div>
            ))
        }
        </div>
        



  
        {/* Appelez la fonction renderProducts et affichez la liste d'éléments JSX */}
        {/* {renderProducts(products)} */}
      </div>
    );
  }
  
  export default Products;