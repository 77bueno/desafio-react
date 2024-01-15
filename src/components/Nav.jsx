import styled from "styled-components";
import { NavLink } from "react-router-dom";

function  Nav() {

    return (
            <StyledNav>
                    <NavLink to="/" id="mudarCor" className="border-top">Home</NavLink>
               
                    <NavLink to="/filmes" id="mudarCor">Filmes</NavLink>
                
                    <NavLink to="/franquia" id="mudarCor" className="border-bottom">Franquia</NavLink>
            </StyledNav>
    )
}

<script src="js/mudarCorFundo"></script>


const StyledNav = styled.nav`
    
        text-align: center;
        display: flex;
        flex-flow: column;
        background: #5b2a66;
    

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


export default Nav;