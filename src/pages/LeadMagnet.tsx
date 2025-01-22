import React from 'react';
import LeadMagnetWizard from '../components/wizard/LeadMagnetWizard';

export default function LeadMagnet() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Create Your Marketing Plan
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Generate a customized 30-day content calendar tailored to your business needs in just a few
            minutes.
          </p>
        </div>

        <LeadMagnetWizard />
      </div>
    </div>
  );
}