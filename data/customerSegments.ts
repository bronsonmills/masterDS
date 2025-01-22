// src/data/customerSegments.ts

export const customerSegments = [
  {
    id: 'millennials',
    label: 'Millennials (Ages 25-40)',
    description: 'Tech-savvy individuals with a love for digital experiences.',
    demographics: {
      ageRange: '25-40',
      incomeLevel: 'Medium-High',
      location: 'Urban',
    },
    psychographics: {
      interests: ['Technology', 'Social Media', 'Environmental Impact'],
      values: ['Innovation', 'Convenience'],
    },
    behaviors: ['Frequent Online Shoppers', 'Brand-Selective'],
    needs: ['Convenience', 'Affordability'],
  },
  {
    id: 'gen-z',
    label: 'Gen Z (Ages 18-24)',
    description: 'The digital native generation looking for instant results and trends.',
    demographics: {
      ageRange: '18-24',
      incomeLevel: 'Low-Medium',
      location: 'Urban/Suburban',
    },
    psychographics: {
      interests: ['Gaming', 'Social Media', 'Sustainability'],
      values: ['Individuality', 'Environmental Impact'],
    },
    behaviors: ['Value Sustainability', 'Heavy Social Media Usage'],
    needs: ['Value for Money', 'Quality Products'],
  },
  {
    id: 'baby-boomers',
    label: 'Baby Boomers (Ages 55-75)',
    description: 'Experienced professionals seeking stability and proven solutions.',
    demographics: {
      ageRange: '55-75',
      incomeLevel: 'High',
      location: 'Suburban/Rural',
    },
    psychographics: {
      interests: ['Home Improvement', 'Travel'],
      values: ['Reliability', 'Customer Service'],
    },
    behaviors: ['Low-tech Users', 'Traditional Buyers'],
    needs: ['Security', 'Reliability'],
  },
  {
    id: 'price-sensitive-shoppers',
    label: 'Price-Sensitive Shoppers',
    description: 'Customers highly focused on finding the best deal.',
    demographics: {
      incomeLevel: 'Low-Medium',
      location: 'Urban/Suburban',
    },
    psychographics: {
      interests: ['Discounts', 'Couponing'],
      values: ['Frugality', 'Smart Spending'],
    },
    behaviors: ['Shop During Sales', 'Heavy Coupon Use'],
    needs: ['Lowest Price', 'Deals & Discounts'],
  },
  {
    id: 'health-conscious',
    label: 'Health-Conscious Consumers',
    description: 'Customers focused on living a healthy lifestyle, prioritizing wellness.',
    demographics: {
      ageRange: '18-45',
      incomeLevel: 'Medium-High',
      location: 'Urban/Suburban',
    },
    psychographics: {
      interests: ['Fitness', 'Organic Food', 'Mental Health'],
      values: ['Wellness', 'Sustainability'],
    },
    behaviors: ['Buy Organic Products', 'Frequent Gym-Goers'],
    needs: ['Health-related Products', 'Support for Well-being'],
  },
  {
    id: 'small-business-owners',
    label: 'Small Business Owners',
    description: 'Individuals who run their own business and need affordable solutions.',
    demographics: {
      ageRange: '30-55',
      incomeLevel: 'Medium',
      location: 'Urban/Suburban',
    },
    psychographics: {
      interests: ['Entrepreneurship', 'Business Growth', 'Networking'],
      values: ['Efficiency', 'Innovation'],
    },
    behaviors: ['Seek Time-Saving Solutions', 'Value Professional Services'],
    needs: ['Business Development Tools', 'Marketing Support'],
  },
  {
    id: 'luxury-buyers',
    label: 'Luxury Buyers',
    description: 'Affluent consumers seeking premium products and experiences.',
    demographics: {
      ageRange: '35-60',
      incomeLevel: 'High',
      location: 'Urban',
    },
    psychographics: {
      interests: ['High-end Fashion', 'Fine Dining', 'Luxury Travel'],
      values: ['Exclusivity', 'Quality'],
    },
    behaviors: ['Shop for High-End Products', 'Loyal to Premium Brands'],
    needs: ['Status-symbol Products', 'Personalized Services'],
  },
  {
    id: 'sustainability-conscious',
    label: 'Sustainability-Conscious Consumers',
    description: 'Customers who prioritize eco-friendly and socially responsible products.',
    demographics: {
      ageRange: '20-45',
      incomeLevel: 'Medium-High',
      location: 'Urban',
    },
    psychographics: {
      interests: ['Environmental Activism', 'Green Living'],
      values: ['Sustainability', 'Fair Trade'],
    },
    behaviors: ['Purchase from Ethical Brands', 'Recycle and Reduce Waste'],
    needs: ['Sustainable Products', 'Corporate Transparency'],
  },
  {
    id: 'busy-parents',
    label: 'Busy Parents',
    description: 'Parents who value convenience and time-saving solutions for family life.',
    demographics: {
      ageRange: '25-45',
      incomeLevel: 'Medium',
      location: 'Suburban',
    },
    psychographics: {
      interests: ['Family Activities', 'Parenting Tips'],
      values: ['Time Management', 'Convenience'],
    },
    behaviors: ['Shop for Household Items', 'Use Time-Saving Tech'],
    needs: ['Products for Families', 'Easy Shopping Experience'],
  },
  {
    id: 'students',
    label: 'Students (Ages 18-24)',
    description: 'Young individuals attending school, seeking affordable options and deals.',
    demographics: {
      ageRange: '18-24',
      incomeLevel: 'Low',
      location: 'Urban/College Towns',
    },
    psychographics: {
      interests: ['Learning', 'Social Media', 'Budgeting'],
      values: ['Affordability', 'Convenience'],
    },
    behaviors: ['Price-Sensitive Shoppers', 'Use Technology Frequently'],
    needs: ['Discounts', 'Affordable Products for Students'],
  },
  {
    id: 'frequent-travelers',
    label: 'Frequent Travelers',
    description: 'Individuals who travel frequently for work or leisure and need travel services.',
    demographics: {
      ageRange: '25-50',
      incomeLevel: 'Medium-High',
      location: 'Urban',
    },
    psychographics: {
      interests: ['Travel', 'Adventure', 'Cultural Exploration'],
      values: ['Flexibility', 'Experiential Richness'],
    },
    behaviors: ['Frequent Flyers', 'Use Travel Rewards'],
    needs: ['Travel Accessories', 'Hotel Discounts', 'Booking Services'],
  },
  {
    id: 'tech-enthusiasts',
    label: 'Tech Enthusiasts',
    description: 'Early adopters who love exploring the latest technology and gadgets.',
    demographics: {
      ageRange: '18-40',
      incomeLevel: 'Medium-High',
      location: 'Urban',
    },
    psychographics: {
      interests: ['Tech Gadgets', 'New Software', 'Video Games'],
      values: ['Innovation', 'Efficiency'],
    },
    behaviors: ['Constantly Upgrading Devices', 'Follow Tech News'],
    needs: ['Cutting-Edge Products', 'Exclusive Tech Updates'],
  },
  {
    id: 'remote-workers',
    label: 'Remote Workers',
    description: 'Individuals working from home or flexible work environments.',
    demographics: {
      ageRange: '25-50',
      incomeLevel: 'Medium',
      location: 'Anywhere',
    },
    psychographics: {
      interests: ['Productivity', 'Work-Life Balance'],
      values: ['Efficiency', 'Autonomy'],
    },
    behaviors: ['Buy Home Office Products', 'Seek Flexibility'],
    needs: ['Remote Work Tools', 'Home Office Equipment'],
  }
];