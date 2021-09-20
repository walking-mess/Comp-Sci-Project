import styled from "styled-components";
import Pokemon from "./Pokemon";

const Body = () => {

    const A = styled.div`
        height: 69px;
        background-color: #73AB84;
        margin: none;
    `;
    
    const B = styled.div`
        height: auto; 
        background-color: #79C7C5; 
        margin: none;
        display: flex;
    `;

    return (
        <>
            <A>
                <h1 className='text2'>TOP PICKS</h1>
            </A>
            <B>
                <Pokemon/>
            </B>
        </>
    )
}
export default Body