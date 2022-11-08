import { createBrowserRouter } from "react-router-dom";
import DetailsProduct from "../component/DetailsProduct/DetailsProduct";
import Home from "../component/Home/Home";
import Services from "../component/Services/Services";
import Default from "../layout/Default/Default";

const router = createBrowserRouter([
    {
        path : '/',
        element: <Default></Default>,
        
        children : [
            {
                path : '/',
                loader : ()=> fetch('http://localhost:5000/products'),
                element : <Home></Home>
            },{
                path : '/services',
                loader: ()=> fetch('http://localhost:5000/allproducts'),
                element : <Services></Services>
            },{
                path : '/about',
                element : <div>This is about page</div>
            },{
                path : '/blog',
                element : <div>This is blog section</div>
            },{
                path : '/login',
                element : <div>This is login page</div>
            },{
                path : '/registration',
                element : <div>This is registration page</div>
            },{
                path : '/products/:id',
                loader : ({params})=> fetch(`http://localhost:5000/allproducts/${params.id}`),
                element : <DetailsProduct></DetailsProduct>
            }
        ]
    }
])

export default router;