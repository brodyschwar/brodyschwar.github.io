import { ProjectCardProps } from "../components/projectCard";
import car_sketch from "../assets/carpool_sketch.jpg"

const CAR_POOL_PROJECT: ProjectCardProps = {
    projectTitle: "Sailing Team Carpool Automation",
    skills: ["Google Sheets", "Product Design", "Algorithm Hueristics"],
    description: "Made a powerful and easy to product to automate making carpools for sailing team practices. Reduced a 30 minute a week resposibility to just under 5.",
    buttonLabel: "Use the Autonomaton",
    img: {
        img: car_sketch,
        alt: "simple map of city with markers and a choral colored lined route connecting them sketch art."
    }
}

export const PROJECTS: ProjectCardProps[] = [
    CAR_POOL_PROJECT,
    CAR_POOL_PROJECT
]