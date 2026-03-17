import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTranslation } from 'shared/tests';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
    test('should render login form with submit button', () => {
        renderWithTranslation(<LoginForm />);
        const submitBtn = screen.getByRole('button', { name: /^sign in$/i });
        expect(submitBtn).toBeInTheDocument();
    });

    test('should render welcome header', () => {
        renderWithTranslation(<LoginForm />);
        expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
    });

    test('should render subtitle', () => {
        renderWithTranslation(<LoginForm />);
        expect(screen.getByText(/sign in to your account/i)).toBeInTheDocument();
    });

    test('should render username input with label', () => {
        renderWithTranslation(<LoginForm />);
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/enter your username/i)).toBeInTheDocument();
    });

    test('should render password input with label', () => {
        renderWithTranslation(<LoginForm />);
        const passwordLabel = screen.getByText(/^password$/i);
        expect(passwordLabel).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/enter your password/i)).toBeInTheDocument();
    });

    test('password input should have type password by default', () => {
        renderWithTranslation(<LoginForm />);
        expect(screen.getByPlaceholderText(/enter your password/i))
            .toHaveAttribute('type', 'password');
    });

    test('should toggle password visibility on eye button click', async () => {
        renderWithTranslation(<LoginForm />);
        const passwordInput = screen.getByPlaceholderText(/enter your password/i);
        const toggleBtn = screen.getByRole('button', { name: /show password/i });

        expect(passwordInput).toHaveAttribute('type', 'password');

        await userEvent.click(toggleBtn);
        expect(passwordInput).toHaveAttribute('type', 'text');

        await userEvent.click(screen.getByRole('button', { name: /hide password/i }));
        expect(passwordInput).toHaveAttribute('type', 'password');
    });

    test('should render forgot password link', () => {
        renderWithTranslation(<LoginForm />);
        expect(screen.getByText(/forgot password/i)).toBeInTheDocument();
    });

    test('should render sign in submit button with correct type', () => {
        renderWithTranslation(<LoginForm />);
        const submitBtn = screen.getByRole('button', { name: /^sign in$/i });
        expect(submitBtn).toHaveAttribute('type', 'button');
    });

    test('should render footer with sign up link', () => {
        renderWithTranslation(<LoginForm />);
        expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    });

    test('should apply custom className', () => {
        const { container } = renderWithTranslation(<LoginForm className="custom" />);
        expect(container.firstChild).toHaveClass('custom');
    });
});
