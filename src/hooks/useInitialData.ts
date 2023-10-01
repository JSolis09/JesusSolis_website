import { useQuery } from "@apollo/client";
import { GET_MEDIAITEM, GET_MENU, GET_PROFILE } from "../graphql/queries";
import { GetMediaItemData, GetMenuData, MediaItemConnection, MenuConnection, Profile, ProfileData } from "../models";

interface AppInitialData {
    menu?: MenuConnection;
    logo?: MediaItemConnection;
    profile?: Profile;
    loading: boolean;
}

export default function useInitialData(): AppInitialData {
    const { data: menu, loading: menuLoading } = useQuery<GetMenuData>(GET_MENU, { variables: { slug: 'principal' } });
    const { data: logo, loading: logoLoading } = useQuery<GetMediaItemData>(GET_MEDIAITEM, { variables: { title: 'logo-jesus-solis' } });
    const { data: profile, loading: profileLoading } = useQuery<ProfileData>(GET_PROFILE);
    useQuery(GET_MEDIAITEM, { variables: { title: 'about-me' } });

    if (menuLoading || logoLoading || profileLoading) {
        return { loading: true };
    }

    return {
        menu: menu?.menus,
        logo: logo?.mediaItems,
        profile: profile?.myProfile as Profile,
        loading: false,
    };
}