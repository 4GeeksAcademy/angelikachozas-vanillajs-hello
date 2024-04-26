let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domainhacks =['es', 'com', 'net', 'us', 'io'];

pronoun.forEach(function(pronounItem) {
    adj.forEach(function(adjItem) {
        noun.forEach(function(nounItem) {
            domainhacks.forEach(function(domainhackItem) {
                let domainName = pronounItem + adjItem + nounItem + '.' + domainhackItem;
                console.log(domainName);
            });
        });
    });
});
// Este ejercicio hecho con .map() esta en el archivo app2.js