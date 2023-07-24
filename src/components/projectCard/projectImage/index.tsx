import React from 'react';
import { styled } from 'styled-components';
import { lightTheme } from '../../../themes/themes';
import { ImageProps } from '../../../data/types';


const StyledImage = styled.div`
    width: 100%;
    height: 20rem;
    max-width: 30rem;
    margin: 0.5rem;
    background-size: cover;
    background-position: center;
    border: 0.2rem solid ${ lightTheme.secondaryColor };
`

const ProjectImage: React.FC<ImageProps> = ({img}) => {
    return (
        <StyledImage style={{backgroundImage: `url("${img}")`}}/>
    );
}

export default ProjectImage;