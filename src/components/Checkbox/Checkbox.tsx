import {InputHTMLAttributes} from "react";

import './Checkbox.scss';

interface CheckboxProps {
    label?: string;
}

export const Checkbox = ({label, ...props}: CheckboxProps & InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <label className={'storybook-checkbox'}>
            <input type={'checkbox'} {...props}/>
            <span className={'checkmark'}></span>
            <span className={'storybook-checkbox-text'}>{label}</span>
        </label>
    );
}
