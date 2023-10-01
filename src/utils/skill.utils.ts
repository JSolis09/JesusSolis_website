import { Skill, uiSkill } from "../models";

export function parseSkills(list?: Skill[]): uiSkill[] {
    if (!list) return [];

    const skills = list.map((item) => ({ ...item }));
    skills.sort(({ value: a }, { value: b }) => {
        if (a > b){
            return -1;
        }

        if (b > a){
            return 1;
        }

        return 0;
    })
    return skills;
}
