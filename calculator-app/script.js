const displayScreen = document.querySelector('.display-screen')
const buttons = Array.from(document.querySelectorAll('.button'))
const bodyElem = document.querySelector('body');
let toggleBtns = document.getElementsByClassName('toggle');
let arr = [...toggleBtns];

const toggleTheme = () => {
    arr.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.style.opacity = '1';
        arr.filter((item) => { return item != btn}).forEach((item) => { item.style.opacity = '0'});
        document.body.addEventListener('change', (e) => {
            let target = e.target;
            switch (target.id) {
              case 'one':
                bodyElem.setAttribute('data-theme', 'one');
                break;
              case 'two':
                bodyElem.setAttribute('data-theme', 'two');
                break;
              case 'three':
                bodyElem.setAttribute('data-theme', 'three');
                break;
            }
          });
      });
    });
}

const calculate = () => {
  buttons.map( button => {
    button.addEventListener('click', (e) => {
      switch(e.target.innerText){
        case 'RESET':
          displayScreen.innerText = '';
          break;
        case '=':
          try{
            displayScreen.innerText = eval(displayScreen.innerText);
          } catch {
            displayScreen.innerText = 'Error'
          }
          break;
        case 'DEL':
          if (displayScreen.innerText){
            displayScreen.innerText = displayScreen.innerText.slice(0, 0);
          }
          break;
        default:
          displayScreen.innerText += e.target.innerText;
      }
    });
  });
}

window.addEventListener('load', () => {
  toggleTheme()
  calculate()
})
