import { ExperienceCardProps } from "../components/experienceAndLeadershipSection/experienceCard";

const BOUNTEOUS: ExperienceCardProps = {
    position: "React Intern",
    dates: "Jun - Aug 2022",
    company: "Bounteous",
    location: "Chicago",
    description: "Learned front-end programing using React and Redux within an apprenticeship program. Worked in a SCRUM environment to build features for a medical insurance website.",
    skills: ["React", "Redux", "CSS"]
}
  
const CAXY: ExperienceCardProps = {
    position: "Full Stack Intern",
    dates: "Jun - Aug 2023",
    company: "Caxy",
    location: "Chicago",
    description: "Used graphql and scala to connect backend features of player tracking services for a casino chain.",
    skills: ["React", "Scala", "Graphql"]
}

const CO_CAPTAIN: ExperienceCardProps = {
    position: "Co-Captain",
    dates: "Jan - Dec 2023",
    company: "The University of Michigan Sailing Team",
    location: "Ann Arbor",
    description: "Headed a board of seven alongside a co-captain to organize and lead the Michigan Sailing Team. Connect with coaches, team members and alumni to fulfill the team’s mission to represent the University of Michigan across a wide range of competitive sailing events.",
    skills: ["Leadership", "Communication", "Club Sport"]
}

const TREASURER_ESG: ExperienceCardProps = {
    position: "Treasurer",
    dates: "Aug 2021 - May 2023",
    company: "Engineering Student Government",
    location: "University of Michigan",
    description: "Established semester budgets, managed bookkeeping for ESG. Led a team of senators to process and approve funding applications from student orgs. Processed fifty applications and granted over $20,000 in funding each semester.",
    skills: ["Budgeting", "Communications", "Leadership"]
}

const SAILING_INSTRUCTOR: ExperienceCardProps = {
    position: "Sailing Instructor",
    dates: "May - Aug 2021",
    company: "Chicago Corinthean Yacht Club",
    location: "Chicago",
    description: "Coached sailing to children ages 6-17, at all skill levels from beginners to racers. Prepared a high school race team for their first regatta.",
    skills: ["Sailing", "Patience"]
}

const SENATOR_ESG: ExperienceCardProps = {
    position: "Senator",
    dates: "Jan 2021 - May 2023",
    company: "Engineering Student Government",
    location: "University of Michigan",
    description: "Elected as Senator of Engineering Student Government for two terms. Served on the Internal Affairs Committee and the Funding Committee. Managed the ESG website for two years.",
    skills: ["Student-Leadership", "Squarespace"]
}

const STEADY_SCHOLARS: ExperienceCardProps = {
    position: "Founder and Tutor",
    dates: "Jun 2020 - Aug 2021",
    company: "Steady Scholars Tutoring",
    location: "Chicago",
    description: "Founded during quarantine, helped middle schoolers prepare for highschool. Created a website, as well as a marketing campaign. Managed three employees. Steady Scholars tutored a dozen middle schoolers for 300 hours in math and science.",
    skills: ["Sales", "Management", "Communication"]
}

export const EXPERIENCE: ExperienceCardProps[] = [
    CAXY,
    CO_CAPTAIN,
    BOUNTEOUS,
    TREASURER_ESG,
    SAILING_INSTRUCTOR,
    SENATOR_ESG,
    STEADY_SCHOLARS,
]