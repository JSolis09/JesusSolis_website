import { FC, ReactNode, memo } from "react";
import './TwoColumns.scss';

interface TwoColumnsProps {
    children: ReactNode[];
    className?: string;
    leftColumnClassname?: string;
    rightColumnClassname?: string;
}

const TwoColumns: FC<TwoColumnsProps> = ({
    className = '',
    children,
    leftColumnClassname = '',
    rightColumnClassname = '',
}) => {
    if (!children || children.length === 0) {
        return null
    }

    return (
        <div className={`js-twocolumn ${className}`}>
            <div className={`js-twocolumn__col ${leftColumnClassname}`}>
                {children[0]}
            </div>
            <div className={`js-twocolumn__col ${rightColumnClassname}`}>
                {children[1]}
            </div>
        </div>
    );
}

export default memo(TwoColumns);
