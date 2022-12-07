import {  render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp";

describe('pruebas en FirstApp', () => { 
    const title = 'Hola, soy mati';
    const subtitle= 'hola, soy subtitulo';
test('Debe hacer match con snapshot', () => { 
    const{container}=render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
 })

 test('should mostrar mensaje "Hola, soy mati"', () => { 
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug();
  })
  test('should mostrar titulo en un h1', () => { 
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading',{level: 1}).innerHTML).toContain(title);
   })
   test('should mostrar subtitlo enviado por props', () => { 
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);

    
    })

 })