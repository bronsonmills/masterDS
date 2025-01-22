import React from 'react';
import { useWizard } from '../WizardContext';

const marketingGoals = [
  {
    id: 'increase-sales',
    label: 'Increase Sales',
    description: 'Drive more revenue through digital channels',
  },
  {
    id: 'grow-social',
    label: 'Grow Social Media Following',
    description: 'Build a stronger presence on social platforms',
  },
  {
    id: 'build-email',
    label: 'Build Email List',
    description: 'Grow your email subscriber base for direct marketing',
  },
  {
    id: 'improve-seo',
    label: 'Improve Local SEO',
    description: 'Rank higher in local search results',
  },
  {
    id: 'brand-awareness',
    label: 'Increase Brand Awareness',
    description: 'Make your brand more recognizable in your market',
  },
];

const MAX_GOALS = 2;

export default function Step2MarketingGoals() {
  const { wizardData, updateWizardData } = useWizard();

  const handleGoalToggle = (goalId: string) => {
    const currentGoals = wizardData.marketingGoals;
    let newGoals;

    if (currentGoals.includes(goalId)) {
      // Remove the goal if it's already selected
      newGoals = currentGoals.filter(g => g !== goalId);
    } else {
      // Add the goal only if we haven't reached the maximum
      if (currentGoals.length < MAX_GOALS) {
        newGoals = [...currentGoals, goalId];
      } else {
        return; // Don't add if we've reached the limit
      }
    }
    
    updateWizardData({ marketingGoals: newGoals });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="text-base font-medium text-gray-900">
          What are your main marketing goals?
        </label>
        <p className="text-sm text-gray-500">Select up to {MAX_GOALS} goals that are most important to your business</p>
        <div className="mt-4 space-y-4">
          {marketingGoals.map((goal) => {
            const isSelected = wizardData.marketingGoals.includes(goal.id);
            const isDisabled = !isSelected && wizardData.marketingGoals.length >= MAX_GOALS;

            return (
              <div key={goal.id} className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id={goal.id}
                    type="checkbox"
                    checked={isSelected}
                    disabled={isDisabled}
                    onChange={() => handleGoalToggle(goal.id)}
                    className={`h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500
                      ${isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor={goal.id}
                    className={`text-sm font-medium ${
                      isDisabled ? 'text-gray-400' : 'text-gray-700'
                    } ${isSelected ? 'text-blue-600' : ''}`}
                  >
                    {goal.label}
                  </label>
                  <p className={`text-sm ${isDisabled ? 'text-gray-400' : 'text-gray-500'}`}>
                    {goal.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700">
          Additional Details
        </label>
        <textarea
          id="additionalDetails"
          rows={4}
          value={wizardData.additionalDetails}
          onChange={(e) => updateWizardData({ additionalDetails: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Tell us more about your specific marketing goals..."
        />
      </div>
    </div>
  );
}