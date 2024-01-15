import styled from "styled-components";

function ConteudoFranquia() {
    return (
        <StyledFranquia>
            <h2>Harry Potter</h2>

            <p>Gosto muitooo</p>
        </StyledFranquia>
    )
}

    const StyledFranquia = styled.section`
    padding: 2rem;
    border: 1rem solid black;
    width: 100%;
    `;

    export default ConteudoFranquia;