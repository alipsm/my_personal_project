import React, { Fragment } from 'react'
import get_random_text from './script_find_correct_text'

export default function Find_correct_text() {
    return (
        <Fragment>
            <div id='find_correct_text'>
                <h3 id="title">you are ready new challenge?</h3>
                <div id="container-txt">****</div>
                <input type="text" name="" id="input-txt" /> <br />
                <button id="check" onClick={() => {get_random_text() }}>start game</button>
                <div id="effore"></div>
            </div>
        </Fragment>
    )
}