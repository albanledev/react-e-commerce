import { Link, useParams } from "react-router-dom";
import Header from "../Components/Header";
import { useGetProductsQuery, useGetCommentsQuery } from "../services/API";
import { useEffect, useState } from "react";

function Product() {
    const { data, isLoading, isError } = useGetProductsQuery();
    const params = useParams();

    const { data: commentsData, isLoading: commentsIsLoading, isError: commentsIsError } = useGetCommentsQuery(params.productId);
    const [productFound, setProductFound] = useState(false);
    const [product, setProduct] = useState({});
    let [username, setUsername] = useState("");
    let [content, setContent] = useState("");
    useEffect(() => {
        console.log(params.productId)
        const leBonProduit = () => {

            if (!isLoading && !isError && data) {
                const foundProduct = data.find((product) => product.id === params.productId);

                if (foundProduct) {
                    setProductFound(true);
                    setProduct(foundProduct);
                } else {
                    console.log("Produit non trouvé");
                }
            }
        };

        leBonProduit();
    }, [isLoading, isError, data, params.productId]);

    return (
        <div>
            <Header />
            {productFound ? (
                <div className="flexProduct">
                    <div>
                        <div>
                            <img className="imageProduct" src={product.image} alt={product.title} />
                        </div>

                        <div className="returnProducts">
                            <img className="flecheGauche" src="../assets/arrow left.png" alt="" /><Link className="textReturnOtherProducts" to="/products">See the other products</Link>
                        </div>
                    </div>

                    <div className="bloc2">
                        <div className="infoProduct">
                            <h1>{product.title}</h1>
                            <p><b>Date:</b> {product.date} </p>
                            <p><b>Price:</b> {product.price} €</p>
                            <p><b>Quantity:</b> {product.quantity}</p>
                            <p><b>Unit of measurement:</b> {product.unit_of_measurement}</p>
                            <p><b>Measure:</b> {product.measure}</p>
                            <p><b>Price per measure:</b> {product.price_per_measure}</p>
                        </div>

                        <div>
                            <button className="buttonProduct">Add to cart <img src="../assets/cart black.png" alt="" /></button>
                        </div>

                        <form>
                            <div>
                                <input type="text" placeholder="username" value={username} onChange={(event) => {
                                    setUsername(event.target.value);
                                }}/>
                            </div> 

                            <div>
                                <textarea type="text" placeholder="content" value={content} onChange={(event) => {
                                    setContent(event.target.value);
                                }}/>
                            </div> 

                            <div>
                                <button type="submit">Leave a comment</button>
                            </div>      
                        </form>




                        {/* <button className="buttonProduct">Add to cart</button> */}
                    </div>
                </div>



            ) : (
                <p>{isLoading ? "Loading..." : isError ? "Error" : "Produit non trouvé"}</p>
            )}


            <div className="comments">
                <h2>Comments</h2>
                <div className="commentsContent">
                    {commentsIsLoading ? (
                        <p>Loading...</p>
                    ) : commentsIsError ? (
                        <p>Error</p>
                    ) : (
                        commentsData.slice().reverse().map((comment) => (
                            <div key={comment.id}>
                                <h3>{comment.username}</h3>
                                <p>{comment.comment}</p>
                            </div>
                        )
                        )
                        // commentsData.map((comment) => (
                        //     <div key={comment.id}>
                        //         <h3>{comment.username}</h3>
                        //         <p>{comment.comment}</p>
                        //     </div>
                        // ))
                        // commentsData.map((comment ) => 
                    )}
                </div>
            </div>
        </div>
    );
}

export default Product;
