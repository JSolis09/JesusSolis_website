import { MenuConnection } from '../models';
import { parseMenuItems } from '../utils';

test('should parse menu items correctly', () => {
    const mock: MenuConnection = {
        nodes: [
            {
                menuItems: {
                    nodes: [
                        {
                            id: '1',
                            label: 'About Me',
                            url: '/about-me'
                        }
                    ],
                }
            }
        ]
    };
    expect(parseMenuItems(mock)).toEqual([
        {
            id: '1',
            label: 'About Me',
            url: '/about-me'
        },
    ]);
});

test('should return empty array', () => {
    expect(parseMenuItems()).toEqual([]);
});
