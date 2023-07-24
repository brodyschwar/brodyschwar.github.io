import { TitleSectionProps } from "../components/titleSection";
import skiing from "../assets/skiing_headshot.jpeg"

export const MAIN_TITLE: TitleSectionProps = {
    title: "Brody Schwartz",
    buttons: [
        { label: "LinkedIn" },
        { label: "Resume" },
        { label: "Projects" },
        { label: "Favorite Resturaunt" },
    ],
    img: {
        img: skiing,
        alt: "Brody Schwartz cross country skiing with snowy pine trees in the background"
    }
}