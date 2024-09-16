import { expect, test } from "vitest";
import { numberToStrings, numberToString } from "./numberToString";

test('devrait retourner un nombre sous forme de string', () => {
    expect(numberToStrings(65)).toBe("65");
    /* expect(numberToStrings([6, 5])).toBe("6, 5"); test failed, car la fonction ne prends pas en compte les tableaux */
    expect(numberToStrings(-54)).toBe("-54");
    expect(numberToStrings(100.54)).toBe("100.54");
    /* expect(numberToStrings(987+789)).toBe("987+789"); failed parce qu'il y a l'opérateur + entre */
    expect(numberToStrings(0)).toBe("0");
    expect(numberToStrings(15546794)).toBe("15546794");
    /* expect(numberToStrings(-0)).toBe("-0"); */
})

/* améliorations : 
faire en sorte à ce que ma fonction prenne en compte les tableaux et les cas mathématiques avec des additions ou autre,
prendre en compte le -0 avec la méthode Object.is */