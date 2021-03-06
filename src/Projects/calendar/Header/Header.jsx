import { React, useContext } from 'react'
import { Button, Alert, Badge } from 'react-bootstrap'

import SimpleContext from '../Context/SimpleContext'
const Header = () => {
    const context = useContext(SimpleContext);

    const { ListPersons } = context;
    var Color_Badge = "";
    if (ListPersons.length > 5) {
        Color_Badge = "success"
    }
    else if (ListPersons.length < 3) {
        Color_Badge = "danger"
    }
    else {
        Color_Badge = "warning"
    }
    return (<SimpleContext.Consumer>
        {context => (
            <form action='#' onSubmit={event => event.preventDefault()} className="box_obj">
                <Alert className='alert_title' id='Close'>
                    <p> Please write your information and click <kbd className="bg-success h-25">Add My Program</kbd></p>
                </Alert>
                <br />
                <Badge pill bg='light' text='dark' className='p-2 display-3 ' >Youre lenght list program is <Badge bg={Color_Badge}>{context.ListPersons.length}</Badge> 👀</Badge>
                <br />
                <div >
                    <div id='div_text_style'>
                        <input id='input_text_style' className="Clear" type="text" onChange={event => { context.set_name_age({ name: event.target.value }) }} placeholder="please type title program" />
                        <span className="span_text_style bottom"></span>
                        <span className="span_text_style right"></span>
                        <span className="span_text_style top"></span>
                        <span className="span_text_style left"></span>
                    </div>
                </div>
                <div >
                    <div id='div_text_style'>
                        <textarea id='input_text_style' className="Clear description_program" onChange={event => { context.set_name_age({ age: event.target.value }) }} placeholder="please type your program" >
                        </textarea>
                        <span className="span_text_style bottom"></span>
                        <span className="span_text_style right"></span>
                        <span className="span_text_style top"></span>
                        <span className="span_text_style left"></span>
                    </div>
                </div>
                <br />
                <Button type='submit' id='btn_submit' onClick={context.add_persons} className="mt-1">Add My Program</Button>
                <br />
                <br />
                <Button onClick={context.show_or_hiden} className={`${context.showList ? "btn-warning" : "btn-info"} btn_toggle_show`}>
                    {context.showList ? "HIDEN" : "SHOW"}
                </Button>
                <hr />
            </form>
        )}
    </SimpleContext.Consumer>
    )
}
export default Header