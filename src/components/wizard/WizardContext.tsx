import React, { createContext, useContext, useState } from 'react';

interface WizardData {
  businessName: string;
  businessNiche: string;
  marketingGoals: string[];
  additionalDetails: string;
  leadsPerYear: number;
  conversionRate: number;
}

interface WizardContextType {
  currentStep: number;
  wizardData: WizardData;
  setCurrentStep: (step: number) => void;
  updateWizardData: (data: Partial<WizardData>) => void;
  isStepValid: (step: number) => boolean;
}

const defaultWizardData: WizardData = {
  businessName: '',
  businessNiche: '',
  marketingGoals: [],
  additionalDetails: '',
  leadsPerYear: 0,
  conversionRate: 0,
};

const WizardContext = createContext<WizardContextType | undefined>(undefined);

export function WizardProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [wizardData, setWizardData] = useState<WizardData>(defaultWizardData);

  const updateWizardData = (data: Partial<WizardData>) => {
    setWizardData(prev => ({ ...prev, ...data }));
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1: // Business Information
        return !!wizardData.businessName && !!wizardData.businessNiche;
      case 2: // Marketing Goals
        return wizardData.marketingGoals.length > 0;
      case 3: // Leads and Conversion
        return wizardData.leadsPerYear > 0 && wizardData.conversionRate > 0;
      default:
        return true;
    }
  };

  return (
    <WizardContext.Provider
      value={{
        currentStep,
        wizardData,
        setCurrentStep,
        updateWizardData,
        isStepValid,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  const context = useContext(WizardContext);
  if (context === undefined) {
    throw new Error('useWizard must be used within a WizardProvider');
  }
  return context;
}