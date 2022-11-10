import { createBrowserRouter } from "react-router-dom";
import AddReview from "../component/AddReview/AddReview";
import AllReview from "../component/AllReview/AllReview";
import DetailsProduct from "../component/DetailsProduct/DetailsProduct";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import PrivateRouter from "../component/PrivateRouter/PrivateRouter";
import Registration from "../component/Registration/Registration";
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
                element : <Login></Login>
            },{
                path : '/registration',
                element : <Registration></Registration>
            },{
                path : '/products/:id',
                loader : ({params})=> fetch(`http://localhost:5000/allproducts/${params.id}`),
                element : <DetailsProduct></DetailsProduct>
            },{
                path : '/review',
                element : <PrivateRouter><AllReview></AllReview></PrivateRouter>
                
            },
            {
                path : '/addservice',
                element : <div>Service adding page</div>
            },{
                path : '/addreview/:id',
                element : <PrivateRouter><AddReview></AddReview></PrivateRouter>,
                loader : ({params}) => fetch(`http://localhost:5000/addreview/${params.id}`)
            }
        ]
    }
])

export default router;