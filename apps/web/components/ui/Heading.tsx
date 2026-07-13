import type {ComponentPropsWithoutRef} from 'react';

type HeadingProps = ComponentPropsWithoutRef<'h2'>;

export function Heading(props : HeadingProps) {
    return <h2 {...props} />
}