import { FC, memo } from "react";
import './TextStroke.scss';

interface TextStrokeProps {
    text: string;
    className?: string;
    h2Classname?: string;
}

const TextStroke: FC<TextStrokeProps> = ({ text, className = '', h2Classname }) => (
    <div className={`wrap__text_stroke ${className}`}>
        <div className="heading__text_stroke">{text}</div>
        <h2 className={h2Classname}>{text}</h2>
    </div>
);

export default memo(TextStroke);
