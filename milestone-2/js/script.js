const mainLinst = document.getElementById ('main-list');
// CREO LA CONDIZIONE 
for(let i = 1; i <= 100; i++) { 
    let fizzBuzz = i

    if(i % 5 === 0 && i % 3 === 0){
         fizzBuzz = 'fizzbuzz';
    }else if (i % 5 === 0){
         fizzBuzz = 'buzz';
    }else if (i % 3 === 0){
         fizzBuzz = 'fizz';
    }
    
    // Creo la lista in base alla condizione creata 
    mainLinst.innerHTML += `<li>${fizzBuzz}</li> ` 
  

}




