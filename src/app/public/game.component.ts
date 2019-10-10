import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./common.component.css']
})
export class GameComponent {
  title = 'Game';
// tslint:disable-next-line: max-line-length
words = ['elephant', 'monkey', 'rabbit', 'gorilla', 'peacock', 'butterfly', 'housefly', 'aeroplane', 'banana', 'rose', 'jamoon', 'lover', 'father', , 'mother', 'pubg', 'cricket', 'ludo'];
incorrectletterschoosen = [];
correctletterschoosen = [];
gusses = 6;
displayword = '';
msg = '';
hintname = 'is available for only last chance';
index1 = 0;
input = {
    letter: ''
}
selectedword='';


newgame=function() {
  this.incorrectletterschoosen = [];
  this.correctletterschoosen = [];
  this.gusses = 6;
  this.msg='';
  this.displayword = '';
  var index = Math.round(Math.random() * this.words.length);
  this.index1 = index;
  this. selectedword = this.words[index];
  console.log(this.selectedword);
  let tempdisplay = '';
  for (let i = 0; i < this.selectedword.length; i++)
  {
      tempdisplay += '*';
  }
  this.displayword = tempdisplay;
}

letterchoosen()
{
    for (let i = 0; i < this.correctletterschoosen.length; i++)
    {
       if (this.correctletterschoosen[i].toLowerCase() == this.input.letter.toLowerCase()){
        this.input.letter = '';
            return;
       }
    }
    for (let i = 0; i < this.incorrectletterschoosen.length; i++)
    {
       if (this.incorrectletterschoosen[i].toLowerCase() == this.input.letter.toLowerCase()){
        this.input.letter = '';
            return;
       }
    }
    let correct = false;
    for (let i = 0; i < this.selectedword.length; i++)
    {
        if (this.selectedword[i].toLowerCase() == this.input.letter.toLowerCase() && this.displayword[i] == '*')
        {
            let temp = this.displayword.substr(0, i) + this.input.letter.toLowerCase() + this.displayword.substr(i + 1, this.displayword.length);
            this.displayword = temp;
            correct = true;
        }
    }
    if (correct)
    {
        this.correctletterschoosen.push(this.input.letter.toLowerCase());
    }
    else{
        this.incorrectletterschoosen.push(this.input.letter.toLowerCase());
        this.gusses = this.gusses - 1;
    }
    this.input.letter = '';
    if (this.gusses < 1)
    {
        this.msg = 'Sorry you have lost the game try again ??? The Word is ' + this.selectedword;
    }
    if (this.selectedword.toLowerCase() == this.displayword.toLowerCase())
    {
        this.msg = 'Congrulations you have won the game ///';
    }
    if (this.gusses == 1)
    {
        if (this.index1 <= 3)
{
    this.hintname = 'Animal name';
}
if (this.index1 == 3)
{
    this.hintname = 'esds employee';
}
else if (this.index1 == 4)
{
    this.hintname = 'bird name';
}
else if (this.index1 <= 6)
{
    this.hintname = 'insect name';
}
else if (this.index1 == 7)
{
    this.hintname = 'Automobile name';
}
else if (this.index1 == 8)
{
    this.hintname = 'fruit name';
}
else if (this.index1 == 9)
{
    this.hintname = 'flower name';
}
else if (this.index1 == 10)
{
    this.hintname = 'sweet name';
}
else if (this.index1 <= 13)
{
    this.hintname = 'relation ship name';
}
else if (this.index1 == 16)
{
    this.hintname = 'game name';
}
    }
}





}
