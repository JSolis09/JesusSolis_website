import { useQuery } from "@apollo/client";
import { FC, } from "react";
import Metadata from "./Metadata";
import { GET_SETTINGS } from "../../graphql/queries";
import { GetSettingsData } from "../../models";

const MetadataContainer: FC = () => {
    const { data } = useQuery<GetSettingsData>(GET_SETTINGS);
    if (!data) {
        return null;
    }
    const { generalSettingsTitle, generalSettingsDescription } = data.allSettings;
    return <Metadata title={generalSettingsTitle} description={generalSettingsDescription} />;
};

export default MetadataContainer;
