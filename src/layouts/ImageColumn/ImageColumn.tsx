import { FC, memo } from "react";
import './ImageColumn.scss';

export interface ImageColumnProps {
    imgSrc?: string;
    imgAlt?: string;
    imgCaption?: string;
    className?: string;
    imgClassname?: string;
    imageComponent?: JSX.Element,
    loading?: 'lazy' | 'eager',
}

const ImageColumn: FC<ImageColumnProps> = ({
    imgSrc,
    imgAlt,
    imgCaption,
    imgClassname,
    imageComponent,
    className = '',
    loading
}) => {
    const renderImg = () => {
        return imageComponent
            ? imageComponent
            : <img
                className={`js-imgcolumn__img ${imgClassname}`}
                src={imgSrc}
                alt={imgAlt}
                loading={loading} />
    };
    return (
        <figure className={`js-imgcolumn ${className}`}>
            {renderImg()}
            {imgCaption && <figcaption>{imgCaption}</figcaption>}
        </figure>
    )
};

export default memo(ImageColumn);
