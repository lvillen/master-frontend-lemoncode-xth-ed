// 5. Slot Machine

class SlothMachine {
    constructor() {
      this.counter = 0;
    }
  
    /* 
    Si quiero definir el contador al instanciar, y además asegurarme que si no se pasa argumento
      no me va a dar un NaN:
  
    constructor(counter = 0) {
      this.counter = counter;
    }
    */
  
    roulette() {
      return Math.random() > 0.5;
    }
  
    play() {
      this.counter += 1;
  
      if (this.roulette()  && this.roulette() && this.roulette()) {
        console.log(`Congratulations!!! You won ${this.counter} coins!!`)
        this.counter = 0;
      } else {
        console.log('Good luck next time!!')
      }
    }
  }
  
  const machine1 = new SlothMachine();
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"  