import {BrowserRouter, Route, Router} from "react-router-dom";
import './index.scss'
import Header from './components/Header/Header.jsx';

function App() {
    return <>
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    </>;
}

export default App;
