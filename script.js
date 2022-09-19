class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    clear(){
        this.count = 0;
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = '';
    }
    delete(){
        this.currentOperand = this.currentOperand.substring(0, this.currentOperand.length - 1);
    }
    chooseOperation(operation){
        if(this.operation !== ''){
            console.log('pocitam mezipocet')
            if(this.operation === '+'){
                this.count = Number(this.previousOperand) + Number(this.currentOperand);
            }else if(this.operation === '-'){
                this.count = Number(this.previousOperand) - Number(this.currentOperand);
            }else if(this.operation === '*'){
                this.count = this.previousOperand * this.currentOperand;
            }else if(this.operation === '/'){
                if(this.currentOperand === '0'){
                    console.log("division by zero error");
                    return;
                }
                this.count = this.previousOperand / this.currentOperand;
            }
            this.previousOperand = this.count;
        }else{
            this.previousOperand = this.currentOperand;
        }
        this.operation = operation;
        this.currentOperand = '';
    }
    compute(){
        console.log("compute");
        if(this.operation === '+'){
            this.count = Number(this.previousOperand) + Number(this.currentOperand);
        }else if(this.operation === '-'){
            this.count = Number(this.previousOperand) - Number(this.currentOperand);
        }else if(this.operation === '*'){
            this.count = this.previousOperand * this.currentOperand;
        }else if(this.operation === '/'){
            if(this.currentOperand === '0'){
                console.log("division by zero error");
                return;
            }
            this.count = this.previousOperand / this.currentOperand;
        }
        console.log(this.count);
        this.currentOperand = String(this.count);
        this.previousOperand = '';
        this.operation = '';
    }
    appendNumber(number){
        if(!(number === '.' && this.currentOperand.includes('.'))){
            this.currentOperand = this.currentOperand + number.toString();
        }
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand + this.operation;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})