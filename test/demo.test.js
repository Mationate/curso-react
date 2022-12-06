describe('Prueba en <Demo Component/>', () => { 
    test('Esta prueba no debe fallar', () => { 
        // * 1. Inicizialicación
        const msg1 = 'Hola';
        // * 2. Estímulo
        const msg2 = msg1.trim();
        // * 3. Observar comportamiento.. esperado
        expect(msg1).toBe(msg2);

    
    })
 })