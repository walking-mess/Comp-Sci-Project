import React from 'react'
import styled from 'styled-components'


const Pokemon = () => {

    const PokeHouse = styled.div`
    display: flex;
    `
    const Ew = styled.div`
        height: 3.5vh;
        background-color: #79C7C5;
    `

    return (
        <div>
            <PokeHouse>
                <label class="container">
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                </label>
                <label class="container2">
                    <input type="checkbox"></input>
                    <span class="checkmark2"></span>
                </label>
                <label class="container3">
                    <input type="checkbox"></input>
                    <span class="checkmark3"></span>
                </label>
            </PokeHouse>
            
            <PokeHouse>
                <label class="container4">
                    <input type="checkbox"></input>
                    <span class="checkmark4"></span>
                </label>
                <label class="container5">
                    <input type="checkbox"></input>
                    <span class="checkmark5"></span>
                </label>
                <label class="container6">
                    <input type="checkbox"></input>
                    <span class="checkmark6"></span>
                </label>
            </PokeHouse>
            
            <PokeHouse>
                <label class="container7">
                    <input type="checkbox"></input>
                    <span class="checkmark7"></span>
                </label>
                <label class="container8">
                    <input type="checkbox"></input>
                    <span class="checkmark8"></span>
                </label>
                <label class="container9">
                    <input type="checkbox"></input>
                    <span class="checkmark9"></span>
                </label>
            </PokeHouse>
            <Ew/>
        </div>
    )
}

export default Pokemon
