import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";


describe('Pruebas en FirstApp', () => {

    const title = "Hola, soy Nilda";
    const subTitle = "Soy un subtitulo";

    test('should match with snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });

    test('should show the message "Hola, soy Nilda"', () => {

        render(<FirstApp title={title} />);
        //  screen.debug();
        expect(screen.getByText(title)).toBeTruthy();

    });

    test('should show the title in a h1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('should show the subtitle sent by props', () => {
        render(
            <FirstApp
                title={title}
                subtitle={subTitle}
            />
        );
        
        expect( screen.getAllByText(subTitle).length ).toBe(2); 
    });
});