import type {ComponentPropsWithoutRef} from 'react';

export function Section ({
    className = '',
    ...props
}: ComponentPropsWithoutRef<'div'>) {
    return (
        <div 
           className = {`py-24 ${className}`}
           {...props}
        />
    )
}