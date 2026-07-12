import type {ComponentPropsWithoutRef, ElementType} from 'react';

type BoxProps<T extends ElementType = 'div'> = {
    as?: T;
} & ComponentPropsWithoutRef<T>;

export function Box<T extends ElementType = 'div'>({
    as,
    ...props
}:BoxProps<T>) {
    const Component = as ?? 'div';

    return <Component {...props} />
}