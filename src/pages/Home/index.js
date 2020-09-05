import React from 'react'
import { Search } from './components/Search'
import { Header } from './../../components/Header'
import { Ranking } from './components/Ranking'
import { Experiences } from './components/Experiences'
import { Page } from '../Page'

const headerStyle = {
    fontWeight: '700',
    color: '#484848',
    fontSize: '1.2em'
}

export const Home = () => (
    <Page>
        <Search />
        <Header styles={headerStyle} title="Top de aventuras" />
        <Ranking />
        <Header styles={headerStyle} title="Lista de aventuras" />
        <Experiences />
    </Page>
)
