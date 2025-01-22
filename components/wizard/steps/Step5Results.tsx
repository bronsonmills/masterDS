import React from 'react';
import { useWizard } from '../WizardContext';
import { TrendingUp, Target, Users } from 'lucide-react';

export default function Step5Results() {
  const { wizardData } = useWizard();

  // Calculate potential improvements
  const currentLeads = wizardData.leadsPerYear;
  const currentConversion = wizardData.conversionRate / 100;
  const currentCustomers = Math.round(currentLeads * currentConversion);

  // Project 20% improvement
  const improvedLeads = Math.round(currentLeads * 1.1);
  const improvedConversion = Math.min(currentConversion * 1.1, 1);
  const improvedCustomers = Math.round(improvedLeads * improvedConversion);

  const getContentSuggestions = () => {
    const suggestions = {
      'E-Commerce': [
        'Product showcase posts',
        'Customer reviews and testimonials',
        'Behind-the-scenes content',
        'Product tutorials and tips',
      ],
      'Local Service': [
        'Customer success stories',
        'Local community involvement',
        'Service highlights',
        'Team spotlights',
      ],
      'Health & Wellness': [
        'Expert tips and advice',
        'Client transformation stories',
        'Wellness challenges',
        'Educational content',
      ],
      'Tech Startups': [
        'Product updates',
        'Industry insights',
        'Tech tips and tricks',
        'Company culture posts',
      ],
    }[wizardData.businessNiche] || [
      'Industry insights',
      'Customer testimonials',
      'Behind-the-scenes content',
      'Educational content',
    ];

    return suggestions;
  };

  return (
    <div className="space-y-8">
      {/* Current vs Improved Metrics */}
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Current Performance</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">
                  {currentLeads.toLocaleString()} leads per year
                </span>
              </div>
              <div className="flex items-center">
                <Target className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">
                  {(currentConversion * 100).toFixed(1)}% conversion rate
                </span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">
                  {currentCustomers.toLocaleString()} customers per year
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-blue-50">
            <h3 className="text-lg font-medium text-blue-900 mb-4">Potential With Improvements</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm text-blue-600">
                  {improvedLeads.toLocaleString()} leads per year
                </span>
              </div>
              <div className="flex items-center">
                <Target className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm text-blue-600">
                  {(improvedConversion * 100).toFixed(1)}% conversion rate
                </span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm text-blue-600">
                  {improvedCustomers.toLocaleString()} customers per year
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Content Strategy */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Recommended Content Strategy for {wizardData.businessNiche}
        </h3>
        <div className="bg-white rounded-lg shadow p-6">
          <ul className="space-y-4">
            {getContentSuggestions().map((suggestion, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-sm text-blue-600">{index + 1}</span>
                </div>
                <span className="ml-3 text-gray-600">{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}