import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { LoginLogout } from './login-logout'


jest.mock('@auth0/nextjs-auth0/client', () => ({
    useUser: () => ({
        user: {
            name: 'Usuario de ejemplo',
            email: 'usuario@example.com',
        },
        error: undefined,
        isLoading: false,
    }),
}));


describe('LoginLogout Component', () => {
    test('renders login button when user is not authenticated', () => {
        render(<LoginLogout />)
        jest.spyOn(require('@auth0/nextjs-auth0/client'), 'useUser').mockReturnValueOnce({
            user: undefined,
            error: undefined,
            isLoading: false,
        })
    })
    test('El componente debe renderizarse', () => {
        render(<LoginLogout />)
        const welcomeMessage = screen.getByText(/Bienvenido al Generador de miniaturas/i);
        expect(welcomeMessage).toBeInTheDocument();
    })
    test('renders Logout button when user is logged in', () => {
        render(<LoginLogout />)
        const logoutLink = screen.getByRole('link', { name: /Logout/i });
        expect(logoutLink).toBeInTheDocument();
    })
})