import { FC, memo, ComponentPropsWithoutRef } from "react";
import './Label.scss';

export type LabelProps = ComponentPropsWithoutRef<"label">;

const Label: FC<LabelProps> = ({ className, children, ...props }) => {
    const cn = `js-label ${className || ''}`;
    return <label className={cn} {...props}>{children}</label>;
};

export default memo(Label);
