function bat() {
let items = ['bat', 'ball', 'wicket'];
let chosenItem = items[Math.floor(Math.random() * items.length)];
console.log(chosenItem);

if(chosenItem=='wicket') {
    document.querySelector("h2").innerHTML='you lost'
} else if (chosenItem=='ball') {
    document.querySelector("h2").innerHTML='You Won'
} else {
    document.querySelector("h2").innerHTML='Match is draw'
}
}


function ball() {
    let items = ['bat', 'ball', 'wicket'];
    let chosenItem = items[Math.floor(Math.random() * items.length)];
    console.log(chosenItem);
    
    if(chosenItem=='wicket') {
        document.querySelector("h2").innerHTML='you lost'
    } else if (chosenItem=='bat') {
        document.querySelector("h2").innerHTML='You Won'
    } else {
        document.querySelector("h2").innerHTML='Match is draw'
    }
    }

    function wicket() {
        let items = ['bat', 'ball', 'wicket'];
        let chosenItem = items[Math.floor(Math.random() * items.length)];
        console.log(chosenItem);
        
        if(chosenItem=='ball') {
            document.querySelector("h2").innerHTML='you won'
        } else if (chosenItem=='bat') {
            document.querySelector("h2").innerHTML='You lost'
        } else {
            document.querySelector("h2").innerHTML='Match is draw'
        }
        }