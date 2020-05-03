// `Actual Cannibal Shia Labeouf!`
let readlineSync = require('readline-sync');


    const textNodeOne = () => {
        const whatToDo = [`Look around`, `Call Out`, `Start walking`]
        console.log("\x1b[0m", `You're walking in the woods. There's no one around and your phone is dead`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            console.log(`You can't see anything through the trees, So you start beating feet.`)
            textNodeTwo()
        } else if(index === 1){
            console.log(`Your voice sounds muffled from the thickness of the trees. You start pushing your way forward.`)
            textNodeTwo()
        } else if(index === 2) {
            textNodeTwo()
        }
        else{
            console.log("make a choice!")
            textNodeOne()
        }
    }
    const textNodeTwo = () => {
        const whatToDo = [`Wave`, `Run!`,]
        console.log(`As you're walking out of the corner of your eyes YOU SEE HIM!`,"\x1b[31m", `(Shia Labeouf)` ,"\x1b[0m")
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            console.log(`You start to wave hi. He cocks his head to the sky and howls!`)
            textNodeThree()
        } else if(index === 1){
            textNodeThree()
        } else{
            console.log("make a choice!")
            textNodeOne()
        }
    }
    const textNodeThree = () => {
        const whatToDo = [`Run`, `Stand and Fight!`]
        console.log(`He's following you, about thirty feet back. He gets on all fours and breaks into a sprint!`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodeFour()
        } else if(index === 1){
            console.log("\x1b[31m", `Shia is just too strong to fight. He leaps on you and stabs you to death....`)
            textNodeDeath()
        } else{
            console.log("make a choice!")
            textNodeOne()
        }
    }
    const textNodeFour = () => {
        const whatToDo = [`Cue the Chorus!`]
        console.log(`\nYou're looking for your car, but you're all turned around!\n
        He's almost upon you now, and you can see there's blood on his face!\n
        My God, there's blood everywhere!`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodeFive()
        } else{
            textNodeFive()
        }
    }
    const textNodeFive = () => {
        const whatToDo = [`Next`]
        console.log("\x1b[1m", "\x1b[32m", `\nRunning for your life from Shia LaBeouf\n
        He's brandishing a knife, it's Shia LaBeouf\n
        Lurking in the shadows\n
        Hollywood superstar, Shia LaBeouf\n
        Living in the woods, Shia LaBeouf\n
        Killing for sport, Shia LaBeouf\n
        Eating all the bodies\n
        Actual cannibal Shia LaBeouf!`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodeSix()
        } else{
            textNodeSix()
        }
    }
    const textNodeSix = () => {
        const whatToDo = [`Go north`, `Go left`, `Go right`]
        console.log("\x1b[0m", `Now it's dark and you seem to have lost him. But you're hopelessly lost yourself. To your left you hear the sound of chopping wood.`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodeSeven()
        } else if(index === 1){
            console.log("\x1b[31m", `BAM! The silver sheen of an axeblade is the last thing you see. As your blood pools around you, you hear Shia Labeouf giggle to himself.`)
            textNodeDeath()
        } else{
            console.log("make a choice!")
            textNodeTwentyFour()
        }
    }
    const textNodeSeven = () => {
        const whatToDo = [`Inspect car`, `Hide underneath`, `Keep going`]
        console.log(`Walking what you can only guess is north, you come across the remnants of your car in the woods`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodeEight()
        } else if(index === 1){
            console.log("\x1b[31m", `The crunching of feet on twigs stops at the car. You feel Shia's hands around your ankles as he pulls you out from underneath and buries his axe iny your back!`)
            textNodeDeath()
        } else{
            console.log("make a choice!")
            textNodeTen()
        }
    }
    const textNodeTwentyFour = () => {
        const whatToDo = [`Follow River`, `Go to Light`, `Call for help.`]
        console.log(`Going right leads you to a river. You follow it and see a glow in through the trees!`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            console.log("\x1b[31m", `Just like a scene from Friday the 13th, Shia leaps out of the river, grabs you, and pulls you under!`)
            textNodeDeath()
        } else if(index === 1){
            textNodeTen()
        } else if(index === 2){
            console.log("\x1b[31m", `Your shouts have earned you a quick and muffled death by the hands of Shia Labeouf`)
            textNodeDeath()
        } 
        else{
            console.log("make a choice!")
            textNodeTwentyFour()
        }
    }
    const textNodeEight = () => {
        const whatToDo = [`Take Knife`, `Hide under car`, `RUN!`]
        console.log(`You find a knife lodged into what remains of the backseat of your car. You hear`, "\x1b[31m", `Shia`, "\x1b[0m", `holler into the night.`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            console.log(`You slide the knife into your back pocket. Make sure not to poke yourself in the butt...`)
            takenKnife = true
            textNodeTen()
        } else if(index === 1){
            console.log("\x1b[31m", `The crunching of feet on twigs stops at the car. You feel Shia's hands around your ankles as he pulls you out from underneath and buries his axe iny your back!`)
            textNodeDeath()
        } else if(index === 2){
            console.log(`You take off into the night away from`, "\x1b[31m", `Shia.`, "\x1b[0m")
            textNodeTen()
        }
        else{
            console.log("make a choice!")
            textNodeEight()
        }
    }
    const textNodeTen = () => {
        const whatToDo = [`Creep Foward`, `Call Out`, `Start walking`]
        console.log(`You wander in the inky night. Aha! in the distance you spot a small cottage with a light on!`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodeTwelve()
        } else if(index === 1){
            console.log("\x1b[31m", `The cottage door opens slowly and you stare down in disbelief as a crossbow bolt flies into your chest...`)
            textNodeDeath()
        } else if(index === 2){
            textNodeTwelve()
        } else{ 
            console.log("make a choice!")
            textNodeTen()
        }
    }
    const textNodeTwelve = () => {
        let whatToDo = [[`Gnaw off leg`, `Cry for help.`, `Pry trap`], [`Gnaw off leg`, `Cry for help`]]
        if (takenKnife === true) {
        whatToDo = whatToDo[0]} 
        else {
        whatToDo = whatToDo[1]
        }
        console.log(`Your leg! AH! It's caught in a bear trap!`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodeThirteen()
        } else if(index === 1){
            console.log("\x1b[31m", `Your cries are answered!...With an axe to the back of the head.`)
            textNodeDeath()
        } else if(index === 2) {
            console.log(`You broke your knife into pieces!`)
            takenKnife = false;
            textNodeTwelve()
        }
        else{
            console.log("make a choice!")
            textNodeTwelve()
        }
    }
    const textNodeThirteen = () => {
        const whatToDo = [`Go to the cottage`]
        console.log(`You gnaw and hack off your leg trying not to cry out in pain. You wrap it up as best as you can but you're losing a lot of blood.`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodeFourteen()
        }  else{
            console.log("There's only one choice here bub.")
            textNodeThirteen()
        }
    }
    const textNodeFourteen = () => {
        const whatToDo = [`Go inside`, `Head back into the woods`]
        console.log(`Limping towards the cottage `, "\x1b[32m", `(quiet quiet!) `, "\x1b[0m", `you get to the doorstep. Sitting inside is`, "\x1b[31m", `Shia Labeouf!`, "\x1b[0m")
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodeFifteen()
        } else if(index === 1){
            console.log("\x1b[31m", `The woods are so quiet and peaceful. You're so tired that you lay down to rest and dream of being in Shia's belly...`)
            textNodeDeath()
        } else{
            console.log("make a choice!")
            textNodeFourteen()
        }
    }
    const textNodeFifteen = () => {
        let whatToDo = [[`Strangle`, `Punch Shia`, `Stab Shia`], [`Strangle`, `Punch`]]
        if (takenKnife === true) {
        whatToDo = whatToDo[0]} 
        else {
        whatToDo = whatToDo[1]
        }
        console.log(`You open the door quietly but he doesn't hear you. He's sharpening an axe.`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodeSixteen()
        } else if(index === 1){
            console.log(`Shia gets up with murder in his eyes! You grab him by the throat!`)
            textNodeSixteen()
        } else if (index === 2){
            takenKnife = false
            textNodeSeventeen()
        } else {
            console.log(`Make a choice!`)
            textNodeFifteen()
        }
    }
    const textNodeSixteen = () => {
        const whatToDo = [`Try to grab knife`, `Squeeze Harder`]
        console.log(`As you wrap your arms around`, "\x1b[31m", `Shia's`, "\x1b[0m", `neck, he drops the axe. You both struggle towards the kitchen where`,"\x1b[31m", `Shia`, "\x1b[0m", `tries to grab a knife off the counter.`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodeSeventeen()
        } else if(index === 1){
            console.log("\x1b[31m", `All of that squeezing earned you a knife in the kidney!`)
            textNodeDeath()
        } else{
            console.log("make a choice!")
            textNodeSixteen()
        }
    }
    const textNodeSeventeen = () => {
        const whatToDo = [`Go outside`]
        console.log(`You stab him in the kidney! Safe at last from`, "\x1b[31m", `Shia Labeouf!`, "\x1b[0m")
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodeEighteen()
        } else{
            console.log("Only one choice here bub...")
            textNodeSeventeen()
        }
    }
    const textNodeEighteen = () => {
        const whatToDo = [`Sit down to clean wound`, `Walk into woods`]
        console.log(`You limp into the clearing outside. Blood is oozing out of your leg, but you're proud that you've beaten Shia Labeouf`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodeNineteen()
        } else if(index === 1){
            console.log("\x1b[31m", `The woods swirl and sway as your bloodloss finally catches up to you.`)
            textNodeDeath()
        } else{
            console.log("make a choice!")
            textNodeEighteen()
        }
    }
    const textNodeNineteen = () => {
        const whatToDo = [`Wrestle Gun`, `Run!`, `Jiu Jitsu!`]
        console.log(`But wait he's not dead!`, "\x1b[31m", `SHIA SURPRISE!`,"\x1b[0m", `There's a gun to your head and death in his eyes!`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            console.log("\x1b[31m", `You grab at the gun but slip over your stump leg...BANG!`)
            textNodeDeath()
        } else if(index === 1){
            console.log("\x1b[31m", `You really thought you were faster than a speeding bullet...? Okay SuperMan.`)
            textNodeDeath()
        } else if(index === 2){
            textNodeTwenty()
        } else{
            console.log("make a choice!")
            textNodeNinteen()
        }
    }
    const textNodeTwenty = () => {
        const whatToDo = [`Fight!`, `Run Away!`]
        console.log("\x1b[36m", `BUT YOU CAN DO JIU JITSU!`, "\x1b[0m", ` (Bet you didn't know you had it in you!) You body slam superstar`,"\x1b[31m", `Shia Labeouf!`, "\x1b[0m")
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodenTwentyOne()
        } else if(index === 1){
            console.log("\x1b[31m" `Lol you thought you were faster than a bullet`)
            textNodeDeath()
        } else{
            console.log("make a choice!")
            textNodeTwenty()
        }
    }
    const textNodenTwentyOne = () => {
        const whatToDo = [`Fight Harder!`, `Look for Gun`, `Grab Axe`]
        console.log(`This legendary fight with`, "\x1b[31m", `Shia Labeouf`, "\x1b[0m", `is just another normal Tuesday night for`, "\x1b[31m", `Shia Labeouf!`,"\x1b[0m", `As`, "\x1b[31m", `Shia`, "\x1b[0m", `is recovering from his body slam, you notice an axe lodged in the nearby tree.`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            console.log(`You stay locked in glorious combat! But your Jiu Jitsu is evenly matched against Shia's raw power!`)
            textNodenTwentyOne()
        } else if(index === 1){
            console.log("\x1b[31m", `Looking for a black gun in the black darkness of the black shadows of moonlight earned you an axe to the back!`)
            textNodeDeath()
        } else if (index === 2) {
            textNodeTwentyTwo()
        } else{
            console.log("make a choice!")
            textNodenTwentyOne()
        }
    }
    const textNodeTwentyTwo = () => {
        const whatToDo = [`Overhead Swing!`, `Swing to the right!`, `Try to block!`]
        console.log(`You try to swing an axe at`, "\x1b[31m", `Shia Labeouf!`, "\x1b[0m", `But blood is draining from your stump leg! He's dodging every swipe. He parries to the left!`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodeTwentyFive()
        } else if(index === 1){
            textNodeTwentyThree()
        } else if (index === 2){
            textnodetwentyfive()
        }   else {
            console.log("make a choice!")
            textNodeTwentyTwo()
        }
    }
    const textNodeTwentyFive = () => {
        const whatToDo = [`Swing with all your might!`, `Pray to baby Jeebus`]
        console.log(`Your axe slips as you miss! You scramble and grab it again as you hear`, "\x1b[31m", `Shia`, "\x1b[0m", `leap at you!`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            textNodeTwentyThree()
        } else if(index === 1){
            console.log("\x1b[31m", `Shia Labeouf hears your prayer but...doesn't care. It's grisly but now...You're stew.`)
            deathLoop()
        } else{
            console.log("make a choice!")
            textNodeOne()
        }
    }
    const textNodeTwentyThree = () => {
        const whatToDo = [`Victory!`]
        console.log("\x1b[34m", `You counter to the right, catching him in the neck! You're chopping off his head now. You have just decapitated Shia Labeouf. His head topples to the floor, expressionless. You fall to your knees and catch your breath. NOW You're finally safe from Shia Labouef.`)
        let index = readlineSync.keyInSelect(whatToDo, null ,{cancel : 'A choice is required...'})
        console.log(`You decided to ${whatToDo[index]}.`)
        if(index === 0){
            console.log("\x1b[47m", "\x1b[1m", "\x1b[30m", `Shia Labeouf has been defeated and you now own these woods!`)
            textNodeVictory()
        } else{
            console.log("Lavish in your choice!")
            textNodeTwentyThree()
        }
    }
    const textNodeVictory = () => {
        const victoryMessage = readlineSync.keyInYN(`Thank you for playing my macabre game. To see the inspiration from it, look up "Actual Cannibal Shia Labeouf" on Youtube. It's hilarious. Would you like to play again?`) ;
        if (victoryMessage === true) {
        console.log(`You won't survive this time!`)
        gameFlow()
        } else {
        console.log("Bye bye")
        process.exit()
        }
    }
    const textNodeDeath = () => {
        const deathNote = readlineSync.keyInYN(`Actual Cannibal Shia Labeouf is laughing as he's feasting on you! Play again? Y || N`);
        if (deathNote === true){
            console.log(`You're not going to make it....`)
            gameFlow()
        } else {
            console.log(`May Shia haunt your dreams!`)
        }
    }




    const gameFlow = () => {
        let firstChopice = textNodeOne()
}



let userName = readlineSync.question(`May I know who the victim is? \n`, {
    defaultInput: 'Victim'
}) 
console.log(`Welcome ${userName}...`)

let braveMeter = readlineSync.question(`How brave are you feeling?\n`, {
    defaultInput: 'too scared to answer'
});
console.log(`Oh... ${userName} is feeling ${braveMeter} brave eh? We'll see about that.`)

let lifePoints = 5;
let inventory = [];
let options = [];
let takenKnife = false

// Death Loop!
const deathLoop = () => {
    let deathLoop = readlineSync.question(`You died...Do you want to play again? y || n \n`);
    playAgain = playAgain.toLowerCase();
    if (playAgain === true) {
        let inventory = []
        let lifePoints = 5
        let textNodes = 0
    }
    else{
        console.log(`Shia can never be defeated!`)
        process.exit()
    }
}



// For YES/NO options!
let areYouReady = readlineSync.keyInYN(`Are you ready?`) ;
if (areYouReady === true) {
    console.log(`We'll see about that.`)
    gameFlow()
} else {
    console.log("Bye bye")
    process.exit()
}
