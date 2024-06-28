import {Icon} from "../Icon/Icon";

import './TabPage.scss';

interface TabPageProps {
    active?: boolean;
    label?: string;
    home?: boolean;
}

export const TabPage = ({active, label, home} : TabPageProps) => {
    const mode = active ? 'storybook-tabpage--active' : '';

    if (home) {
        return (
            <button className={['storybook-tabpage', 'storybook-tabpage--home', mode].join(' ')}>
                <Icon icon={'home'} width={16} height={16}/>
            </button>
        )
    }

    return (
        <button className={['storybook-tabpage', mode].join(' ')}>
            <span>{label}</span>
            <Icon className={'storybook-tabpage-close storybook-icon'} icon={'cross'} />
        </button>
    );
}
