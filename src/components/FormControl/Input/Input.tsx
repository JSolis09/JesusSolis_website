import { FC, memo } from "react";
import './Input.scss';

type InputTag = 'input' | 'textarea';

type InputHTMLProps = React.ComponentPropsWithoutRef<"input">;
type TextareaHTMLProps = React.ComponentPropsWithoutRef<"textarea">;
export type InputProps = (InputHTMLProps | TextareaHTMLProps) & {tag: InputTag};

const Input: FC<InputProps> = ({ tag, className, ...props }) => {
    const cn = `js-input ${className || ''}`
    if (tag === 'textarea') {
        return <textarea className={cn} {...props as TextareaHTMLProps} />
    }
    return <input className={cn} {...props as InputHTMLProps} />;
};

export default memo(Input);
