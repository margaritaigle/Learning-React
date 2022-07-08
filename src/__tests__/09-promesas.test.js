import { getHeroeByIdAsync } from "../base-pruebas/09-promesas";
import { heroes } from "../data/heroes.js";

    describe('Pruebas en 09-promesas', () => { 
        test('getHeroeByIdAsync must return a heroe', (done) => { 
            
            const id = 1;
            getHeroeByIdAsync( id )
                .then( hero => {

                    expect(hero).toEqual({
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    })
                    done();
                })
                .catch( error => {
                    expect( error ).toBe(`No se pudo encontrar el héroe`);
                    done();
                })

         });
     });