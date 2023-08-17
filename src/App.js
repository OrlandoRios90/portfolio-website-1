import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Nav2 } from './components/Nav2';
import { LandingSection2 } from './components/LandingSection2';
import { SkillsSection } from './components/SkillsSection';
import { ContactMe } from './components/ContactMe';

function App() {
  return (
    <ChakraProvider>
      <Nav2 />      
      <LandingSection2 />
      <SkillsSection/>
      <ContactMe />
    </ChakraProvider>
  );
}

export default App;
