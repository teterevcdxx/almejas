import React from 'react'

import Header from '../components/header'
import Title from '../components/title'
import Promo from '../components/promo'
import Bg from '../components/bg'
import { Link } from 'gatsby';

const IndexPage = () => (
  <div>
  <Bg/>
  <div class="page">
    <Header />
    <img src="/images/logo.svg" alt="" />
    <Title />
    <div class="container">
      <div class="popular">
        <p>Popular</p>
        <ol>
          <li>
            <span>1.Omar</span>
            <span>30</span>
          </li>
          <li>
            <span>2.Pivo</span>
            <span>20</span>
          </li>
          <li>
            <span>3.Shrimp</span>
            <span>30</span>
          </li>
          <li>
            <span>4.Octopus</span>
            <span>12</span>
          </li>
          <li>
            <span>5.Snack</span>
            <span>81</span>
          </li>
          <li>
            <span>6.Ooo</span>
            <span>33</span>
          </li>
        </ol>
        <Link to="/menu/">Menu</Link>
      </div>
      <Promo Title="Special weekend offers"/>
      <Promo Title="The href attribute require."/>
    </div>
  </div>
  </div>
)

export default IndexPage
