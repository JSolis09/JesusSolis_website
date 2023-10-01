import { FC, memo, ComponentPropsWithoutRef } from "react";
import Button from "../Button";
import './MenuIcon.scss';

const MenuIcon: FC<ComponentPropsWithoutRef<"button">> = (props) => (
    <Button aria-label="menu" {...props} className="js-menu-icon">
        <div />
        <div />
        <div />
    </Button>
);

export default memo(MenuIcon);
