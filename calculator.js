
window.addEventListener("keyup", pressed_key, false);
/*i used switch statements to input the numbers from laptop's keyboard, i used javascript keyboard value to give input */
function pressed_key(event){
    switch(event.keyCode){
        case 13:
            equal();
            break;
        case 48:
            designate('0');
            break;
        case 49:
            designate('1');
            break;
        case 50:
            designate('2');
            break;
        case 51:
            designate('3');
            break;
        case 52:
            designate('4');
            break;
        case 53:
            designate('5');
            break;
        case 54:
            designate('6');
            break;
        case 55:
            designate('7');
            break;
        case 56:
            if (event.shiftKey){
                designate('*')
            } else{
                designate('8');
            }
            break;
        case 57:
            designate('9');
            break;
        case 8:
            del();
            break;
        case event.shiftKey && 187:
            designate('+');
            break;
        case 191:
            designate('/');
            break;
        case 189:
            designate('-');
            break;
        case 27:
            ac();
            break;
            case 13:
                equal();
                break;
            case 96:
                designate('0');
                break;
            case 97:
                designate('1');
                break;
            case 98:
                designate('2');
                break;
            case 99:
                designate('3');
                break;
            case 100:
                designate('4');
                break;
            case 101:
                designate('5');
                break;
            case 102:
                designate('6');
                break;
            case 103:
                designate('7');
                break;
            case 104:
                designate('8');
                break;
            case 105:
                designate('9');
                break;
            case 8:
                del();
                break;
            case 106:
                 designate('*')
                 break;
            case 107:
                designate('+');
                break;
            case 191:
                designate('/');
                break;
            case 109:
                designate('-');
                break;
            case 27:
                ac();
                break;
    }
}
/*i used different functions for all operation to make it works when user enter it in calculator*/ 
function designate(a){
    forms.display.value += a;
}


function del(){
    var war = forms.display.value;
    forms.display.value = war.substring(0, war.length-1);
}


function ac(){
    forms.display.value = "";
}


function equal(){
    forms.display.value = eval(forms.display.value);
}

function sqrt(){

    var qwerty = forms.display.value;

    var store = Math.sqrt(qwerty);
    forms.display.value = store;
}

function per(){
    var percentage = forms.display.value;
    var temp = eval(percentage);
    var anpercent = temp*100 + "%";
    forms.display.value = anpercent;
}

function  fact(){
    var n = forms.display.value;
    let answer = 1;
    if (n == 0 || n == 1){
      answer = 1;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      
    } 
    
    forms.display.value = answer;
}

function rad(){
    var radian = forms.display.value;
    var radia = (radian*180)/3.14;
    forms.display.value = radia;
}

function square(){
    var squared = forms.display.value;
    var redeeemd = Math.pow(squared,2);
    forms.display.value = redeeemd;
}

function logarithm(){
    var logarit = forms.display.value;
    var legit = Math.log10(logarit);
    forms.display.value = legit;
}

function lan(){
    var logarit = forms.display.value;
    var legit = Math.log(logarit);
    forms.display.value = legit;
}

function pi(){
    var pai = forms.display.value;
    var paai = pai * 3.141;
    forms.display.value = paai;
}

function sine(){
    var trignometry = forms.display.value;
    var result = Math.sin(trignometry);
    forms.display.value = result;

}

function cos(){
    var trignometry = forms.display.value;
    var result = Math.cos(trignometry);
    forms.display.value = result;
    
}
function tan(){
    var trignometry = forms.display.value;
    var result = Math.tan(trignometry);
    forms.display.value = result;
    
}

