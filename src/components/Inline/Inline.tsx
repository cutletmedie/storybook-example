import {Icon} from "../Icon/Icon";

import "./Inline.scss";
import {HTMLAttributes} from "react";

interface InlineProps {
    label?: string;
    showIcon?: boolean;
}

export const Inline = ({label, showIcon, ...props}: InlineProps & HTMLAttributes<HTMLInputElement>) => {
    const mode = showIcon ? 'storybook-inline-dropdown-input' : '';
    return (
        <div className={'storybook-inline'}>
            {label && <span className={'storybook-inline-header'}>{label}</span>}
            <div className={'storybook-inline-content'}>
                <input className={['storybook-inline-input', mode].join(' ')} type={"text"} {...props} />
                {showIcon && <Icon icon={'chevron'} className={'storybook-inline-icon'} />}
            </div>
        </div>
    );
}
