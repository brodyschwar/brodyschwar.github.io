import { TitleSectionProps } from "../components/titleSection";
import skiing from "../assets/skiing_headshot.jpeg"

export const MAIN_TITLE: TitleSectionProps = {
    title: "Brody Schwartz",
    buttons: [
        { label: "LinkedIn", clickHandler: () => window.open("https://www.linkedin.com/in/brody-schwartz/", "_blank") },
        { label: "Resume", clickHandler: () => window.open("https://drive.google.com/file/d/1KtbngXSg35mAkjiu47isGELI3dZXIett/view?usp=share_link", "_blank") },
        { label: "Favorite Resturaunt", clickHandler: () => window.open("https://www.instagram.com/piazzabellatrattoria/?hl=en", "_blank") },
    ],
    img: {
        img: skiing,
        alt: "Brody Schwartz cross country skiing with snowy pine trees in the background"
    }
}