export interface RootQueryBaseArray<T> {
    nodes: T[];
}

export interface RootQueryBase<T> {
    node: T;
}

export interface MediaItemDetails {
    width?: string;
    height?: string;
}

export interface MediaItem {
    altText?: string;
    id: string;
    sourceUrl?: string;
    title?: string;
    srcSet?: string;
    sizes?: string;
    mediaDetails?: MediaItemDetails;
}

export interface MenuItem {
    id: string;
    label: string;
    url: string;
}

export interface Menu {
    menuItems: MenuItemConnection;
}

export interface MediaItemConnection extends RootQueryBaseArray<MediaItem>{}
export interface MenuItemConnection extends RootQueryBaseArray<MenuItem> {}
export interface MenuConnection extends RootQueryBaseArray<Menu> {}

export interface SocialMedia {
    name: string;
    icon: string;
    url: string;
}

export interface ProfileData {
    myProfile: Profile;
}

export interface Profile {
    fullname: string;
    email: string;
    role: string;
    summary: string;
    social_media: SocialMedia[]
    avatar: string;
}

export interface WorkExperience {
    id: string;
    title: string;
    role: string;
    description: string;
    startDate?: number;
    endDate?: number;
    currentlyWorking?: boolean;
}

export interface WorkExperienceData {
    workExperiences: RootQueryBaseArray<WorkExperience>;
}

export interface Skill {
    id: string;
    title: string;
    value: number;
}

export interface SkillsData {
    skills: RootQueryBaseArray<Skill>;
}

export interface Project {
    id: string;
    title: string;
    icon?: string;
    description: string;
    startDate?: string;
    url: string;
    featuredImage: RootQueryBase<MediaItem>;
}

export interface ProjectsData {
    projects: RootQueryBaseArray<Project>;
}
