import { useQuery } from "@apollo/client";
import { lazy, Suspense, ComponentPropsWithoutRef, FC, useMemo } from "react";
import { GET_MEDIAITEM } from "../../graphql/queries";
import { GetMediaItemData, uiMediaItem } from "../../models";
import { getMediaItem } from "../../utils";
import { Spinner } from "../Loader/Loader";

const MediaItem = lazy(() => import('./MediaItem'));

type MediaItemContainerProps = ComponentPropsWithoutRef<"img"> & {title: string};

const MediaItemContainer: FC<MediaItemContainerProps> = ({ title, ...rest }) => {
    const { data, loading } = useQuery<GetMediaItemData, { title: string }>(GET_MEDIAITEM, { variables: { title }, skip: !title });
    const mediaItems = data?.mediaItems?.nodes;
    const mediaProps = useMemo(() => getMediaItem(mediaItems), [mediaItems]);
    if (loading){
        return <Spinner />;
    }

    if (!mediaProps?.src) {
        return null;
    }

    const props = {
        ...rest,
        ...mediaProps,
    } as uiMediaItem;
    
    return (
        <Suspense fallback={null}>
            <MediaItem {...props} />
        </Suspense>
    );
}

export default MediaItemContainer;
