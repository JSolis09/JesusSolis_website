import { FC, lazy, Suspense } from "react";
import { ImageColumnProps } from "./ImageColumn";

const ImageColumn = lazy(() => import('./ImageColumn'));

const ImageColumnContainer: FC<ImageColumnProps> = (props) => (
    <Suspense fallback={null}>
        <ImageColumn {...props} />
    </Suspense>
);

export default ImageColumnContainer;
