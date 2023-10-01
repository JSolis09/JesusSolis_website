import { FC, memo, ChangeEvent, useState, useEffect } from "react";
import './DarkModeSwitch.scss';

type ThemeType = 'dark' | 'light' | null;

const DarkModeSwitch: FC = () => {
    const [theme, setTheme] = useState<ThemeType>(localStorage.getItem('theme') as ThemeType);

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const newTheme = ev.target.checked ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        if (theme) {
            document.body.setAttribute('data-theme', theme);
        }
    }, [theme]);

    return (
        <label id="switch" className="js-switch" aria-label="dark mode switch">
            <input aria-labelledby="switch" name="darkMode" type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
            <span className="js-switch__slider js-switch__slider--round"></span>
        </label>
    );
};

export default memo(DarkModeSwitch);
