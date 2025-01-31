import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'


import Github, { githubFolderHandler } from './Components/Github/Github'
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children: [
//       {
//         path:"/",
//         element:<Home/>
//       },{
//         path:"/about",
//         element:<About/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
 
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user/:userId' element={<User/>}/> 
      <Route 
      loader={githubFolderHandler}
      path='/Github' element={<Github/>}/>   
    </Route>
    
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)  
