import React from 'react';
import { styled } from 'styled-components';
import { lightTheme, screenSize } from '../../themes/themes';
import RoundButton from '../buttons/RoundButton';
import { ButtonProps, ImageProps } from '../../data/types';

export interface TitleSectionProps {
    title: string,
    buttons: ButtonProps[],
    img: ImageProps
}

const Backdrop = styled.div`
    width: 100%
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background-size: cover;
    background-position: 50% 20%;
`

const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;

    @media (max-width: ${ screenSize.medium }) {
        flex-direction: column;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    justify-content: flex-end;

    @media (max-width: ${ screenSize.small }) {
        flex-flow: row wrap;
    }
`
const DecorativeSpacer = styled.span`
    width: 70%;
    height: 0.2rem;
    background-color: ${ lightTheme.tertiaryColor };
    margin: 1rem 0;
`
const Title = styled.h1`
    margin: 0;
    font-family: ${ lightTheme.primaryFont };
    font-size: 70px;
    font-weight: 800;
    text-align: right;
    line-height: 4rem;

    @media (max-width: ${ screenSize.medium }) {
        font-size: 56px;
        line-height: 3rem;
    }

    @media (max-width: ${ screenSize.small }) {
        font-size: 36px;
        line-height: 2rem;
    }
`

const InfoSection = styled.div`
    max-width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin: 1rem;
    padding: 1rem;
    background-color: ${ lightTheme.primaryColor };

    @media (max-width: ${ screenSize.small }) {
        flex-direction: column-reverse;
        width: 100%;
        max-width: 100%;
    }
    
    @media (max-width: ${ screenSize.xsmall }) {
        margin: 0.5rem;
    }
`

const TitleSection: React.FC<TitleSectionProps> = ({title, buttons, img}) => {
    return (
        <Backdrop style={{backgroundImage: `url("${img.img}")`}}>
            <InfoSection>
                <ButtonWrapper>
                    {buttons.map((button, index) => (
                        <RoundButton key={index} onClick={button.clickHandler}>{button.label}</RoundButton>
                    ))}
                </ButtonWrapper>
                <DecorativeSpacer/>
                <Title>
                    {title}
                </Title>
            </InfoSection>
        </Backdrop>
    );
}

export default TitleSection;