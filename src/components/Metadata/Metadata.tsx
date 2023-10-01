import { FC, memo } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface MetadataProps {
    title?: string;
    description?: string;
}

const Metadata: FC<MetadataProps> = ({ title, description }) => (
    <HelmetProvider>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/fontawesome.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/solid.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Helmet>
    </HelmetProvider>
);

export default memo(Metadata);
