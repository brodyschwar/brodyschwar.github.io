import React from 'react';
import { styled } from 'styled-components';
import { lightTheme } from '../../../themes/themes';

interface PageMenuButtonProps {
    text: string
}

const StyledButton = styled.button`
  height: 3rem;
  padding: 0.5rem;
  margin: 0 0.25rem 0 0.25rem;
  font-family: ${ lightTheme.primaryFont };
  font-size: 18px;
  border: none;
  background: linear-gradient(
    to bottom,
    transparent,
    75%,
    transparent,
    95%,
    ${lightTheme.tertiaryColor}
  );

  &:hover {
    font-weight: 800;
    background: linear-gradient(
      to bottom,
      transparent,
      75%,
      transparent,
      90%,
      ${lightTheme.tertiaryColor}
    );
  }
`;

const PageMenuButton: React.FC<PageMenuButtonProps> = ({text}) => {
    return (
        <StyledButton>
            {text}
        </StyledButton>
    )
}

export default PageMenuButton;