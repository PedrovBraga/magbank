import React from "react";
import Hero from '../components/Hero';
import CreditCard from '../components/CreditCard';
import CardList from '../components/CardList';
import CenteredButton from '../components/CenteredButton';
import Institutional from '../components/Institutional';
import Faq from '../components/FAQ';

import posts from '../data/posts';

const Home = ({ handleClick }) => (
    <>
      <Hero />

      <CreditCard />
      <CardList posts={posts}/>
      <CenteredButton onClick={handleClick}><b>Faça sua conta</b></CenteredButton>
      
      <Institutional />
      <Faq />
    </>
);

export default Home;
