import React from 'react';
import { useWizard } from '../WizardContext';

export default function Step3LeadsConversion() {
  const { wizardData, updateWizardData } = useWizard();

  const handleLeadsChange = (value: string) => {
    const leads = parseInt(value) || 0;
    updateWizardData({ leadsPerYear: leads });
  };

  const handleConversionChange = (value: string) => {
    const rate = parseFloat(value) || 0;
    updateWizardData({ conversionRate: rate });
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="leadsPerYear" className="block text-sm font-medium text-gray-700">
          How many leads does your business currently generate per year?
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="number"
            id="leadsPerYear"
            min="0"
            value={wizardData.leadsPerYear || ''}
            onChange={(e) => handleLeadsChange(e.target.value)}
            className="block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-blue-500 focus:ring-blue-500"
            placeholder="500"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">leads</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Enter the approximate number of leads your business generates annually
        </p>
      </div>

      <div>
        <label htmlFor="conversionRate" className="block text-sm font-medium text-gray-700">
          What is your average conversion rate?
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="number"
            id="conversionRate"
            min="0"
            max="100"
            step="0.1"
            value={wizardData.conversionRate || ''}
            onChange={(e) => handleConversionChange(e.target.value)}
            className="block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-blue-500 focus:ring-blue-500"
            placeholder="10"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Enter your current lead-to-customer conversion rate
        </p>
      </div>
    </div>
  );
}