import './index.css';
import numeral from 'numeral';

var number = 1000;

var testObject = {
	test: "",
	test1: ""
};
const courseValue = numeral(number).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course`);
console.log(testObject);
