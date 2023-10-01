import { uiWorkExperience, WorkExperience } from '../models';
import { parseWorkExperiences, parseDateOfExperience } from './';

describe('@parseWorkExperiences', () => {
    test('should parse menu items correctly', () => {
        const mock: WorkExperience[] = [
            {
                id: '1',
                title: 'Self Employed',
                description: 'React and Node',
                role: 'Software Engineer',
                startDate: new Date(2023, 8, 1).getTime(),
                endDate: new Date(2023, 9, 1).getTime(),
                currentlyWorking: false,
            },
            {
                id: '2',
                title: 'Freelancer',
                description: 'PHP & MySQL',
                role: 'Frontend Dev',
                startDate: new Date(2023, 8, 1).getTime(),
                endDate: new Date(2023, 9, 1).getTime(),
                currentlyWorking: false,
            },
            {
                id: '3',
                title: 'Student',
                description: '',
                role: 'Student',
            },
        ];
        const expected: uiWorkExperience[] = [
            ...mock
        ];
        expect(parseWorkExperiences(mock)).toEqual(expected);
    });
    
    test('should return empty array', () => {
        expect(parseWorkExperiences()).toEqual([]);
    });
});

describe('@parseDateOfExperience', () => {
    test('should return empty string', () => {
        expect(parseDateOfExperience()).toEqual('');
    });

    test('should parse dates correctly', () => {
        const startDate =  new Date(2023, 7, 1, 0).getTime();
        const endDate =  new Date(2023, 8, 30, 0).getTime();
        expect(parseDateOfExperience(startDate, endDate)).toEqual('Aug 2023 - Sep 2023');
        expect(parseDateOfExperience(startDate, 0, true)).toEqual('Aug 2023 - Present');
    });
    
});
