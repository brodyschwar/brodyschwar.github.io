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
    justify-content: center;
    align-items: center;
    background-color: ${ lightTheme.primaryColor };
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
    margin: 2rem 0;
`
const Title = styled.h1`
    margin: 0;
    font-family: ${ lightTheme.primaryFont };
    font-size: 96px;
    font-weight: 800;
    text-align: right;
    line-height: 5rem;

    @media (max-width: ${ screenSize.medium }) {
        font-size: 56px;
        line-height: 3rem;
    }

    @media (max-width: ${ screenSize.small }) {
        font-size: 36px;
        line-height: 2rem;
    }
`

const ImageCard = styled.div`
    height: 80vh;
    width: 30rem;
    border: 0.2rem solid ${ lightTheme.tertiaryColor };
    background-size: cover;
    background-position: center;
    margin-right: 1rem;

    @media (max-width: ${ screenSize.medium }) {
        height: 20rem;
        width: 15rem;
    }
`

const InfoSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    padding-top: 2rem;
    margin-right: 1rem;

    @media (max-width: ${ screenSize.medium }) {
        flex-direction: column-reverse;
        width: 100%;
    }
`

const TitleSection: React.FC<TitleSectionProps> = ({title, buttons, img}) => {
    return (
        <Backdrop>
            <Wrapper>
                <ImageCard style={{backgroundImage: `url("${img.img}")`}}/>
                <InfoSection>
                    <ButtonWrapper>
                        {buttons.map((button) => (
                            <RoundButton onClick={button.clickHandler}>{button.label}</RoundButton>
                        ))}
                    </ButtonWrapper>
                    <DecorativeSpacer/>
                    <Title>
                        {title}
                    </Title>
                </InfoSection>
            </Wrapper>
        </Backdrop>
    );
}

export default TitleSection;