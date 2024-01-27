import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Footer} from "./layout/footer/Footer";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;
