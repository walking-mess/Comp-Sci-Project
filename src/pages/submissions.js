import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';


const Submissions = () => {
    const House = styled.div`
        padding-left:5%;
        padding-right: 5%;
        padding-top: 1.5%;
        padding-bottom: 1.5%;
    `
    const Background = styled.div`
        background-color: #99D19C;
    `

    function Nice(){
        window.location.reload();
        alert("Your information has been submitted. Thank you.");
    }

    return (
        <div>
            <Background>
                <House>
                    <h1 className='text3'>Pokemon Information Submissions</h1>
                    <input className='submission' placeholder="Please type here..."></input>
                    <button className='button' onClick={Nice}>Submit</button>
                </House>
            </Background>
        </div>
    )
}

export default Submissions
