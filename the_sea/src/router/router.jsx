import { Routes, Route } from 'react-router-dom'
import Home from '../components/homepage/Home';
import About from '../components/about/About';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default Router

