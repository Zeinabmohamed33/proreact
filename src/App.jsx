
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import About from './component/About/About'
import Portfolio from './component/Portfolio/Portfolio'
import Contact from './component/Contact/Contact'


function App() {
  let myrouter= createBrowserRouter([
    {path: "" , element:<Layout/>, children:[
      {index:true , element:<Home/>},
      {path:"home" , element:<Home/>},
      {path:"About" , element:<About/>},
      {path:"Portfolio" , element:<Portfolio/>},
      {path:"Contact" , element:<Contact/>}
    ]}


  ])
  

  return (<>
  <RouterProvider router={myrouter}></RouterProvider>
  


 
    </>
  )
}

export default App
