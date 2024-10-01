export interface ImageProps {
    img: string,
    tooltip?: string,
    alt: string,
}

export interface ButtonProps {
    label: string,
    clickHandler?: () => void
}