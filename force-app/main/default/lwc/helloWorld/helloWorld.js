import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
        greeting = 'naveen';
        changeHandler(event) {
        this.greeting = event.target.value;
        }
}