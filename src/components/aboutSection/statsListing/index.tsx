import React from 'react';
import { styled } from 'styled-components';
import { lightTheme, screenSize } from '../../../themes/themes';
import HorizontalLine from '../../horizontalLine';

export interface StatsListingProps {
    feild: string,
    stat: string,
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const InfoSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 0.5rem
`

const Stat = styled.p`
    font-family: ${ lightTheme.primaryFont };
    font-size: 16px;
    padding: 0;
    margin: 0;
`

const StatsListing: React.FC<StatsListingProps> = ({feild, stat}) => {
    return(
        <Wrapper>
            <HorizontalLine style={{width: "100%"}}/>
            <InfoSection>
                <Stat style={{fontWeight: "800"}}> {feild} </Stat>
                <Stat> {stat} </Stat>
            </InfoSection>
        </Wrapper>
    );
}

export default StatsListing;