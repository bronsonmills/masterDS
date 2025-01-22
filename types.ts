export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}