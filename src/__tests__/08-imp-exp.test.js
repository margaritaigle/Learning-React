import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp";
import heroes from "../data/heroes.js"

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un heroe por ID', () => {

        const id = 1;
        const heroe = getHeroeById( id );
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroesByOwner to return heroes of marvel and then of DC', () => { 
        const owner = 'Marvel';
        const heroesOfMarvel = getHeroesByOwner(owner);
        
        const owner2 = 'DC';
        const heroesOfDc = getHeroesByOwner(owner2); 
       
        expect( heroesOfMarvel ).toEqual( heroesOfMarvel.filter( (heroe) => heroe.owner === owner));
        expect( heroesOfMarvel ).toHaveLength( 2 );
        
        expect( heroesOfDc ).toEqual( heroesOfDc.filter( (heroe) => { return heroe.owner === owner2} ));
        expect( heroesOfDc ).toHaveLength(3);
    });
    
});