import React from 'react';
import { WizardProvider } from './WizardContext';
import WizardLayout from './WizardLayout';
import Step1BusinessInfo from './steps/Step1BusinessInfo';
import Step2MarketingGoals from './steps/Step2MarketingGoals';
import Step3CustomerSegments from './steps/Step3CustomerSegments';
import Step4LeadsConversion from './steps/Step4LeadsConversion';
import Step5Results from './steps/Step5Results';
import Step6Calendar from './steps/Step6Calendar';
import { useWizard } from './WizardContext';

function WizardContent() {
  const { currentStep } = useWizard();

  const steps = [
    {
      component: Step1BusinessInfo,
      title: 'Business Information',
      description: "Let's start by getting to know your business better",
      blurb: "",
    }, 
    {
      component: Step2MarketingGoals,
      title: 'Marketing Goals',
      description: 'What do you want to achieve with your marketing efforts?',
      blurb: "",
    },
    {
      component: Step3CustomerSegments,
      title: 'Marketing Goals',
      description: 'What do you want to achieve with your marketing efforts?',
      blurb: "",
    },
    {
      component: Step4LeadsConversion,
      title: 'Current Performance',
      description: "Let's understand your current marketing performance",
      blurb: "",
    },
    {
      component: Step5Results,
      title: 'Analysis & Insights',
      description: 'Here are your potential growth opportunities',
      blurb:'Please note: We use conservative estimates in this analysis to provide a realistic starting point. Actual performance improvements may exceed these values, but we strive to avoid any exaggerated claims.`',
    },
    {
      component: Step6Calendar,
      title: 'Your Content Calendar',
      description: 'Your personalized 10-day content strategy',
      blurb: "",
    },
  ];

  const CurrentStepComponent = steps[currentStep - 1].component;
  const { title, description, blurb } = steps[currentStep - 1];

  return (
    <WizardLayout title={title} description={description} blurb={blurb}>
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