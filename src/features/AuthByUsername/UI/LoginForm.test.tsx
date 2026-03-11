import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/tests';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
    test('should render the form', () => {
        renderWithTranslation(<LoginForm />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('should render username input', () => {
        renderWithTranslation(<LoginForm />);
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    });

    test('should render password input', () => {
        renderWithTranslation(<LoginForm />);
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    test('password input should have type password', () => {
        renderWithTranslation(<LoginForm />);
        expect(screen.getByLabelText(/password/i)).toHaveAttribute('type', 'password');
    });

    test('should render forgot password link', () => {
        renderWithTranslation(<LoginForm />);
        expect(screen.getByText(/forgot password/i)).toBeInTheDocument();
    });

    test('should apply custom className', () => {
        const { container } = renderWithTranslation(<LoginForm className="custom" />);
        expect(container.firstChild).toHaveClass('custom');
    });
});
