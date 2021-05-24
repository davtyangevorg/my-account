import React, { useState } from 'react'

import { GlobalStyle, AppWrapper, Title } from './styles.js'

import Tab from '../components/Tab/index.jsx'

import General from '../Pages/General/index.jsx'
import MyColors from '../Pages/MyColors/index.jsx'
import Invoices from '../Pages/Invoices/index.jsx'
import Preferences from '../Pages/Preferences/index.jsx'

const tabData = [
    { text: 'General', component: <General /> },
    { text: 'Invoices', component: <Invoices /> },
    { text: 'Preferences', component: <Preferences /> },
    { text: 'My colors', component: <MyColors /> }
]

const App = () => {

    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <AppWrapper>
            <Title>My Account</Title>
            <Tab data={tabData} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
            <GlobalStyle />
        </AppWrapper>
    )
}

export default App