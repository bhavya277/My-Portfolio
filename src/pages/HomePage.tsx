import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { CurrentlyWidget } from '../components/sections/CurrentlyWidget';
import { EngineeringSnapshot } from '../components/sections/EngineeringSnapshot';
import { SelectedWork } from '../components/sections/SelectedWork';
import { ProofOfWork } from '../components/sections/ProofOfWork';
import { AreasExploring } from '../components/sections/AreasExploring';
import { LearningJourney } from '../components/sections/LearningJourney';
import { GitHubOverview } from '../components/sections/GitHubOverview';
import { ContactCTA } from '../components/sections/ContactCTA';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CurrentlyWidget />
      <EngineeringSnapshot />
      <SelectedWork />
      <ProofOfWork />
      <AreasExploring />
      <LearningJourney />
      <GitHubOverview />
      <ContactCTA />
    </div>
  );
};
