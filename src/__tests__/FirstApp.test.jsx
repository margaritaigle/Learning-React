import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";


describe('Pruebas en FirstApp', () => { 

    test('debe de hacer match con el snapshot', () => { 

        // const title = "Hola, soy Nilda"
        // const {container} = render( <FirstApp title={title}/> )

        // expect(container).toMatchSnapshot()
     });

     test('debe de mostrar el titulo en un h1', () => { 

        const title = "Hola, soy Nilda"
        const {container, getByText, getByTestId} = render( <FirstApp title={title}/> )

        expect( getByText(title) ).toBeTruthy()

        // const h1 = container.querySelector('h1');
        // console.log(h1.innerHTML);
        // expect(h1.innerHTML).toContain(title);

        expect( getByTestId('test-title').innerHTML ).toContain(title);

        // toBe se asegura que sean identicos, toContain no
     });

     test('debe mostrar el subtitulo enviado por props', () => { 

        const title = 'Hola, soy Nilda';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render(
            <FirstApp 
            title={title} 
            subtitle={subTitle}
            />
        );

        expect( getAllByText(subTitle).length ).toBe(2);
        // getAll me devuelve un array
      })
 });