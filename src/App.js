import {BrowserRouter,Routes,Route} from 'react-router-dom'

//导入页面组件
import Login from "./pages/Login/Login";
import Layout from "./pages/Layout/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Layout' element={<Layout/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
