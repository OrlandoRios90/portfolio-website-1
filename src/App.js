import { ChakraProvider } from '@chakra-ui/react';
import { Nav } from './components/Nav';
import { Nav2 } from './components/Nav2';
import './App.css';
import { LandingSection } from './components/LandingSection';
import { LandingSection2 } from './components/LandingSection2';
import { SkillsSection } from './components/SkillsSection';

function App() {
  return (
    <ChakraProvider>
      <Nav2 />      
      <LandingSection2 />
      <SkillsSection/>
    </ChakraProvider>
  );
}

export default App;
