//QUESTION NO.1

const challenge = new Map();
challenge.set(2020 , "paradise");
challenge.set(2019 , "green book ");
challenge.set(2018 , "the shape of water");
challenge.set(2017 , "moonlight");
challenge.set(2016 , "spotlight");
challenge.set(2015 , "birdman");
challenge.set(2014 , "12 year of slave");
challenge.set(2013 , "argo");

//QUESTION NO.2
const bestFilm = challenge.get(2015);
console.log("the film got the award in 2o15:",bestFilm);

//QUESTION NO.3

const filmSize = challenge.size;
console.log("the length of the list is",filmSize);

//QUESTION NO.4

const secondKey = challenge.keys();
secondKey.next();
const keyValue = secondKey.next().value;
console.log("the second key of our list is :",keyValue);

// //QUESTION NO.5
const containsMovie2010= challenge.has(2010);
 const containsMovie2018= challenge.has(2018);


 console.log("did the list contains best movie in 2010",containsMovie2010);
 console.log("did the list contains best movie in 2018",containsMovie2018);

//QUESTION NO.6

const thirdValue = challenge.values();
thirdValue.next();
thirdValue.next();
const thirdMovie = thirdValue.next().value;
console.log("the third value of the list is :",thirdMovie);

//QUESTION NO.7

const challengeEntry= challenge.entries();
const firstEntry= challengeEntry.next().value;
console.log("this is the first entry in the list:",firstEntry);

//QUESTION NO.8

Object.entries(challenge).forEach(([key , value])=>{
    for(key <2017){
        console.log(`the best film brfore 2017 ${key} ${value}`);
    }
})
//QUESTION NO.9
challenge.delete(2013);
console.log("list after delete :",challenge);

//QUESTION NO.10

challenge.clear();
console.log("my map is cleared ",challenge.size);