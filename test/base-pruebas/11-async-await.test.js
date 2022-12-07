import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => { 
    test('getImage debe retornar un error si no tenemo api key', async() => { 
        const resp = await getImagen();
        console.log(resp);
        expect(typeof resp ).toBe('string');
     })
 })