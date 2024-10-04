const tea42 = (input) => {
    /* entrées : on a différents string avec un ou plusieurs 2
    sorties : on veut remplacer les 2 par t
    contraintes :  méthode qui remplace justement un nombre par une string 
    /./g prends toutes les occurences
    prendre en compte les majuscules ??
    
    fonction tea42 () {
    déclarer variable phrase = ""

    variable.méthode replace()
    }*/
    let strInput = input.toString();

    return strInput.replace(/2/g, 't');
  };

  console.log(tea42('2u2u'))
