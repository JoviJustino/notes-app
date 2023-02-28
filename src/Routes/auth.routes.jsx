import { Routes, Route} from "react-router-dom"

import { SingnIn } from "../pages/SignIn"
import { SignUp } from "../pages/SingUp"


export function AuthRoutes(){
  return(
    <Routes>
      <Route path="/" element={<SingnIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
      
    </Routes>
  )
}