import { FC, ReactNode } from 'react';

type AuthProps = {children: ReactNode};
const AuthLayout: FC<AuthProps> = ({children}) => {
    return (
        <div className="bg-slate-100 h-full">
            { children }
        </div>
        )
};
export default AuthLayout;