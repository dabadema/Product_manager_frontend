import { PropsWithChildren } from 'react';

export default function ErrorMessage({ children }: PropsWithChildren) {
    return (
        <div className="text-center text-white font-bold my-4 bg-red-600 p-3 uppercase">
            {' '}
            {children}
        </div>
    );
}
