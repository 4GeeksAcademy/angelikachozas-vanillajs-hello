let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domainhacks =['es', 'com', 'net', 'us', 'io'];

let domainNames = pronoun.map(pronounItem =>
                    adj.map(adjItem =>
                    noun.map(nounItem =>
                    domainhacks.map(domainhackItem =>
    `${pronounItem}${adjItem}${nounItem}.${domainhackItem}`)
)));

for(let i = 0; i < domainNames.length; i++) {
    console.log(domainNames[i]);
}

// Este ejercicio hecho con .forEach() esta en el archivo app.js