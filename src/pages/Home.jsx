import { Link } from "react-router-dom";
import Header from "../Components/Header";

function Home() {
    return (
        <div className="home">
            <Header />
            <div class="mainHome">
                <h1>Welcome back ! check our products</h1>
                <Link to='/products'><button className="buttonHome">Products <img className="arrowRight" src="assets/arrow right.png" alt="" /></button></Link>
            </div>

        </div>
    )
}


export default Home;