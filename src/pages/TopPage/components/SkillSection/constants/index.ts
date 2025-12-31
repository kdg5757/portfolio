import SkillLevelCard from "../components/SkillLevelCard";

type SkillLevelCardData = React.ComponentProps<typeof SkillLevelCard>;

export const skillLevelCardDataList: SkillLevelCardData[] = [
  { title: "JavaScript", percent: 85 },
  { title: "TypeScript", percent: 80 },
  { title: "React", percent: 80 },
  { title: "HTML/CSS", percent: 75 },
  { title: "PHP", percent: 70 },
  { title: "Node.js", percent: 60 },
  { title: "MySQL", percent: 60 },
  { title: "Storybook", percent: 60 },
];
