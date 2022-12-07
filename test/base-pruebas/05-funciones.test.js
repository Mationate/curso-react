import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('pruebas en 05-test', () => { 
    test('getUser debe retornar objeto', () => { 
        const testUser={
        uid: 'ABC123',
        username: 'El_Papi1502'
        };
        const user = getUser();
        console.log(user);

        expect(testUser).toStrictEqual(user);
     })

     test('getUsuario debe retornar objeto', () => { 
        const name ='mati';
        const obj = {
            uid: 'ABC567',
            username: name
        }
        const object = getUsuarioActivo(name);
        console.log(obj);
        console.log(object);
        expect(object).toStrictEqual(obj);
      })
 })