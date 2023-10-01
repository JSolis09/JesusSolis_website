import { uiWorkExperience, WorkExperience } from "../models";

export function parseWorkExperiences(list: WorkExperience[] = []): uiWorkExperience[] {
    return list.map((item) => ({
        ...item,
    }));
}

export function parseDateOfExperience(start?: number, end?: number, current?: boolean): string {
    if (!start) {
        return '';
    }

    const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
    const startDate = new Date(start).toLocaleDateString('en-US', options);
    const endDate = current || !end ? 'Present' : new Date(end).toLocaleDateString('en-US', options);

    return `${startDate} - ${endDate}`;
}