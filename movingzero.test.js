import { expect, test } from 'vitest'
import { moveZeros, movingzero } from "./movingzero"

test('devrait retourner un tableau avec les 0 à la fin', () => {
    const input = [1, 2, 0, 5, 3, 1];
    const expected = [1, 2, 5, 3, 1, 0];
    expect(moveZeros(input)).toEqual(expected);
    /* expect(moveZeros([1, 2, 0, 5, 3, 1])).toEqual([1, 2, 5, 3, 1, 0]); ça marche aussi*/
})

test('devrait retourner un tableau avec les 0 à la fin', () => {
    const input1 = [1, 2, 100, 5, 3, 1];
    const expected1 = [1, 2, 5, 3, 1, 0];
    expect(moveZeros(input1)).toEqual(expected1);
    /* avec un 100 ça ne marche pas*/
})

