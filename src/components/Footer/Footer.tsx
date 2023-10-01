import { FC, memo } from "react";
import Container from "../../layouts/Container";
import './Footer.scss';

const Footer: FC = () => (
    <footer className="js-footer">
        <Container className="js-footer__container">
            <div className="js-footer__img-wrapper">
                <img
                    className="js-footer__img"
                    src="https://jesussolis.me/wp-content/uploads/2020/02/logo-white.svg"
                    alt="Jesus Solis Logo"
                    width="389"
                    height="200"
                />
            </div>
            <div className="js-footer__copyright">Copyright © 2023 Jesus Solis. All Rights Reserved.</div>
        </Container>
    </footer>
);

export default memo(Footer);
