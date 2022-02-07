const board = document.querySelector('#board');
const SQUARES_NUMBER = 1000;
const colors = ['#f1ce06', '#fa9006', '#faea06', '#cdfa06', '#fdff70', '#ffea70', 
'#70eaff', '#70ffdb' ];

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', ()=>{
        setColor(square);
    });

    square.addEventListener('mouseleave', ()=>{
        removeColor(square);
    });

    board.append(square);
}

function setColor (element) {
     const color = getRandomColor();
    element.style.backgroundColor =  color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor (element) {
    element.style.backgroundColor = '#040446';
     element.style.boxShadow = '0 0 2px darkslateblue';
}

function getRandomColor (){
   const index = Math.floor( Math.random() * colors.length);
   console.log(index);
   return colors[index];
}