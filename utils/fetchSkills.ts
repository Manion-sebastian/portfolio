import { Skill } from "../typings";

export const fetchSkills = async () => {
    // non axios requires json
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
    const data = await res.json()

    const skills: Skill[] = data.skills

    // console.log('fetching', skills)

    return skills
}