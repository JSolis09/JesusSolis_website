import { Project, uiProject } from "../models";

export function parseProjects(list: Project[] = []): uiProject[] {
    return list.map(({ id, description, featuredImage, title, url }) => ({
        id,
        description,
        featuredImage: {
            id: featuredImage.node.id,
            src: featuredImage.node.sourceUrl,
            altText: featuredImage.node.altText,
            srcset: featuredImage.node.srcSet,
            sizes: featuredImage.node.sizes,
        },
        title,
        url,
    }));
}
