import styled from "styled-components";

function Conteudo() {
    return (
        <StyledConteudo>
            <h2>Harry Potter</h2>

            <p>Harry Potter é um jovem comum de 11 anos até que recebe uma carta para estudar na Escola de Magia e Bruxaria de Hogwarts, onde ele descobre ser, na verdade, um bruxo. Nela, o garoto conquista a amizade de Hagrid, além de Hermione e Ron. No entanto, ele descobre ter um grande inimigo, o terrível Voldemort.</p>
        </StyledConteudo>
    )
}

    const StyledConteudo = styled.section`
    padding: 2rem;
    border: 1rem solid black;
    width: 100%;
    background-color: #d18be0;
    
    
    `; 

export default Conteudo;