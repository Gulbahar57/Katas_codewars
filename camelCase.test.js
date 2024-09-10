require("./camelCase.js") 

describe ('camelCase function', () => {
  
    test('devrait fonctionner correctement avec des mots séparés par des espaces', () => {
        expect("ceci est un test".camelCase()).toBe("CeciEstUnTest");
    });

    test('ne devrait pas modifier une chaîne sans espaces', () => {
        expect("bonjourlemonde".camelCase()).toBe("Bonjourlemonde");
        expect("ceciestuntest".camelCase()).toBe("Ceciestuntest");
    });

    test('devrait gérer correctement les chaînes vides et les espaces supplémentaires', () => {
        expect("".camelCase()).toBe("");
        expect("  bonjour  le  monde  ".camelCase()).toBe("BonjourLeMonde");
    });

    test('devrait tester correctement "gulbaharyahsi"', () => {
        expect("bonjourlemonde".camelCase()).toBe("BonjourLeMonde")
    })
});

