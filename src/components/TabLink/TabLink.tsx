import {ButtonHTMLAttributes} from "react";

import './TabLink.scss';

interface TabLinkProps {
    active?: boolean;
    label?: string;
}

export const TabLink = ({active, label, ...props} : TabLinkProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const mode = active ? 'storybook-tablink--active' : '';
    return (
        <button className={['storybook-tablink', mode].join(' ')} {...props}>{label}</button>
    );
}
