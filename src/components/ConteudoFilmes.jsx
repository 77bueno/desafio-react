import styled from "styled-components";

function ConteudoFilmes() {
    return (
        <StyledFilmes>
            <h2>Pokemon</h2>

            <p>Jogo mó das hora</p>
        </StyledFilmes>
    )
}

    const StyledFilmes = styled.section`
    padding: 2rem;
    border: 1rem solid black;
    width: 100%;
    `;

    export default ConteudoFilmes;