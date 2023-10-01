import { Project, uiProject } from '../models';
import { parseProjects } from './';

test('should parse menu items correctly', () => {
    const mock: Project[] = [
        {
            id: 'Project',
            description: 'description',
            featuredImage: {
                node: {
                    id: '1',
                    sourceUrl: 'image.png',

                },
            },
            title: 'Title',
            url: '/project',
        }
    ];
    const expected: uiProject[] = [
        {
            id: 'Project',
            description: 'description',
            featuredImage: {
                id: '1',
                src: 'image.png',
            },
            title: 'Title',
            url: '/project',
        }
    ];
    expect(parseProjects(mock)).toEqual(expected);
});

test('should return empty array', () => {
    expect(parseProjects()).toEqual([]);
});
