var message;
var container;
var button;
var list_effort = [];
var check_start = false;
var list_name = ['ali', 'ahmad', 'reza','alireza','mohamad','maral','mariya','bahar','amir','heydar','amir ali'];
var list_name_Broken = ['lia', 'madah', 'zare','ezraial','ahommad','ralam','yiarma','haarb','mira','ydearh','mair ila'];
var effort = 0;
var select = 0;

export default function get_random_text() {
    message = document.getElementById('title');
    container = document.querySelector('#container-txt');
    button = document.getElementById('check');
    debugger
    button.innerHTML = 'check text';
    if (check_start === false) {
        select = Math.floor(Math.random() * 11);
        var element = document.createElement('p');
        element.innerHTML = list_name_Broken[select];
        element.style.fontSize = '30px';
        container.innerHTML=list_name_Broken[select];
        check_start = true;
        message.innerHTML = 'your effort is : ' + effort;
    }
    else {
        //effort++;
        message.innerHTML = 'your effort is : ' + ++effort;

        var txt = document.getElementById('input-txt').value;
        if (txt === list_name[select]) {

            document.getElementById('input-txt').style.backgroundColor = 'green';
            message.innerHTML = 'your win in ' + effort + ' effort';
            list_effort.push('name is :' + list_name[select] + '<br>' + 'your effort is :' + effort + '<hr>');

            let txt = document.createElement('p');
            txt.innerHTML = 'name is :' + list_name[select] + '<br>' + 'your effort is :' + effort + '<hr>';

            container.appendChild(txt);
            clear();
            setTimeout(clear_color, 3000);
        } else {
            document.getElementById('input-txt').style.backgroundColor = 'red';
            setTimeout(clear_color, 2000);
        }
    }

    function clear() {
        effort = 0;
        select = 0
        check_start = false;
        document.getElementById('input-txt').value = '';
        container[0].innerHTML = '';
        button.innerHTML = 'start game';
    }
    function clear_color() {
        document.getElementById('input-txt').style.backgroundColor = 'aliceblue';
    }
}