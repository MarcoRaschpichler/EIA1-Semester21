namespace Aufgabe7 {


  var indexZahler: number = 0;
      var samples: HTMLAudioElement[] = [new Audio('snare.mp3'), new Audio('laugh1.mp3'), new Audio('laugh2.mp3'), new Audio('kick.mp3'), new Audio('hihat.mp3'), new Audio('G.mp3'), new Audio('.mp3'), new Audio('C.mp3'), new Audio('A.mp3')]
  var   playbuttonSamples:HTMLAudioElement[] = [new Audio ('kick.mp3'), new Audio ('snare.mp3'), new Audio ('hihat.mp3')];
  
      
      document.querySelector('.button1').addEventListener('click', function () { playSample(samples[0]) });
      document.querySelector('.button2').addEventListener('click', function () { playSample(samples[1]) });
      document.querySelector('.button3').addEventListener('click', function () { playSample(samples[2]) });
      document.querySelector('.button4').addEventListener('click', function () { playSample(samples[3]) });
      document.querySelector('.button5').addEventListener('click', function () { playSample(samples[4]) });
      document.querySelector('.button6').addEventListener('click', function () { playSample(samples[5]) });
      document.querySelector('.button7').addEventListener('click', function () { playSample(samples[6]) });
      document.querySelector('.button8').addEventListener('click', function () { playSample(samples[7]) });
      document.querySelector('.button9').addEventListener('click', function () { playSample(samples[8]) });
      document.querySelector('.playbutton').addEventListener('click',  function () { setInterval (function() {
          playbuttonSamples[indexZahler].play();
              indexZahler= indexZahler + 1;
              
      },1000 );
       });
  
  
  
  
  
  
  
  
   }
  
          
          
  
  
      function playSample(sound: HTMLAudioElement) {
  
          sound.play()
  
  
      }