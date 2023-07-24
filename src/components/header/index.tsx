import React from 'react';
import { styled } from 'styled-components';
import { lightTheme } from '../../themes/themes';
import { hexToRgba } from '../../utils/themes.tsx/hexToRGBA';
import PageMenuButton from './pageMenuButton';


const Wrapper = styled.div`
    width: 100%;
    background: ${ lightTheme.secondaryColor };
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 0.1rem solid ${ lightTheme.tertiaryColor };
    box-shadow: 0 0.2rem 0.5rem ${ hexToRgba(lightTheme.secondaryColor, 0.8) };
`

const ProfileImg = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    border: 0.1rem solid ${ lightTheme.tertiaryColor };
    background: ${ lightTheme.primaryColor };
`

const WebsiteTitle = styled.h2`
    font-family: ${ lightTheme.primaryFont };
    font-size: 36px;
    font-weight: 800;
    margin: 0;
    color: ${ lightTheme.textColor };
`

const TitleCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0.5rem;
`

const AccentBox = styled.span`
    height: 5rem;
    width: 0.2rem;
    margin: 0 0.5rem;
    background: ${ lightTheme.tertiaryColor };
`

const TitleContainer = styled.div`
    display: flex;
    height: 5rem;
    flex-direction: column-reverse;
    justify-content: space-between;
`

const Subheading = styled.h4 `
    font-family: ${ lightTheme.primaryFont };
    font-size: 16px;
    margin: 0 0 0 0;
    color: ${ lightTheme.textColor };
`
const MenuWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`

const vals: string[] = ["Here Are", "Some Basic", "Test Menu Items", "Of Varying", "Lengths"]
const Header = () => {
    return (
        <Wrapper>
            <TitleCard>
                <ProfileImg></ProfileImg>
                <AccentBox/>
                <TitleContainer>
                    <Subheading>
                        ...because I always love to talk about myself!
                    </Subheading>
                    <WebsiteTitle>
                        Brody Schwartz
                    </WebsiteTitle>
                </TitleContainer>
            </TitleCard>
            <MenuWrapper>
                {vals.map((label: string) => (
                    <PageMenuButton key={label} text={label} />
                ))}
            </MenuWrapper>
        </Wrapper>
    )
}

export default Header