import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';


const NavLink = styled(Link)`
    background-color: #73AB84;
    color: white;
    width: 10%;
    height: 3.5vw;
    text-align: center;
    padding-top: 20px;
    padding-bottom: none;

    &:hover {
    background-color: #577a62; 
    }

    &:active {
        background-color: #acddbb;
        color: #34473a;
    }
    
`

const Header = () => {

    const A = styled.div`
    height: 5vw; 
    background-color: #73AB84; 
    margin: none;
    display: flex;
    `;

    return (
        <>
            <A>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/submissions" activeStyle>
                    Submissions
                </NavLink>
            </A>
              
        </>
    )
}

export default Header