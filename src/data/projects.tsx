import { ProjectCardProps } from "../components/projectCard";
import car_sketch from "../assets/carpool_sketch.jpg"
import react_code from "../assets/ReactCode.png"
import guardin_plans from "../assets/GuardinPlants.png"
import vanderpol from "../assets/VanDerPolPrediction2.png"
import covid_data from "../assets/CovidPredictionData.png"
import nim_board from "../assets/nim-game-thumbnail.png"
import plant_feeder_gui from "../assets/PlantFeederFrontEnd.png"

const PLANT_FEEDER_GUI: ProjectCardProps = {
    projectTitle: "Node Editor GUI for Plant Feeder",
    skills: ["Typescript", "MUI", "React Flow"],
    description: "Made a flexible GUI to edit behavior trees for my Plant Feeder project. The webpage was built with Typescript and React, implementing the React Flow, MUI, axios libraries. Pairs with a backend to save and load files. Please checkout the source code.",
    buttonProps: {
        label: "See the Code",
        clickHandler: () => window.open("https://github.com/brodyschwar/plant-feeder-react", "_blank")
    },
    img: {
        img: plant_feeder_gui,
        alt: "The webdisplay for the plant feeder gui, contains a tree structure and a file/folder list"
    }
}

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

const COVID_PREDICTION: ProjectCardProps = {
    projectTitle: "Using Machine Learning for Predicting Covid-19 Rates",
    skills: ["Machine Learning", "Python", "Applied Mathematics"],
    description: "Implemented several machine learning algorithms to predict Covid-19 cases and deaths. Prepaired data from the World Health Organization for machine learning training. Built several LSTM Models and Convolutional Nueral Networks. Developed a working model for predicting parameters for disease tracking",
    img: {
        img: covid_data,
        alt: "A graph showing the results of the Covid-19 project. It desplays the actual data vs predicted data from an LSTM model."
    }
}

const VANDERPPOL_PREDICTION: ProjectCardProps = {
    projectTitle: "Using Neural Networks for Ordinary Differential Equation Parameter Predictions",
    skills: ["Machine Learning", "Python"],
    description: `Designed a lightweight neural network to predict the µ parameter of a Van Der Pol equation. Completed a proof of concept for a method of discovering underlying ordinary differential equation parameters from inherently noisy data. Adapted this experiement to create a covid prediction model based on real world data. See "Using Machine Learning for Predicting Covid-19 Rates"`,
    buttonProps: {
        label: "Check out Project",
        clickHandler: () => window.open("https://colab.research.google.com/drive/1l3AZleo9rVBEchebmU6b0MDjowai7Tpr?usp=share_link", "_blank")
    },
    img: {
        img: vanderpol,
        alt: "A graph showing the results of the Covid-19 project. It displays the actual data vs predicted data from an LSTM model."
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

const NIM_BOT: ProjectCardProps = {
    projectTitle: "Solving the Game of Nim",
    skills: ["Python", "Dynamic Programming"],
    description: "The game of Nim is a famous game where two players take turns removing nimming objects from rows. The last player to remove an object loses. After playing with friends at a bar, I decided to code the game and a bot who will always win. Please take a look, or challenge my creation!",
    buttonProps: {
        label: "Play the Bot",
        clickHandler: () => window.open("https://colab.research.google.com/drive/1_qS_Xc6WcigzqFEhMQhldSHmgAXIe6_6?usp=sharing", "_blank")
    },
    img: {
        img: nim_board,
        alt: `a game of nim set up with matches. Rows of 1, 3, 5, 7`
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
    COVID_PREDICTION,
    PLANT_FEEDER_GUI,
    GUARDIN_PLANTS,
    NIM_BOT,
    VANDERPPOL_PREDICTION,
    CAR_POOL_PROJECT,
    THIS_WEBSITE
]