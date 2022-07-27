import { Route, Routes } from "react-router-dom";
import {Calculator} from "../components"

const Router = () => {
    return (<Routes>
<Route path="/" element={<Calculator/>} />
    </Routes>)
} 

export default Router;