import { MediaItemConnection, MenuConnection } from './wp.model';

export * from './wp.model';
export * from './header.model';
export * from './workExperience.model';
export * from './skills.model';
export * from './projects.model';
export * from './mediaItem.model';

export interface GetSettingsData {
    allSettings: {
        generalSettingsDescription: string;
        generalSettingsTitle: string;
        generalSettingsUrl: string;
    };
    getCaptchaSiteKey: string;
}

export interface GetMenuData {
    menus: MenuConnection;
}

export interface SendMessageInput {
    input: {
        captcha: string;
        email: string;
        name: string;
        message: string;
    }
}

export interface SendMessageData {
    getInTouch: {
        success: boolean;
        error: string | null;
    } 
}

export interface GetMediaItemData {
    mediaItems: MediaItemConnection;
}