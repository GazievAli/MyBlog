'use client'

import { useState } from 'react'
import NavBar from '@/components/Header/NavBar'
import Main from '@/components/Header/Main'
import AboutMe from '@/components/About/AboutMe'
import Terminal from '@/components/Terminal/Terminal'
import TerminalIco from '@/components/Terminal/TerminalIco'
import Footer from '@/components/Footer/Footer'
import {ScrollingStack} from "@/components/ScrollingStack/ScrollingStack";
import {DevLife} from "@/components/DevLife/DevLife";
import {EducationScience} from "@/components/EducationScience/EducationScience";

export default function Home() {
    const [terminalActive, setTerminalActive] = useState(true)

    const hiddenTerminal = () => {
        setTerminalActive(!terminalActive)
    }

    return (
        <div className="bg-[#0d1117] min-h-screen flex flex-col">

            <NavBar />

            {/* Секции лендинга */}
            <Main />
            <ScrollingStack />
            <AboutMe />
            <DevLife />
            <EducationScience />
            {/* Терминал */}
            {terminalActive ? (
                <Terminal name="user" hiddenTerminal={hiddenTerminal} />
            ) : (
                <TerminalIco hideTerminal={hiddenTerminal} />
            )}

            <Footer />
        </div>
    )
}