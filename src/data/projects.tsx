import { ProjectCardProps } from "../components/projectCard";
import car_sketch from "../assets/carpool_sketch.jpg"
import react_code from "../assets/ReactCode.png"
import guardin_plans from "../assets/GuardinPlants.png"

const CAR_POOL_PROJECT: ProjectCardProps = {
    projectTitle: "Carpool Creating Automation",
    skills: ["Google Sheets", "Product Design", "Algorithm Hueristics"],
    description: "Made a powerful and easy to use product that automates creating carpools for the University of Michigan Sailing Team practices. Greatly reduced the number of mistakes made and shortened a weekly task fivefold. Please explore how this project works by trying it for yourself.",
    buttonProps: {
        label: "Use the Autonomaton",
        clickHandler: () => window.open("https://docs.google.com/spreadsheets/d/1VNGbfYl6raozDti3_cTjzUSS_UXZjHkqWojIedh7N4s/edit#gid=752515483", "_blank")
    },
    img: {
        img: car_sketch,
        alt: "simple map of city with markers and a choral colored lined route connecting them sketch art."
    }
}

const GUARDIN_PLANTS: ProjectCardProps = {
    projectTitle: "Guardin' Plants",
    skills: ["C#", "Unity", "Team Development"],
    description: "Collaborated with a team of five students to produce a game for the Unity game Engine. Developed a custom pathfinding algorithm which streamlined the development pipeline. Won 5th place at the 2023 University of Michigan - Eastern Michigan University game jam.",
    buttonProps: {
        label: "Download the Game",
        clickHandler: () => window.open("https://drive.google.com/file/d/1oeC6x0Ot2tv5a9KS08zu7nBWymXyIYKy/view?usp=sharing", "_blank")
    },
    img: {
        img: guardin_plans,
        alt: `the title screen to the game "Guardin' Plants", shows mother oak over the games playable forest`
    }
}


const THIS_WEBSITE: ProjectCardProps = {
    projectTitle: "This Website!",
    skills: ["React", "CSS"],
    description: "Created this website using React from scatch—no template necessary. Made it to showcase my projects, but also as a testimate to the React I have learned in the past two years.",
    buttonProps: {
        label: "View in Github",
        clickHandler: () => window.open("https://github.com/brodyschwar/brodyschwar.github.io", "_blank")
    },
    img: {
        img: react_code,
        alt: "screenshot of code from the app.tsx file for this website"
    }
}

export const PROJECTS: ProjectCardProps[] = [
    CAR_POOL_PROJECT,
    GUARDIN_PLANTS,
    THIS_WEBSITE
]