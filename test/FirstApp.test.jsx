import { logDOM, render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp";

describe('pruebas en FirstApp', () => { 
    // test('debe hacer match con el snapshot', () => { 
    //     const title ='Hola, soy mati';
    //     const subtitule= 123;
    //     const {container} =render(<FirstApp title={title} subtitle={subtitule} />)
        
    //     expect(container).toMatchSnapshot();
    
    // })

    test('Debe mostrar el titulo en el h1', () => { 
        const title ='Hola, soy mati';
        const {container, getByText, getByTestId} = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy();

        expect(getByTestId('test-title').innerHTML).toContain(title);
        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toBe(title); NO PASARIA SI HAY ESPACIOS
        //* SI PASA
        //expect(h1.innerHTML).toContain(title);
     })


     test('debe mostrar el subtitulo enviado por props', () => { 
        const title ='Hola, soy mati';
        const subtitle ='Hola, soy subtitulo';
        const {getAllByText} = render(
            <FirstApp 
                title={title}
                subtitle={subtitle}
             />
        );

             expect(getAllByText(subtitle).length).toBe(2);
      })

 })