import React from "react"
import Header from "../components/header"
import Title from '../components/title'
import Promo from '../components/promo'
import Bg from '../components/bg'
export default () =>(
    <div>
    <Bg/>
    <div class="page">
    <Header />
    <Title />
    <Promo Title="Menu here"/>
    </div>
    </div>
)