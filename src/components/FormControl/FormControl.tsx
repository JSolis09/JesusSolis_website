import { ComponentPropsWithoutRef, FC, memo } from "react";
import Input, { InputProps } from "./Input/Input";
import Label, { LabelProps } from "./Label/Label";

import './FormControl.scss';

interface InputLabelProps {
    inputProps: InputProps;
    labelProps: LabelProps;
}

export type FormControlProps = ComponentPropsWithoutRef<"div"> & InputLabelProps;

const FormControl: FC<FormControlProps> = ({ className, inputProps, labelProps, ...props }) => {
    const cn = `js-form-control ${className || ''}`;
    return (
        <div className={cn} {...props}>
            <Label {...labelProps}></Label>
            <Input {...inputProps} />
        </div>
    );
};

export default memo(FormControl);
