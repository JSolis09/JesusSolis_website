import { ComponentPropsWithoutRef, FC, useCallback, useState } from 'react';
import { uiMenuItem } from '../../models';
import DarkModeSwitch from '../DarkModeSwitch';
import MenuIcon from '../MenuIcon';
import MenulistItem from './MenuListItem';
import './Header.scss';

interface HeaderProps {
    logoProps?: ComponentPropsWithoutRef<"img">;
    logoCta?: string;
    menuItems?: uiMenuItem[];
}

const Header: FC<HeaderProps> = ({ logoProps = { alt: 'default' }, menuItems=[], logoCta = "/" }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const closeMenu = () => setOpenMenu(false);
    const toggleMenu = () => setOpenMenu(!openMenu);

    const menuList = useCallback(() => menuItems.map((menuItem) => (
        <MenulistItem
            key={menuItem.id}
            label={menuItem.label}
            url={menuItem.url}
            id={menuItem.id}
        />
    )), [menuItems]);

    return (
        <header className={`js-header`}>
            <nav className="js-header__nav">
                <div className="js-header__nav-brand">
                    <a className="js-header__nav-brand-logo" href={logoCta}>
                        <img className="js-header__nav-brand-logo-img" {...logoProps} alt={logoProps.alt} />
                    </a>
                </div>
                <ul className="js-header__nav-menu">
                    {menuList()}
                </ul>
                <div className="js-header__right">
                    <DarkModeSwitch />
                    <MenuIcon
                        className="js-header__menu-button"
                        onClick={toggleMenu}
                    />
                </div>
            </nav>
            <div className={`js-header__nav-mobile ${openMenu ? 'js-header__nav-mobile--menu-open' : ''}`} aria-label={`menu mobile ${openMenu ? 'open' : 'close'}`}>
                <div className="js-header__menuoverlay" onClick={closeMenu}></div>
                <div className="js-header__nav-mobile-menu" role="navigation">
                    <span className="js-header__nav-mobile-menu_close" aria-label="button close" onClick={closeMenu}>&times;</span>
                    <ul className="js-header__nav-menu-list">
                        {menuList()}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
