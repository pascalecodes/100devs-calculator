//create a calculator, that accepts user input of click numbers and operators and decimal numbers, recognize inputs and store values and return answer, display inputs as entered and results
//push to make the extra functionality like the percentage, negative and positive numbers, and accept multiple artihmetic operations. keep answer in memory until someone clear it pressed. Delete should remove the previous number dialed
//prevent invalid inputs(operators next to each other, 2 decimal points)

//Parameters: click of numbers, operators and clear
//Return: calculate and return answer to display
//examples: 2+3 = 5, 23+2 /5= 25, -2*10= -20
//Pseudo code:
//for on off button everything is off if clicked off, then turn on when pushed on

const keys= document.querySelector('.calcClickPad');
    keys.addEventListener('click', event => {
        const{target} = event;
        const {value} = target;
        if (!target.matches('button')){
            return;
        }else{
            calculator.parseInput(value)
            //console.log(value)
        }
    })

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value){
        if(this.displayText === '0'){
            this.displayText = ''
        }
        //have any of the special functions been clicked
        switch(value){
            case '=': 
                //calculate the answer
                break;
            case 'AC':
                //clear the screen and sotred values
                break;
            case 'DEL':
                //delete the last click
            case '+/-':
                //change to positive or negative
            case '.': 
                if(this.displayText == 0){
                    //pass '0.' into add text method
                }else {
                    //add value to text string
                }
                break;
            default:
                //add value to text string
        }
        addText(value){

        }
    }
}
