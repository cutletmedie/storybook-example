import {Icon} from "../Icon/Icon";
import {IconToken} from "../Icon/Icon.tokens";
import {ButtonHTMLAttributes} from "react";

import './MenuItem.css';

interface MenuItemProps {
    icon?: IconToken;
    label?: string;
    iconSize?: number;
}

export const MenuItem = ({icon, label, iconSize = 20, ...props} : MenuItemProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={'storybook-menuitem'} {...props}>
            <Icon icon={icon} width={iconSize} height={iconSize} style={{padding:'6px'}}/>
            {label}
        </button>
    );
}
