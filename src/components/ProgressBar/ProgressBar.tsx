import { FC, memo } from "react";
import './ProgressBar.scss';

interface ProgressBarProps {
    label: string;
    value?: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ label, value = 0 }) => {
    return (
        <div className="js-progressBar">
            <header>
                <span className="js-progressBar__label">{label}</span>
                <span className="js-progressBar__value">{`${value}%`}</span>
            </header>
            <div className="js-progressBar__bar">
                <div className="js-progressBar__bar-value" style={{ width: `${value}%` }}></div>
            </div>
        </div>
    );
};

export default memo(ProgressBar);
