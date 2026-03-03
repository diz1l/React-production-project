import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderWithTranslation from 'shared/tests/renderWithTranslation/renderWithTranslation';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    test('should render', () => {
        renderWithTranslation(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>,
        );
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>,
        );
        const toggleBtn = screen.getByTestId('toggle-button');
        expect(toggleBtn).toBeInTheDocument();
        toggleBtn.click();
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        toggleBtn.click();
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
