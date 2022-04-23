//create a calculator, that accepts user input of click numbers and operators and decimal numbers, recognize inputs and store values and return answer, display inputs as entered and results
//push to make the extra functionality like the percentage, negative and positive numbers, and accept multiple artihmetic operations. keep answer in memory until someone clear it pressed. Delete should remove the previous number dialed
//prevent invalid inputs(operators next to each other, 2 decimal points)

//Parameters: click of numbers, operators and clear
//Return: calculate and return answer to display
//examples: 2+3 = 5, 23+2 /5= 25, -2*10= -20
//Pseudo code:
//for on off button everything is off if clicked off, then turn on when pushed on, default it to start on, click to off


const keys= document.querySelector('.calcClickPad');
    keys.addEventListener('click', event => {
        const{target} = event;
        const {value} = target;
        if (!target.matches('button')){
            return;
        }else{
            calculator.parseInput(value)
            console.log(value)
        }
    })
let displayText = '0';

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value){
        //have any of the special functions been clicked
        //try add displayte
        switch(value){
            case '=': 
                //calculate the answer
                this.calcAnswer(this.displayText)
                break;
            case 'AC':
                //clear the screen and sotred values
                this.clearAll()
                break;
            case 'DEL':
                //delete the last click
                this.deletePrev()
            case '+/-':
                //change to positive or negative
            case 'on/off':
                //turn off or on calculator
                this.turnOnOff()
                break;
            case '.': 
                if(this.displayText == 0){
                    //pass '0.' into add text method
                    this.addText('0')
                }else {
                    //add value to text string
                    this.addText(value)
                }
                break;
            default:
                //add value to text string
                this.addText(value)
        }

        },
       
        addText(value){
            if(this.displayText === '0'){
                this.displayText = ''
            }else if(this.prevTotal !== null){
                this.displayText = this.prevTotal
                this.prevTotal = null
            }
            //--> change this check to put an if statement to check if the input is a number or an operator that was place in there
            if(isNaN(+(value)) && isNaN(+(this.displayText))){
                if(isNaN(this.displayText.slice(-1))){
                    return;
                }

            }
            this.displayText += value
            //output display text to screen
            this.outputText(this.displayText)
        },

        //method that will display text on screen
        outputText(text){
            //we are passing into an text element and not an html element so we don't use innerHTML
            document.querySelector('.calcScreen').value = text
        },
        //method to toggle screen on or off
        turnOnOff(){
            //add logic to turn display off
            if(this.displayText === '0'){               //if ON turn OFF
                this.displayText = null
                this.outputText(this.displayText)
                //disable the clickpad
                

            }else{                                      //else turn ON
                this.displayText = '0'              
                this.outputText(this.displayText)
            }
        },

        //method to do some calculations from the equation that is typed
        calcAnswer(equation){
            //pass in displayText and evalute the expression that is passed in after they called the method
            let result = Function('return ' + equation)()
            //if the displayText is not zero and you are doing a calculation then put the answer in displaytext
            this.outputText(result)
        },

        //method to clear the screen and values
        clearAll(){
            this.displayText = '0',
            this.prevTotal = null,
            this.outputText(this.displayText)
        },

        //-->>> still need to fix this method to delete the previous last inputed string or character
        deletePrev(){
            this.displayText = '0',
            this.outputText(this.displayText)
        }
    
}
