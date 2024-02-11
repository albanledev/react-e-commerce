import { Link } from "react-router-dom";

function NotFoundElement(){
    return (
        <div>
            <h1>Sorry this page doesn't exist !</h1>
            <Link to='/'>Go back to the HomePage</Link>
        </div>
    )
}

export default NotFoundElement;
