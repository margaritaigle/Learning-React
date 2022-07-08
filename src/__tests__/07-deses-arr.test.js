import { string } from "prop-types";
import { retornaArreglo } from "../base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {

    test('debe de retornar un string y un numero', () => {
        const [letras, numeros] = retornaArreglo();
        
        expect(letras).toBe( 'ABC');
        expect(numeros).toBe(123);

        expect( typeof letras ).toBe('string');
        expect( typeof numeros ).toBe('number');
    });
});