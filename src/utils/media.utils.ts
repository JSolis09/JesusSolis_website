import { MediaItem, uiMediaItem } from "../models";

export function getMediaItem(mediaItems?: MediaItem[]): uiMediaItem | null {
    const mediaItem = mediaItems && mediaItems[0];
    if (!mediaItem){
        return null;
    }
    return {
        id: mediaItem.id,
        alt: mediaItem.altText || mediaItem.title || 'default',
        src: mediaItem.sourceUrl,
        title: mediaItem.title,
        sizes: mediaItem.sizes,
        srcSet: mediaItem.srcSet,
        width: mediaItem.mediaDetails?.width,
        height: mediaItem.mediaDetails?.height,
    };
}
