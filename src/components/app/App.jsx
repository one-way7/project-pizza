import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../header/Header';
import HomePage from '../pages/HomePage';
import Cart from '../pages/CartPage';
import NotFoundPage from '../pages/NotFoundPage';

import '../../scss/app.scss';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <div className="content">
                        <Routes>
                            <Route path="/" element={<HomePage />}/>
                            <Route path="/cart" element={<Cart />}/>
                            <Route path="*" element={<NotFoundPage />}/>
                        </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
