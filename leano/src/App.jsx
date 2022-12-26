import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <div id='page-body'>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/articles' element={<ArticleListPage/>}/>
        <Route path='/articles/:articlesId' element={<ArticlePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
