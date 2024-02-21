import { getSession, Session } from '@auth0/nextjs-auth0';

import { GetServerSideProps } from 'next';


const user = getSession();


export default function ProfileServer(user: any) {
    console.log(user)
    return (
        user && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
}

export const getServerSideProps: GetServerSideProps<ProfileProps> = async () => {
    const session: Session | null | undefined = await getSession();

    if (!session || !session.user) {
        return {
            props: {
                user: null
            }
        };
    }

    const { user } = session;

    return {
        props: {
            user
        }
    };
};
