import { Link } from "react-router-dom";

function NotFoundElement(){
    return (
        <div>
            <h1>Sorry the product doesn't exist !</h1>
            <Link to='/'>Go back to the other products</Link>
        </div>
    )
}

export default NotFoundElement;
