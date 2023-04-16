const grid = document.querySelector('.grid')

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        grid.innerHTML = grid.innerHTML + `<div class="box fizzbuzz">fizzbuzz</div>`;
        // console.log('fizzbuzz')
    }
    else if (i % 5 == 0) {
        grid.innerHTML = grid.innerHTML + `<div class="box buzz">buzz</div>`;
        // console.log('buzz')
    } 
    else if (i % 3 == 0) {
        grid.innerHTML = grid.innerHTML + `<div class="box fizz">fizz</div>`;
        //   console.log("fizz");
    } 
     else {
        // console.log(i);
        grid.innerHTML = grid.innerHTML + `<div class="box">${i}</div>`;
    }
}