/* la méthode break => empêche la boucle de continuer à parcourir les autres éléments du tableau en fonction de la condition écrite 
et la méthode continue => permet de continuer de parcourir le tableau jusqu'au moment où il trouve ce qu'il faut en fonction de la condition écrite */

const grabDoll = (dolls) => {
    
    /* déclaration d'un tableau */
    let bag = [];

    /* éxecution d'une boucle avec le parcours du paramètres dolls */
    for (let i = 0; i < dolls.length; i++) {

        /* condition pour savoir s'il y a untel ou untel et après push dans le tableau déclaré au-dessus */
        if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll"){
            bag.push(dolls[i]);
        } else 
        /* si les éléments ne sont pas présents on continue de parcourir le tableau avec la méthode continue */
            continue;

        /* condition pour voir si le tableau a + de 3 éléments on utilise la méthode break pour sortir de la boucle */
    if(bag.length===3) break;
    }
    return bag; //on retourne le tableau parce que c'est ce qu'on veut
}

/* console.log(grabDoll('Hello Kitty')); */

/* trouvé sur internet sur ce lien = https://learnersbucket.com/examples/javascript/how-to-format-phone-number-in-javascript/ */

const createPhoneNumber = (numbers) => {

    let cleaned = (''+ numbers).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match){
        return '(' + match[1] + ') ' + match[2] + '-' + match[3] 
        };
    return null
}
/* console.log(createPhoneNumber(1234567890)); */

/* ma solution je déclare une variable avec le format dedans, ensuite je fais une boucle pour parcourir la longueur de mon paramètre et je remplace les 'x' par des les nombres et j'oublie pas de retourner le formats*/

const createNumber = (numbers) => {
    let format = "(xxx) xxx-xxxx";

    for(let i=0; i<numbers.length; i++){
        format = format.replace('x', numbers[i]);
    }
    return format;
}

/* console.assert(createNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])==="(123) 456-7890","doit retourner le bon numéro") */

/* console.log(createNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); */

/* kata (implémenter des tests unitaires), camelCase */

String.prototype.camelCase=function() {

        return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
    }

console.log("gulbaharyahsi".camelCase());