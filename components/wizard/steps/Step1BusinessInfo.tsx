import React from 'react';
import { useWizard } from '../WizardContext';

const businessNiches = [
  'E-Commerce',
  'Local Service',
  'Health & Wellness',
  'Tech Startups',
  'Professional Services',
  'Food & Beverage',
  'Real Estate',
  'Education',
  'Creative Services',
  'Manufacturing',
];

export default function Step1BusinessInfo() {
  const { wizardData, updateWizardData } = useWizard();

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
          Business Name
        </label>
        <input
          type="text"
          id="businessName"
          value={wizardData.businessName}
          onChange={(e) => updateWizardData({ businessName: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your business name"
        />
      </div>

      <div>
        <label htmlFor="businessNiche" className="block text-sm font-medium text-gray-700">
          Business Niche
        </label>
        <select
          id="businessNiche"
          value={wizardData.businessNiche}
          onChange={(e) => updateWizardData({ businessNiche: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select your business niche</option>
          {businessNiches.map((niche) => (
            <option key={niche} value={niche}>
              {niche}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}