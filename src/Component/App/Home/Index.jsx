import React from 'react'
import Header from '../../Core/Header/Index'
import BannerOne from './BannerOne'
import BuyCard from './BuyCard'
import WhatIs from './WhatIs'
import HowItWorks from './HowItWorks'
import Revenue from './Revenue'
import Crowdfunding from './Crowdfunding'
import UtilitiesInvest from './UtilitiesInvest'
import Sustainability from './Sustainability'
import Staking from './Staking'
import Audits from './Audits'
import FAQ from './FAQ'
import JoinUs from './JoinUs'
import Footer from '../../Core/Footer'
import Tokenomics from './Tokenomics'

const HomeCompoennt = () => {
  return (
    <div className='home-page'>
        <Header/>
        <BannerOne/>
        <WhatIs/>
        <HowItWorks/>
        <Revenue/>
        <Crowdfunding/>
        <UtilitiesInvest/>
        <Sustainability/>
        <Tokenomics/>
        <Staking/>
        <Audits/>
        <FAQ/>
        <JoinUs/>
        <Footer/>
    </div>
  )
}

export default HomeCompoennt