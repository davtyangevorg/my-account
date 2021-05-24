import React from 'react'

import { TabWrapper, HeaderWrapper, NavBar, Item, SectionWrapper } from './styles.js'

const Tab = ({ data, selectedIndex, setSelectedIndex }) => {


    return (
        <TabWrapper>
            <HeaderWrapper>
                <NavBar>
                    {data.map((item, index) => {
                        return <Item
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            selected={selectedIndex === index}
                        >
                            {item.text}
                        </Item>
                    })}
                </NavBar>
            </HeaderWrapper>
            <SectionWrapper>
                {data[selectedIndex].component}
            </SectionWrapper>
        </TabWrapper>
    )
}

export default Tab