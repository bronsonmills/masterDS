import React from 'react';
import { WizardProvider } from './WizardContext';
import WizardLayout from './WizardLayout';
import Step1BusinessInfo from './steps/Step1BusinessInfo';
import Step2MarketingGoals from './steps/Step2MarketingGoals';
import Step3LeadsConversion from './steps/Step3LeadsConversion';
import Step4Results from './steps/Step4Results';
import Step5Calendar from './steps/Step5Calendar';
import { useWizard } from './WizardContext';

function WizardContent() {
  const { currentStep } = useWizard();

  const steps = [
    {
      component: Step1BusinessInfo,
      title: 'Business Information',
      description: "Let's start by getting to know your business better",
    },
    {
      component: Step2MarketingGoals,
      title: 'Marketing Goals',
      description: 'What do you want to achieve with your marketing efforts?',
    },
    {
      component: Step3LeadsConversion,
      title: 'Current Performance',
      description: "Let's understand your current marketing performance",
    },
    {
      component: Step4Results,
      title: 'Analysis & Insights',
      description: 'Here are your potential growth opportunities',
    },
    {
      component: Step5Calendar,
      title: 'Your Content Calendar',
      description: 'Your personalized 30-day content strategy',
    },
  ];

  const CurrentStepComponent = steps[currentStep - 1].component;
  const { title, description } = steps[currentStep - 1];

  return (
    <WizardLayout title={title} description={description}>
      <CurrentStepComponent />
    </WizardLayout>
  );
}

export default function LeadMagnetWizard() {
  return (
    <WizardProvider>
      <WizardContent />
    </WizardProvider>
  );
}