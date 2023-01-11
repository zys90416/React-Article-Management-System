import {unstable_HistoryRouter as HistoryRouter, BrowserRouter, Routes, Route} from 'react-router-dom'
import { history } from './utils/history';
import './App.css';
import Login from './pages/Login'
//import Layout from './pages/Layout'
import Layout from '@/pages/Layout'
import {AuthComponent} from '@/components/AuthComponent'
import Home from './pages/Home';
import Article from './pages/Article';
import Publish from './pages/Publish'

function App() {
  return (
    //配置路由
    <HistoryRouter history={history}>
      <div className="App">
      
        <Routes>
          {/* 创建path和组件的关系*/}
          {/* Layout 需要鉴权*/}
          {/* layout不能写死 , 借鉴AuthComponent 的方法*/}
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={
          <AuthComponent>
            <Layout />
          </AuthComponent>
          }>
            <Route index element ={<Home />}></Route>
            <Route path='article' element ={<Article />}></Route>
            <Route path='publish' element ={<Publish />}></Route>


          </Route>
        </Routes>
        
      </div>
    </HistoryRouter>
    
    
  );
}

export default App;
