import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calculator.component.html',
  styleUrls: ['./common.component.css']
})
export class CalculatorComponent {
  title = 'Angularnew';
  result = '';
  input = '';
  calculate() {
    var temp = this.input;
    if (isNaN(parseFloat(temp))) {
        this.result = 'This Expression cannot be evaluated';
    } else {
    // tslint:disable-next-line: max-line-length
    if ( temp.includes('@') || temp.includes('#') || temp.includes('!') || temp.includes('$') || temp.includes('&') || temp.includes('_') || temp.includes('~') || temp.includes(';') || temp.includes(':') || temp.includes('>') || temp.includes('<')) {
        this.result = 'This Expression cannot be evaluated';
    } else {
        this.result = eval(this.input);
    }
  }
}
}
