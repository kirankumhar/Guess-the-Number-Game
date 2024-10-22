let userConsent = confirm("Welcome to 'Guess A Number game'");

if(userConsent){

    let computerNumber = Math.ceil(Math.random()*10);
    console.log(computerNumber);
    let counter = 0
    while(counter<3){
        let userGuessed = prompt("Please enter a Number");
        if(userGuessed == computerNumber){
            alert("Awesome you guessed right number");
            break
        }else{
            alert("Sorry Wrong number")
        }
        counter+= 1
    }
    if(counter == 3){
        alert("Sorry only 3 guesses allowed");
    }

}else{
    alert("Ok! May be next time");
}


// console.log(ranNumber);

