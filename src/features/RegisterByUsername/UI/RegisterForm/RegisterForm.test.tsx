import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/tests';
import { RegisterForm } from './RegisterForm';

describe('RegisterForm', () => {
    test('should render the form', () => {
        renderWithTranslation(<RegisterForm />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('should render username input', () => {
        renderWithTranslation(<RegisterForm />);
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    });

    test('should render email input', () => {
        renderWithTranslation(<RegisterForm />);
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    test('should render password input', () => {
        renderWithTranslation(<RegisterForm />);
        expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    });

    test('should render confirm password input', () => {
        renderWithTranslation(<RegisterForm />);
        expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    });

    test('password inputs should have type password', () => {
        renderWithTranslation(<RegisterForm />);
        const passwordInputs = screen.getAllByDisplayValue('');
        const [, , password, confirm] = passwordInputs;
        expect(password).toHaveAttribute('type', 'password');
        expect(confirm).toHaveAttribute('type', 'password');
    });

    test('should apply custom className', () => {
        const { container } = renderWithTranslation(<RegisterForm className="custom" />);
        expect(container.firstChild).toHaveClass('custom');
    });
});
