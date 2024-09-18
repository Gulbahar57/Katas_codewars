import {expect, test} from "vitest"
import { getVillainName, villainName } from "./villainName"

test("sortir le villain name avec le mois et la prise en compte du dernier chiffre de la journée", () => {
    expect(getVillainName(new Date(2024, 0, 1))).toBe("The Evil Pickle");
    expect(getVillainName(new Date(2024, 9, 15))).toBe("The Orange Potato");
    expect(getVillainName(new Date(2024, 11, 31))).toBe("The Arkward Pickle"); /* 11 car en JS les mois vont de 0 à 11, décembre = 11 */
})