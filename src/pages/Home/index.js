import React from 'react'
import { Topbar } from './components/Topbar'
import { Navigation } from './components/Navigation'
import { Search } from './components/Search'
import { Header } from './components/Header'
import { Ranking } from './components/Ranking'
import { Experiences } from './components/Experiences'

export const Home = () => (
    <div>
        <Topbar />
        <Navigation />
        <Search />
        <Header />
        <Ranking />
        <Header />
        <Experiences />
    </div>
)