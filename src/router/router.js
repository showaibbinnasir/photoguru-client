import { createBrowserRouter } from "react-router-dom";
import AddReview from "../component/AddReview/AddReview";
import AddService from "../component/AddService/AddService";
import AllReview from "../component/AllReview/AllReview";
import Blog from "../component/Blog/Blog";
import DetailsProduct from "../component/DetailsProduct/DetailsProduct";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import PrivateRouter from "../component/PrivateRouter/PrivateRouter";
import Registration from "../component/Registration/Registration";
import Services from "../component/Services/Services";
import UpdateReview from "../component/UpdateReview/UpdateReview";
import Default from "../layout/Default/Default";

const router = createBrowserRouter([
    {
        path : '/',
        element: <Default></Default>,
        
        children : [
            {
                path : '/',
                loader : ()=> fetch('https://photoguru-server.vercel.app/products'),
                element : <Home></Home>
            },{
                path : '/services',
                loader: ()=> fetch('https://photoguru-server.vercel.app/allproducts'),
                element : <Services></Services>
            },{
                path : '/about',
                element : <div>This is about page</div>
            },{
                path : '/blog',
                element : <Blog></Blog>
            },{
                path : '/login',
                element : <Login></Login>
            },{
                path : '/registration',
                element : <Registration></Registration>
            },{
                path : '/products/:id',
                loader : ({params})=> fetch(`https://photoguru-server.vercel.app/allproducts/${params.id}`),
                element : <DetailsProduct></DetailsProduct>
            },{
                path : '/review',
                element : <PrivateRouter><AllReview></AllReview></PrivateRouter>
                
            },
            {
                path : '/addservice',
                element : <AddService></AddService>,
                loader : ()=> fetch('https://photoguru-server.vercel.app/allproducts')
            },{
                path : '/addreview/:id',
                element : <PrivateRouter><AddReview></AddReview></PrivateRouter>,
                loader : ({params}) => fetch(`https://photoguru-server.vercel.app/addreview/${params.id}`)
            },{
                path : '/reviewupdate/:id',
                element : <UpdateReview></UpdateReview>
            }
        ]
    }
])

export default router;