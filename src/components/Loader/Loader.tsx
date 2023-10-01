import { FC, memo } from 'react';
import './Loader.scss';

export const Spinner: FC = memo(() => (
    <div className="js-spinner" role="spinbutton"></div>
));

const Loader: FC = () => (
    <div className="js-loader">
        <Spinner />
    </div>
);

export default memo(Loader);
