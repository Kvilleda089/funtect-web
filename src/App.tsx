import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import FormAppointment from './components/FormAppointment';
import PracticeAdviceSection from './components/PracticeAdviceSection';
import AboutUsSection from './components/AboutUsSection';
import AttorneysSection from './components/AttorneysSection';
import ContactSection from './components/ContactSection';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='flex justify-between p-16'>
        <MainSection/>
        <FormAppointment/>
      </div>

      <div className='flex justify-center'>
        <PracticeAdviceSection/>
      </div>

      <div className='flex justify-center'>
        <AboutUsSection/>
      </div>

      <div className='flex justify-center'>
        <AttorneysSection/>
      </div>

      <div className='flex flex-col items-start'>
        <ContactSection />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
