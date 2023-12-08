import styled from "styled-components";


function  Cabecalho() {

    return (
        <StyledCabecalho>
            <nav>
                    <a href="">Home</a>
               
                    <a href="">Jogos</a>
                
                    <a href="">Livros</a>
            </nav>  
        </StyledCabecalho>
    )
}

const StyledCabecalho = styled.header`
    nav {
        text-align: center;
        display: flex;
        flex-flow: column;
        background: #1e90ff;
        border-radius: 1rem 0 0 1rem ;
    }

    a{
        padding: 4rem;
        border: 1px solid #000;
        text-decoration: none;
        color: Black    ;
        font-size: 17px;
        font-weight: bold;
        transition: 0.5s;
    }

    a:hover, a:focus {
        color: white;
        background: #000;
    }
`;


export default Cabecalho;