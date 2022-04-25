const firstPerson = {
    name:"Peter",
    sex:"male" 
}

const secondPerson = {
    name:"Sarah",
    sex:"female"
}

function detectSex(person){
    console.log(person)
    if (person.sex === "female") {
        return "This person is female."
    } else if(person.sex === "male") {
        return "This person is male."
    }else{
        return "The person's sex is not female nor male."
    }
}

console.log(detectSex(firstPerson));

console.log(detectSex(secondPerson));

console.log(detectSex({
    name:"Penelope",
    sex:"female2"
}));