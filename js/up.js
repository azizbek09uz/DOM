`use strict`;

document.addEventListener("DOMContentLoaded", () => {
  const drama = document.querySelector("#drama");
  const list = document.querySelector(".promo__interactive-list");
  const img = document.querySelectorAll(".promo__adv img");
  const back = document.querySelector("#promo"),
    input = document.querySelector(".adding__input"),
    form = document.querySelector(".add");
  const check = document.querySelector('#check')

  const newArrMove = [
    "Cukur",
    "Kurtlar Vaidisi",
    "Ichkarida",
    "Sulton Ahmedxon",
  ];

  drama.textContent = "COMEDY";

  img.forEach((e) => {
    e.remove();
  });

  function reMoveList() {
    list.textContent = "";

    newArrMove.sort();

    newArrMove.forEach((el, idx) => {
      list.innerHTML += ` <li class="promo__interactive-item">
                ${idx + 1}. ${el}
                <div class="delete"></div>
              </li>`;
    });

    const del = document.querySelectorAll('.delete')

    del.forEach((e ,idx) =>{
      e.addEventListener('click', ()=>{
        e.parentElement.remove()
        newArrMove.splice(idx,1)
      })
     })
    
   
  }

  function addMove() {
    let inpVal = input.value;
    if (inpVal.length > 18){
        inpVal = inpVal.slice(0, 18) + '...'
    }

    if (check ==! true){
        console.log('Sevimli serial qushildi')
    }

    newArrMove.push(inpVal);



    reMoveList();
  }

 
  reMoveList();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addMove();  

    

    
   if (check.checked) {
     console.log('Sevimli serial qo`shildi');
   }


    form.reset();
  });


  back.style.background = 'url("../img/1.jpg") bottom no-repeat';
});