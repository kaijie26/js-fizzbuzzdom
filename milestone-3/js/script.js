const numbersContainer = document.getElementById('numbers-container');
// Creo la condizione
for(let i = 1; i <= 100; i++) {
    // Assegno ad una variabile il nome della classe per il colore
    // Se è sia multiplo di 3 e 5 "fizzbuzz", se è multiplo di 5 "buzz", se è multiplo di 3 "fizz"
    
     let colorClassName = i;
     if(i % 5 === 0 && i % 3 === 0){
         colorClassName = 'fizzbuzz'
     }else if (i % 5 === 0){
         colorClassName = 'buzz'
        
     }else if (i % 3 === 0){
         colorClassName = 'fizz'
     }

    // Creo i div box
    const newBox = `<div class="box ${colorClassName} ">${colorClassName}</div>`
    
    // Concateno i box a numberContainer
    numbersContainer.innerHTML += newBox;

}


