import { MenuConnection, uiMenuItem } from "../models";

export function parseMenuItems(menu?: MenuConnection): uiMenuItem[] {
    return menu?.nodes[0]?.menuItems?.nodes?.map(({ id, label, url }) => ({
        label,
        id,
        url,
    })) || [];
}
