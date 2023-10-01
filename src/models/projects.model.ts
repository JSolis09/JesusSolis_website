import { uiMediaItem } from "./mediaItem.model";

export interface uiProject {
    id: string;
    title: string;
    icon?: string;
    description: string;
    startDate?: string;
    url: string;
    featuredImage: uiMediaItem;
}
