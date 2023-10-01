import React, { FC } from "react";
import './Container.scss';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => (
    <div className={`js-container ${className || ''}`}>
        {children}
    </div>
);

export default Container;
