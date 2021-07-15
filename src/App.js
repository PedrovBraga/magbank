import React, {useState} from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import Institutional from './components/Institutional';
import Faq from './components/FAQ';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';
import "./App.scss";

import posts from './data/posts';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="App">
      <Navbar handleCreateAcc={() => setShowModal(true)} />
      <Hero />
      <CreditCard />
      <CardList posts={posts}/>
      <CenteredButton onClick={() => setShowModal(true)}><b>Faça sua conta</b></CenteredButton>
      <Institutional />
      <Faq />
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};

export default App;
