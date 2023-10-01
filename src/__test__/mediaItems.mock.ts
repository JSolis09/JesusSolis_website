import { GET_MEDIAITEM } from "../graphql/queries";

const mediaItems = (title?: string) => ({
    request: {
        query: GET_MEDIAITEM,
        variables: { title }
    },
    result: {
        data: {
            mediaItems: { nodes: title !== 'not-found' ? [
                {
                    id: Date.now().toString(),
                    altText: `${title} alt`,
                    sourceUrl: "/image.png",
                    srcSet: "",
                    sizes: "",
                    title,
                    mediaDetails: {
                        width: 100,
                        height: 100,
                    },
                }
            ]: []},
        }
    },
});

export default mediaItems;
