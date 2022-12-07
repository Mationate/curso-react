import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar heroe por ID', () => { 
        const id = 1;
        const hero = getHeroeById(id);

        console.log(hero);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        } )
     })

     test('getHeroeById debe retornar undefined si no existe', () => { 
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toBeFalsy();
      })

           // debe retornar un arreglo con los heroes de DC
     // * lenght === 3
     // * toEqual al arreglo filtrado
     
      test('getHeroesByOwner devuelve 3 de DC', () => { 
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
        console.log(hero);
        expect(hero.length).toBe(3);
        expect(hero).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]
      );
      })

      test('getHeroesByOwner devuelve 2 de Marvel', () => { 
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        console.log(hero);
        expect(hero.length).toBe(2);
        expect(hero).toEqual( [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]);
       
      
      
      
      })

 });