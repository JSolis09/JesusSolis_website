import { Skill, uiSkill } from '../models';
import { parseSkills } from './';

test('should parse menu items correctly', () => {
    const mock: Skill[] = [
        {
            id: '1',
            title: 'PHP',
            value: 30,
        },
        {
            id: '2',
            title: 'C#',
            value: 20,
        },
        {
            id: '3',
            title: 'React',
            value: 95,
        },
        {
            id: '4',
            title: 'Unit Testing',
            value: 100,
        },
        {
            id: '5',
            title: 'Javascript',
            value: 95,
        },
        {
            id: '6',
            title: 'HTML & CSS',
            value: 100,
        },
    ];
    const expected: uiSkill[] = [
        {
            id: '4',
            title: 'Unit Testing',
            value: 100,
        },
        {
            id: '6',
            title: 'HTML & CSS',
            value: 100,
        },
        {
            id: '3',
            title: 'React',
            value: 95,
        },
        {
            id: '5',
            title: 'Javascript',
            value: 95,
        },
        {
            id: '1',
            title: 'PHP',
            value: 30,
        },
        {
            id: '2',
            title: 'C#',
            value: 20,
        },
    ];
    expect(parseSkills(mock)).toEqual(expected);
});

test('should return empty array', () => {
    expect(parseSkills()).toEqual([]);
});
