import { FC, memo } from "react";
import { uiMenuItem } from "../../../models";

const MenuListItem: FC<uiMenuItem> = ({ url, label }) => (
    <li className="js-header__nav-menu-item">
        <a className="js-header__nav-menu-item-cta" href={url} title={label}>{label}</a>
    </li>
);

export default memo(MenuListItem);
