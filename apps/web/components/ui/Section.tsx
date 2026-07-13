import type {ComponentPropsWithoutRef} from 'react';
import {cn} from '@/lib/utils';

export function Section ({
    className = '',
    ...props
}: ComponentPropsWithoutRef<'div'>) {
    return (
        <div 
           className = {cn('py-24', className)}
           {...props}
        />
    )
}