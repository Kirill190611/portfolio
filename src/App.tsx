import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {BodyWrapper} from "./components/BodyWrapper";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <BodyWrapper>
                <Header/>
                <Main/>
                <Footer/>
            </BodyWrapper>
        </div>
    );
}

export default App;
