import React from 'react'
import { Topbar } from './components/Topbar'
import { Navigation } from './components/Navigation'
import { Search } from './components/Search'
import { Header } from './components/Header'
import { Ranking } from './components/Ranking'
import { Experiences } from './components/Experiences'

const headerStyle = {
    fontWeight: '700',
    color: '#484848',
    fontSize: '1.2em'
}

export const Home = () => (
    <div className="page">
        <Topbar />
        <Navigation />
        <Search />
        <Header styles={headerStyle} title="Top de aventuras" />
        <Ranking />
        <Header styles={headerStyle} title="Lista de aventuras" />
        <Experiences />
    </div>
)