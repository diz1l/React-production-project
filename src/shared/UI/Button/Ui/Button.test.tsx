import { render, screen } from "@testing-library/react";
import { ButtonEl, ButtonTheme } from "./ButtonEl";


describe('Button', () => {
    test('should render', () => {
        render(
            <ButtonEl>Test</ButtonEl>
        );
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('should render with classes', () => {
        render(
            <ButtonEl theme={ButtonTheme.CLEAR}>Test</ButtonEl>
        );
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
