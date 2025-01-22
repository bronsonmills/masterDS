import React from 'react';
import { useWizard } from '../WizardContext';
import Button from '../../Button';
import { Calendar, Download } from 'lucide-react';

interface ContentItem {
  day: number;
  type: string;
  title: string;
  description: string;
}

export default function Step6Calendar() {
  const { wizardData } = useWizard();

  const generateContentCalendar = (): ContentItem[] => {
    const calendar: ContentItem[] = [];
    const contentTypes = {
      'E-Commerce': [
        { type: 'Product Showcase', title: 'Featured Product Spotlight' },
        { type: 'Customer Story', title: 'Customer Success Story' },
        { type: 'Promotion', title: 'Special Offer Announcement' },
        { type: 'Educational', title: 'Product Usage Tips' },
      ],
      'Local Service': [
        { type: 'Service Spotlight', title: 'Service Feature Highlight' },
        { type: 'Client Story', title: 'Client Testimonial' },
        { type: 'Local News', title: 'Community Update' },
        { type: 'Tips', title: 'Expert Advice' },
      ],
      'Health & Wellness': [
        { type: 'Wellness Tip', title: 'Daily Wellness Advice' },
        { type: 'Success Story', title: 'Client Transformation' },
        { type: 'Educational', title: 'Health Education Post' },
        { type: 'Recipe', title: 'Healthy Recipe Share' },
      ],
    }[wizardData.businessNiche] || [
      { type: 'Blog Post', title: 'Industry Insights' },
      { type: 'Social Media', title: 'Engagement Post' },
      { type: 'Newsletter', title: 'Weekly Update' },
      { type: 'Video', title: 'How-To Guide' },
    ];

    for (let day = 1; day <= 10; day++) {
      const contentType = contentTypes[day % contentTypes.length];
      calendar.push({
        day,
        type: contentType.type,
        title: contentType.title,
        description: `Customized ${contentType.type.toLowerCase()} for ${wizardData.businessName}`,
      });
    }

    return calendar;
  };

  const calendar = generateContentCalendar();

  const handleDownload = () => {
    // In a real implementation, this would generate and download a PDF
    alert('In a real implementation, this would download your custom calendar as a PDF!');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Your 10-Day Content Calendar</h3>
        <Button variant="primary" onClick={handleDownload}>
          <Download className="w-4 h-4 mr-2" />
          Download Calendar
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="max-h-[600px] overflow-y-auto">
          {calendar.map((item) => (
            <div
              key={item.day}
              className="p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-900">Day {item.day}</h4>
                    <span className="text-sm text-blue-600">{item.type}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{item.title}</p>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          This calendar is customized based on your business type ({wizardData.businessNiche}) and
          marketing goals. Each content piece is designed to help you achieve your objectives while
          maintaining a consistent online presence.
        </p>
      </div>
    </div>
  );
}