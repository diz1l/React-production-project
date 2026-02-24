import { screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { renderWithTranslation } from "shared/tests";


describe('Sidebar', () => {
    test('should render', () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<Sidebar/>);
        const toggleBtn = screen.getByTestId('toggle-button');
        expect(toggleBtn).toBeInTheDocument();
        toggleBtn.click();
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        toggleBtn.click();
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});