import React from 'react';
import { styled } from 'styled-components';
import { lightTheme, screenSize } from '../../../themes/themes';
import { ImageProps } from '../../../data/types';


const StyledImage = styled.div`
    width: 100%;
    height: 20rem;
    max-width: 30rem;
    background-size: cover;
    background-position: center;
    border: 0.2rem solid ${ lightTheme.tertiaryColor };

    @media (max-width: ${ screenSize.small }) {
        height: 15rem;
    }

    @media (max-width: ${ screenSize.xsmall }) {
        height: 10rem;
    }
`

const ProjectImage: React.FC<ImageProps> = ({img}) => {
    return (
        <StyledImage style={{backgroundImage: `url("${img}")`}}/>
    );
}

export default ProjectImage;