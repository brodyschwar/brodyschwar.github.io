import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import { lightTheme } from '../../../themes/themes';
import { hexToRgba } from '../../../utils/themes.tsx/hexToRGBA';

export interface ButtonProps {
    icon?: ReactNode,
    children: ReactNode
    primary?: boolean,
    secondary?: boolean,
    tertiary?: boolean,
    onClick?: () => void
}

enum ButtonTypes {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary"
}

interface StyledButtonProps {
    type: ButtonTypes
}

interface ButtonColors {
    backgroundColor: string,
    textColor: string,
    borderColor: string,
    shadowColor: string,
    shadowHoverColor: string
}

const basicColor: ButtonColors = {
    backgroundColor: lightTheme.backgroundColor,
    textColor: lightTheme.secondaryColor,
    borderColor: lightTheme.primaryColor,
    shadowColor: lightTheme.textColor,
    shadowHoverColor: lightTheme.primaryColor,
}

interface ButtonStyles {
    primary: ButtonColors,
    secondary: ButtonColors,
    tertiary: ButtonColors,
}

const buttonStyle: ButtonStyles = {
    primary: basicColor,
    secondary: { ...basicColor, textColor: lightTheme.textColor, backgroundColor: lightTheme.primaryColor },
    tertiary: { ...basicColor, 
        backgroundColor: lightTheme.tertiaryColor, 
        borderColor: lightTheme.tertiaryColor, 
        shadowHoverColor: lightTheme.tertiaryColor,
        textColor: lightTheme.textColor
    }
}



const StyledButton = styled.button<StyledButtonProps>`
    padding: 0.3rem 1rem;
    margin: 0.2rem;
    min-width: 12rem;
    background-color: ${ (props) => buttonStyle[props.type]['backgroundColor'] };
    color: ${ (props) => buttonStyle[props.type]['textColor'] };
    border: 2px solid ${ (props) => buttonStyle[props.type]['borderColor'] };
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;
    font-family: ${ lightTheme.primaryFont };
    text-transform: uppercase;
    box-shadow: 0 0.2rem 0.5rem ${ (props) => hexToRgba(buttonStyle[props.type]['shadowColor'], 0.2) };

    &:hover {
        transform: translateY(-0.1rem);
        box-shadow: 0 0.2rem 0.5rem ${ (props) => hexToRgba(buttonStyle[props.type]['shadowHoverColor'], 0.8) };
    }

    &:active {
        transform: translateY(0.1rem); /* Move the button down by 2 pixels */
        box-shadow: 0 0.05rem 0.2rem ${ (props) => hexToRgba(buttonStyle[props.type]['shadowHoverColor'], 0.8) }; /* Slightly reduce the shadow */
    }
`
const Icon = styled.span`
    margin: 0.2rem;
`

const SquareButton: React.FC<ButtonProps> = ({icon, primary, secondary, tertiary, onClick, children}) => {

    const type: ButtonTypes = tertiary ? ButtonTypes.TERTIARY : (secondary ? ButtonTypes.SECONDARY : ButtonTypes.PRIMARY);

    return (
    <StyledButton type={type} onClick={onClick}>
        {children}
        { icon && <Icon>{icon}</Icon>}
    </StyledButton>
    );
}


export default SquareButton;