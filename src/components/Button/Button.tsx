import { FC, memo, ComponentPropsWithoutRef } from "react";
import './Button.scss';

const Button: FC<ComponentPropsWithoutRef<"button">> = ({ className, children, ...props }) => (
    <button className={`js-button ${className || ''}`} {...props}>
        {children}
    </button>
);

export default memo(Button);
