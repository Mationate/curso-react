import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en counterapp', () => { 
    const value = 10;
    test('should match with snapshot', () => { 
        const{container}=render(<CounterApp value={value} />);
        expect(container).toMatchSnapshot();
     })
    test('should show initial count at 10', () => { 
        render(<CounterApp value={value} />);
        expect(screen.getByText('10')).toBeTruthy();
     })

     test('should increase with the +1 button', () => { 
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();

      })
      test('should decrease with the -1 button', () => { 
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
       })
       test('should reset at the reset button', () => { 
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        //* el name aquí es el ARIA-LABEL en el html
        fireEvent.click(screen.getByRole('button',{name: 'btn-reset'}));
        expect(screen.getByText(10)).toBeTruthy();
        // expect(screen.getByText('10')).toBeTruthy();
        })
 })