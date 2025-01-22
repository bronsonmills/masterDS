import React from 'react';
import { useWizard } from './WizardContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Button from '../Button';

interface WizardLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  blurb: string;
}

export default function WizardLayout({ children, title, description, blurb}: WizardLayoutProps) {
  const { currentStep, setCurrentStep, isStepValid } = useWizard();
  
  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps && isStepValid(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-2">
            <div
              className="bg-blue-600 h-2 transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600 mb-8">{description}</p>
            {blurb && (
          <p className="mt-4 text-sm text-gray-600 font-italic">
            {blurb}
          </p>)}

            {children}

            {/* Navigation */}
            <div className="mt-8 flex justify-between">
              {currentStep > 1 ? (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex items-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              ) : (
                <div aria-hidden="true" />
              )}

              {currentStep < totalSteps && (
                <Button
                  variant="primary"
                  onClick={handleNext}
                  disabled={!isStepValid(currentStep)}
                  className="flex items-center"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>

            {/* Step Indicator */}
            <div className="mt-6 text-center text-sm text-gray-500">
              Step {currentStep} of {totalSteps}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}