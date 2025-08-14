
 import { createBrowserRouter,RouterProvider } from 'react-router-dom'
 import Landing from './Home/Landing.jsx'
import Login from './Home/Login.jsx'
import SignUp from './Home/SignUp.jsx'
function App() {
  


 
   const router=createBrowserRouter([
     {
       path:'/',
       element:<Landing />
     },
     {
         path:'/Login',
     element:<Login/>,
     },
     {
       path:'/SignUp',
       element:<SignUp />
     },
     
   
   
   ])
   return(
   <RouterProvider router={router}/>
   )
   


  
}

export default App
