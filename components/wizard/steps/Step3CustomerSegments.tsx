import React, { useState } from 'react';
import { useWizard } from '../WizardContext';
import { customerSegments } from '../../../data/customerSegments'; // Correct path

export default function Step3CustomerSegments() {
  const { wizardData, updateWizardData } = useWizard();
  const [selectedSegments, setSelectedSegments] = useState<string[]>(wizardData.customerSegments || []);

  const handleSegmentToggle = (segmentId: string) => {
    setSelectedSegments((prevSelected) => {
      if (prevSelected.includes(segmentId)) {
        return prevSelected.filter(id => id !== segmentId);
      } else {
        return [...prevSelected, segmentId];
      }
    });
  };

  const handleSave = () => {
    updateWizardData({ customerSegments: selectedSegments });
  };

  return (
    <div className="flex space-x-6">
      <div className="flex-1">
        <label className="text-base font-medium text-gray-900">
          What customer segments do you want to target?
        </label>
        <p className="text-sm text-gray-500">Select the customer segments that best represent your business.</p>
        <div className="mt-4 space-y-4">
          {customerSegments.map(segment => {
            const isSelected = selectedSegments.includes(segment.id);

            return (
              <div key={segment.id} className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id={segment.id}
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleSegmentToggle(segment.id)}
                    className={`h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${isSelected ? 'bg-blue-500' : ''}`}
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor={segment.id} className="text-sm font-medium text-gray-700">
                    {segment.label}
                  </label>
                  <p className="text-sm text-gray-500">
                    {segment.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* "Parking Lot" of Selected Segments */}
      <div className="w-1/4 p-4 bg-gray-100 rounded-md shadow-md">
        <h3 className="font-medium text-gray-700">Selected Segments</h3>
        <ul className="space-y-2 mt-3">
          {selectedSegments.map((segmentId) => {
            const segment = customerSegments.find(s => s.id === segmentId);
            return segment ? (
              <li key={segment.id} className="text-gray-700 flex items-center space-x-2">
                <span>{segment.label}</span>
              </li>
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
}
