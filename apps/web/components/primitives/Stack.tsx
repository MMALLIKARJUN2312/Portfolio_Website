import type {ComponentPropsWithoutRef} from 'react';

export function Stack ({
    className = '',
    ...props
}: ComponentPropsWithoutRef<'div'>) {
    return (
        <div 
           className = {`flex flex-col gap-6 ${className}`}
           {...props}
        />
    )
}