import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../Header';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

import '../../scss/app.scss';

function App() {


    return (
        <Router>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<HomePage />}/>
                            <Route path="*" element={<NotFoundPage />}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
