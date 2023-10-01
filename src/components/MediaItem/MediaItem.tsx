import { ComponentPropsWithoutRef, FC, memo } from "react";

const MediaItem: FC<ComponentPropsWithoutRef<"img">> = ({
    alt,
    src,
    srcSet,
    width,
    height,
    className,
    title,
    sizes,
}) => <img
        className={className ? `js-imgcolumn__img ${className}` : 'js-imgcolumn__img'}
        src={src}
        srcSet={srcSet}
        width={width}
        sizes={sizes}
        height={height}
        title={title}
        loading="lazy"
        alt={alt}/>;

export default memo(MediaItem);
