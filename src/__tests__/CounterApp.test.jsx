import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterApp } from "../CounterApp.jsx";

describe('tests in Counter App', () => {
    
    const value = 100;

    test('debe de hacer match con el snapshot', () => {

        const {container} = render(<CounterApp value={value} />);

        expect(container).toMatchSnapshot();
    });

    test('should show the initial value 100', () => { 
        render(<CounterApp value={value} />);

        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('100');
        expect( screen.getByText(100)).toBeTruthy();
     });

     test('the button +1 should increment', () => { 
 
        render(<CounterApp value={value} />);
        userEvent.click( screen.getByText('+1') );
        
        expect( screen.getByText('101') ).toBeTruthy();
      });
     
      test('the button -1 should decrement', () => { 
  
        render(<CounterApp value={value} />);
        userEvent.click( screen.getByText('-1') );
        
        expect( screen.getByText('99') ).toBeTruthy();
      });
      
      test('the button reset must turn the value to its initial state', () => { 
  
        render(<CounterApp value={value} />);
        userEvent.click( screen.getByText('-1') );
        // userEvent.click( screen.getByText('Reset') );
        userEvent.click( screen.getByRole('button', { name: 'btn-reset' }));

        expect( screen.getByText('100') ).toBeTruthy();
      });

    });