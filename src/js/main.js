'use strict';

const allKeyButtons = document.querySelectorAll('.js-key');

for(const keyButton of allKeyButtons) {
  keyButton.addEventListener('click', clickOnKeyButton);
}

function clickOnKeyButton(event) {
  console.log(event.currentTarget.name);
  if(event.currentTarget.name === 'Do1') {
    const audioDo1 = new Audio('./assets/images/audio/do1.mp3');
    audioDo1.play();
  } else if(event.currentTarget.name === 'DoReb1') {
    const audioDoReb1 = new Audio('./assets/images/audio/dore1.mp3');
    audioDoReb1.play();
  } else if(event.currentTarget.name === 'Re1') {
    const audioRe1 = new Audio('./assets/images/audio/re1.mp3');
    audioRe1.play();
  } else if(event.currentTarget.name === 'ReMib1') {
    const audioReMib1 = new Audio('./assets/images/audio/remi1.mp3');
    audioReMib1.play();
  } else if(event.currentTarget.name === 'Mi1') {
    const audioMi1 = new Audio('./assets/images/audio/mi1.mp3');
    audioMi1.play();
  } else if(event.currentTarget.name === 'Fa1') {
    const audioFa1 = new Audio('./assets/images/audio/fa1.mp3');
    audioFa1.play();
  } else if(event.currentTarget.name === 'FaSolb1') {
    const audioFaSolb1 = new Audio('./assets/images/audio/fasol1.mp3');
    audioFaSolb1.play();
  } else if(event.currentTarget.name === 'Sol1') {
    const audioSol1 = new Audio('./assets/images/audio/sol1.mp3');
    audioSol1.play();
  } else if(event.currentTarget.name === 'SolLab1') {
    const audioSolLab1 = new Audio('./assets/images/audio/solla1.mp3');
    audioSolLab1.play();
  } else if(event.currentTarget.name === 'La1') {
    const audioLa1 = new Audio('./assets/images/audio/la1.mp3');
    audioLa1.play();
  } else if(event.currentTarget.name === 'LaSib1') {
    const audioLaSib1 = new Audio('./assets/images/audio/lasi1.mp3');
    audioLaSib1.play();
  } else if(event.currentTarget.name === 'Si1') {
    const audioSi1 = new Audio('./assets/images/audio/si1.mp3');
    audioSi1.play();
  } else if(event.currentTarget.name === 'Do2') {
    const audioDo2 = new Audio('./assets/images/audio/do2.mp3');
    audioDo2.play();
  } else if(event.currentTarget.name === 'DoReb2') {
    const audioDoReb2 = new Audio('./assets/images/audio/dore1.mp3');
    audioDoReb2.play();
  } else if(event.currentTarget.name === 'Re2') {
    const audioRe2 = new Audio('./assets/images/audio/re2.mp3');
    audioRe2.play();
  } else if(event.currentTarget.name === 'ReMib2') {
    const audioReMib2 = new Audio('./assets/images/audio/remi2.mp3');
    audioReMib2.play();
  } else if(event.currentTarget.name === 'Mi2') {
    const audioMi2 = new Audio('./assets/images/audio/mi2.mp3');
    audioMi2.play();
  } else if(event.currentTarget.name === 'Fa2') {
    const audioFa2 = new Audio('./assets/images/audio/fa2.mp3');
    audioFa2.play();
  } else if(event.currentTarget.name === 'FaSolb2') {
    const audioFaSolb2 = new Audio('./assets/images/audio/fasol2.mp3');
    audioFaSolb2.play();
  } else if(event.currentTarget.name === 'Sol2') {
    const audioSol2 = new Audio('./assets/images/audio/sol2.mp3');
    audioSol2.play();
  } else if(event.currentTarget.name === 'SolLab2') {
    const audioSolLab2 = new Audio('./assets/images/audio/solla2.mp3');
    audioSolLab2.play();
  } else if(event.currentTarget.name === 'La2') {
    const audioLa2 = new Audio('./assets/images/audio/la2.mp3');
    audioLa2.play();
  } else if(event.currentTarget.name === 'LaSib2') {
    const audioLaSib2 = new Audio('./assets/images/audio/lasi2.mp3');
    audioLaSib2.play();
  } else if(event.currentTarget.name === 'Si2') {
    const audioSi2 = new Audio('./assets/images/audio/si2.mp3');
    audioSi2.play();
  }
};