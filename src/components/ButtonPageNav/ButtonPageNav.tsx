import {Icon} from "../Icon/Icon";
import {ButtonHTMLAttributes} from "react";

import './ButtonPageNav.scss'
import {IconToken} from "../Icon/Icon.tokens";

interface ButtonPageNavProps {
    icon: IconToken;
}

export const ButtonPageNav = ({icon, ...props}: ButtonPageNavProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={'storybook-button-pagenav'} {...props}><Icon icon={icon}/></button>
    )
}
