import { expect, test } from 'vitest'
import { camelCase } from "./camelCase"

    test('devrait fonctionner correctement avec des mots séparés par des espaces', () => {
        expect(camelCase("ceci est un test")).toBe("CeciEstUnTest");
    });

    test('ne devrait pas modifier une chaîne sans espaces', () => {
        expect(camelCase("bonjourlemonde")).toBe("Bonjourlemonde");
        expect(camelCase("ceciestuntest")).toBe("Ceciestuntest");
    });

    test('devrait gérer correctement les chaînes vides et les espaces supplémentaires', () => {
        expect(camelCase("")).toBe("");
        expect(camelCase("  bonjour  le  monde  ")).toBe("BonjourLeMonde");
    });

    test('devrait tester correctement "bonjourlemonde"', () => {
        expect(camelCase("bonjourlemonde")).toBe("BonjourLeMonde")
    })


