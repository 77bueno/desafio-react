import Nav from "./components/Nav";

import Home from "./pages/Home";
import Franquia from "./pages/Franquia";
import Filmes from "./pages/Filmes";
import Container from "./components/Container";

/* Importação de recursos/componentes do React Router */
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
    return (
        <>
        <BrowserRouter>
            <Container>
                <Nav />
                <Routes>
                    <Route Component={Home} exact path="/"/>
                    <Route Component={Filmes} path="/filmes"/>
                    <Route Component={Franquia} path="/franquia"/>
                </Routes>
            </Container>
        </BrowserRouter>    
        </>
    );
}

export default App;