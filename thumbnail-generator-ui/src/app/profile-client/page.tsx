import { useUser } from '@auth0/nextjs-auth0/client';

export default function ProfileClient() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    // Verificar si user.picture no es null ni undefined
    const pictureSrc = user?.picture;

    return (
        user && (
            <div>
                {/* Usar la variable pictureSrc que ya ha sido verificada */}
                {/* <img src={pictureSrc} alt={user.name} /> */}
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
}

