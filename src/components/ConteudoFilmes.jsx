import styled from "styled-components";

function ConteudoFilmes() {
    return (
        <StyledFilmes>
            <h2>Sequencia de Filmes de Harry Potter</h2>

            <ol>
                <li>Harry Potter e a Pedra Filosofal</li>
                <li>Harry Potter e a Câmara Secreta</li>
                <li>Harry Potter e o Prisioneiro de Azkaban</li>
                <li>Harry Potter e o Cálice de Fogo</li>
                <li>Harry Potter e a Ordem da Fênix</li>
                <li>Harry Potter e o Enigma do Príncipe</li>
                <li>Harry Potter e as Relíquias da Morte - Parte 1</li>
                <li>Harry Potter e as Relíquias da Morte - Parte 2</li>
            </ol>
        </StyledFilmes>
    )
}

    const StyledFilmes = styled.section`
    padding: 2rem;
    border: 1rem solid black;
    width: 100%;
    background-color: #d18be0;
    

    `;

    export default ConteudoFilmes;