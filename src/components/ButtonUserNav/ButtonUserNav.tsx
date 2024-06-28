import {Icon} from "../Icon/Icon";
import {ButtonHTMLAttributes} from "react";
import {IconToken} from "../Icon/Icon.tokens";

import './ButtonUserNav.scss'

interface ButtonUserNavProps {
    icon: IconToken;
}

export const ButtonUserNav = ({icon, ...props}: ButtonUserNavProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={'storybook-button-usernav'} {...props}><Icon icon={icon}/></button>
    )
}
