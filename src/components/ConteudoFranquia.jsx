import styled from "styled-components";

function ConteudoFranquia() {
    return (
        <StyledFranquia>
            <h2>No universo da magia, também existem outros filmes, como:</h2>

            <ol>
                <li>Animais Fantásticos e Onde Habitam</li>
                <li>Animais Fantásticos: Os Crimes de Grindelwald</li>
                <li>Animais Fantásticos: Os Segredos de Dumbledore</li>
                <li>O aprendiz de feiticeiro</li>
            </ol>
        </StyledFranquia>
    )
}

    const StyledFranquia = styled.section`
    padding: 2rem;
    border: 1rem solid black;
    width: 100%;
    background-color: #d18be0;

    `;

    export default ConteudoFranquia;