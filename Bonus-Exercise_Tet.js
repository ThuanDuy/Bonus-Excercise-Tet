const x = 100;
const result = (x < 1000) ? "nhỏ hơn 1000" : "lớn hơn hoặc bằng 1000";
console.log(result);
/* Toán tử ba ngôi */

let variable1 = 1;
const variable2 = variable1 || "";
console.log(variable2);
/* Shorthand Evaluated */

let x,y,z=3;
console.log(x,y,z);
/* Variable declaration */

let isTurnOn;
if(isTurnOn){
    isTurnOn=true;
}
console.log(isTurnOn);
/* If Comparison */

let sampleArr=5;
for(let i = 0 ; i<sampleArr ; i++){
    console.log(i);
}
/* For loop */

for (let i = 0; i<1e1 ; i++){
    console.log(i);
}
/* For loop with decimal base */

const x=1 , y=2;
const obj = {x, y};
console.log(obj);
/* Object property */

sayHello = name => console.log('Hello',name);
setTimeout(() => console.log('Loaded'),2000);
List.forEach(item => console.log(item));
/* Rút gọn định nghĩa function */

getValue = ratio => ratio*6.9;
/* Implicit return (ẩn return đi bằng arrow function) */

getValue = (a,b=3,c=4) => (a*b+c);
/* Set default value for parameter in function */

const welcome = `You have logged in as ${first} ${last} .`;
/* Template list */

import {action, service} from 'lib';
const {form, errors, entity, controller, component} = this.props;
/* Destructuring Assignment */

const odd = [1,3,5];
const nums = [2,...odd, 4, 6];
/* Spead Operator */

mandatory = () => {throw new Error('Thieu tham so!');}
sample = (param1 = mandatory()) => param1
/* Constraint Param */

const name = 'Emp A'
emp = employees.find(item => item.name === name)
/* Find() in arrays */

const rule = {
    firstName: {
        required:true
    },
    lastName: {
        required:true
    }
}

const validate = (rule, values) => {
    for(prop in  rule) {
        if(rule[prop].required) {
            if(!values[prop]) {
                return false;
            }
        }
    }
    return true;
}
console.log(validate(rule, {firstName: 'Duy'}));
console.log(validate(rule, {firstName: 'Duy' ,lastName: 'Buffet'}));
/* Object[key] */