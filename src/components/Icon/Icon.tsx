import {IconToken} from "./Icon.tokens";
import {ImgHTMLAttributes} from "react";

import './Icon.scss';

interface IconProps {
    icon: IconToken;
}

export const Icon = ({icon, ...props}: IconProps & ImgHTMLAttributes<HTMLImageElement>) => {
    if (icon)
        return (
            <img className={'storybook-icon'} src={`/assets/${icon}.svg`} alt={`Icon ${icon}`} {...props} />
        );

    return null;
}
