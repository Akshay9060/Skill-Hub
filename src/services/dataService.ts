import { useState, useEffect } from 'react';

// ---------- Type Definitions ----------
interface Skill {
  id: string;
  name: string;
  category: string;
}

interface Interest {
  id: string;
  name: string;
  category: string;
}

interface BusinessIdea {
  id: string;
  title: string;
  description: string;
  skills: string[];
  estimatedCost: number;
  steps: string[];
}

interface RoadmapStep {
  step: number;
  title: string;
  description: string;
  resources: string[];
}

interface TrainingResource {
  id: string;
  type: 'video' | 'article' | 'checklist';
  title: string;
  description: string;
  skillId: string;
  url: string | null;
}

interface Mentor {
  id: string;
  name: string;
  expertise: string[];
  experience: string;
  bio: string;
  available: boolean;
}

// ---------- Custom Hook ----------
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// ---------- Sample Data ----------
const sampleSkills: Skill[] = [
  { id: 'skill-1', name: 'Tailoring', category: 'craft' },
  { id: 'skill-2', name: 'Handicrafts', category: 'craft' },
  { id: 'skill-3', name: 'Food Preparation', category: 'cooking' },
  { id: 'skill-4', name: 'Repair Services', category: 'technical' },
  { id: 'skill-5', name: 'Digital Marketing', category: 'digital' },
  { id: 'skill-6', name: 'Web Development', category: 'digital' },
  { id: 'skill-7', name: 'Graphic Design', category: 'creative' },
  { id: 'skill-8', name: 'Baking', category: 'cooking' },
  { id: 'skill-9', name: 'Carpentry', category: 'technical' },
  { id: 'skill-10', name: 'Painting', category: 'creative' },
];

const sampleInterests: Interest[] = [
  { id: 'interest-1', name: 'Women Empowerment', category: 'social' },
  { id: 'interest-2', name: 'Rural Development', category: 'social' },
  { id: 'interest-3', name: 'Sustainable Living', category: 'environment' },
  { id: 'interest-4', name: 'Tech Innovation', category: 'technology' },
  { id: 'interest-5', name: 'Small Business', category: 'business' },
  { id: 'interest-6', name: 'Artisan Crafts', category: 'art' },
  { id: 'interest-7', name: 'Food Services', category: 'food' },
];

// ---------- Exported Data & Functions ----------
export function useSkills(): Skill[] {
  return sampleSkills;
}

export function useInterests(): Interest[] {
  return sampleInterests;
}

export const businessIdeaMap: Record<string, BusinessIdea> = {
  'skill-1': { id: 'idea-1', title: 'Custom Clothing Boutique', description: 'Create and sell bespoke garments.', skills: ['skill-1'], estimatedCost: 200, steps: [' Idea validation', ' Sourcing fabrics', ' Setting up online store'] },
  'skill-2': { id: 'idea-2', title: 'Handicraft Marketplace', description: 'Sell unique handmade crafts online.', skills: ['skill-2'], estimatedCost: 150, steps: [' Market research', ' Product photography', ' Launch on platform'] },
  'skill-3': { id: 'idea-3', title: 'Catering Service', description: 'Provide tailored meal solutions for events.', skills: ['skill-3'], estimatedCost: 500, steps: [' Get certifications', ' Setup equipment', ' Promote via social'] },
  'skill-4': { id: 'idea-4', title: 'Repair & Maintenance', description: 'Offer repair services for electronics and appliances.', skills: ['skill-4'], estimatedCost: 100, steps: [' Gather tools', ' Market outreach', ' Book appointments'] },
  'skill-5': { id: 'idea-5', title: 'Digital Marketing Agency', description: 'Assist small businesses with online marketing.', skills: ['skill-5'], estimatedCost: 300, steps: [' Build portfolio', ' Acquire clients', ' Scale services'] },
  'skill-6': { id: 'idea-6', title: 'Freelance Web Development', description: 'Develop websites for clients on a freelance basis.', skills: ['skill-6'], estimatedCost: 200, steps: [' Learn modern frameworks', ' Create a portfolio site', ' Bid on projects'] },
  'skill-7': { id: 'idea-7', title: 'Graphic Design Studio', description: 'Provide branding and design solutions.', skills: ['skill-7'], estimatedCost: 250, steps: [' Acquire design software', ' Build a portfolio', ' Network with clients'] },
  'skill-8': { id: 'idea-8', title: 'Baking Business', description: 'Sell baked goods at local markets or online.', skills: ['skill-8'], estimatedCost: 150, steps: [' Recipe development', ' Food safety certification', ' Setup e-commerce'] },
  'skill-9': { id: 'idea-9', title: 'Carpentry Workshop', description: 'Create custom furniture and home decor.', skills: ['skill-9'], estimatedCost: 400, steps: [' Source materials', ' Build a workshop', ' Offer custom orders'] },
  'skill-10': { id: 'idea-10', title: 'Art Studio', description: 'Sell paintings and artwork online.', skills: ['skill-10'], estimatedCost: 180, steps: [' Purchase supplies', ' Create an online gallery', ' Ship artwork'] },
};

export function getBusinessIdeasBySkill(skillIds: string[]): BusinessIdea[] {
  return skillIds.map(id => businessIdeaMap[id]).filter(Boolean) as BusinessIdea[];
}

export const roadmapMap: Record<string, RoadmapStep[]> = {
  'idea-1': [
    { step: 1, title: 'Idea validation', description: 'Validate demand and pricing.', resources: ['Market Survey', 'Competitor Analysis'] },
    { step: 2, title: 'Sourcing fabrics', description: 'Find reliable suppliers.', resources: ['Fabric Wholesalers', 'Online Marketplaces'] },
    { step: 3, title: 'Setting up online store', description: 'Create e-commerce platform.', resources: ['Shopify Tutorial', 'Payment Gateway Setup'] },
  ],
  'idea-2': [
    { step: 1, title: 'Market research', description: 'Identify target customers.', resources: ['Industry Reports', 'Social Media Trends'] },
    { step: 2, title: 'Product photography', description: 'Professional photos of crafts.', resources: ['Photography Guide', 'Lighting Tips'] },
    { step: 3, title: 'Launch on platform', description: 'List products on marketplaces.', resources: ['Etsy Seller Guide', 'FBA Basics'] },
  ],
  'idea-3': [
    { step: 1, title: 'Get certifications', description: 'Food safety and hygiene.', resources: ['Food Safety Course', 'Local Health Dept'] },
    { step: 2, title: 'Setup equipment', description: 'Purchase necessary kitchen equipment.', resources: ['Equipment List', 'Budget Template'] },
    { step: 3, title: 'Promote via social', description: 'Create social media presence.', resources: ['Social Media Strategies', 'Instagram for Food'] },
  ],
  'idea-4': [
    { step: 1, title: 'Gather tools', description: 'Assemble repair toolkit.', resources: ['Tool Checklist', 'Online Tutorials'] },
    { step: 2, title: 'Market outreach', description: 'Advertise services locally.', resources: ['Flyer Design', 'Local Listings'] },
    { step: 3, title: 'Book appointments', description: 'Setup scheduling system.', resources: ['Scheduling Software', 'Google Calendar Integration'] },
  ],
  'idea-5': [
    { step: 1, title: 'Build portfolio', description: 'Showcase previous marketing projects.', resources: ['Canva Templates', 'Case Study Examples'] },
    { step: 2, title: 'Acquire clients', description: 'Approach small businesses.', resources: ['Cold Email Scripts', 'Networking Tips'] },
    { step: 3, title: 'Scale services', description: 'Expand service offerings.', resources: ['Service Pricing Guide', 'Team Hiring'] },
  ],
  'idea-6': [
    { step: 1, title: 'Learn modern frameworks', description: 'Master React, Node, etc.', resources: ['Free Coding Bootcamps', 'Documentation'] },
    { step: 2, title: 'Create a portfolio site', description: 'Show your work online.', resources: ['GitHub Pages', 'Portfolio Templates'] },
    { step: 3, title: 'Bid on projects', description: 'Use freelance platforms.', resources: ['Upwork Guide', 'Fiverr Tips'] },
  ],
  'idea-7': [
    { step: 1, title: 'Acquire design software', description: 'Learn Photoshop/Illustrator.', resources: ['Adobe Tutorials', 'Free Alternatives'] },
    { step: 2, title: 'Build a portfolio', description: 'Showcase designs.', resources: ['Behance', 'LinkedIn Portfolio'] },
    { step: 3, title: 'Network with clients', description: 'Connect via social media.', resources: ['LinkedIn Strategies', 'Twitter Marketing'] },
  ],
  'idea-8': [
    { step: 1, title: 'Recipe development', description: 'Create signature recipes.', resources: ['Recipe Books', 'Culinary School Online'] },
    { step: 2, title: 'Food safety certification', description: 'Obtain necessary certifications.', resources: ['Food Safety Course', 'Local Regulations'] },
    { step: 3, title: 'Setup e-commerce', description: 'Launch online store.', resources: ['BakeStation Guide', 'Payment Setup'] },
  ],
  'idea-9': [
    { step: 1, title: 'Source materials', description: 'Find wood and tools.', resources: ['Lumber Suppliers', 'Tool Discounts'] },
    { step: 2, title: 'Build a workshop', description: 'Create a functional workspace.', resources: ['Workshop Layout', 'Safety Equipment'] },
    { step: 3, title: 'Offer custom orders', description: 'Accept client projects.', resources: ['Quote Templates', 'Project Management'] },
  ],
  'idea-10': [
    { step: 1, title: 'Purchase supplies', description: 'Buy art materials.', resources: ['Art Supply List', 'Discount Stores'] },
    { step: 2, title: 'Create an online gallery', description: 'Set up digital gallery.', resources: ['Behance', 'Instagram Art'] },
    { step: 3, title: 'Ship artwork', description: 'Manage logistics.', resources: ['Shipping Carriers', 'Packaging Tips'] },
  ],
};

export const trainingResources: TrainingResource[] = [
  { id: 'res-1', type: 'video', title: 'Fundamentals of Tailoring', description: 'Learn basic stitching and measurements.', skillId: 'skill-1', url: 'https://example.com/tailoring-basics' },
  { id: 'res-2', type: 'article', title: 'Handicraft Marketing', description: 'Tips for selling handmade products.', skillId: 'skill-2', url: 'https://example.com/handicraft-marketing' },
  { id: 'res-3', type: 'checklist', title: 'Food Safety Checklist', description: 'Essential steps for safe food handling.', skillId: 'skill-3', url: null },
  { id: 'res-4', type: 'video', title: 'Electronic Repair Basics', description: 'Intro to troubleshooting appliances.', skillId: 'skill-4', url: 'https://example.com/repair-basics' },
  { id: 'res-5', type: 'article', title: 'Digital Marketing Strategy', description: 'Steps to promote your business online.', skillId: 'skill-5', url: 'https://example.com/digital-marketing' },
  { id: 'res-6', type: 'checklist', title: 'Web Development Project Checklist', description: 'Checklist for launching a website.', skillId: 'skill-6', url: null },
  { id: 'res-7', type: 'video', title: 'Graphic Design Fundamentals', description: 'Basics of visual communication.', skillId: 'skill-7', url: 'https://example.com/graphic-design-basics' },
  { id: 'res-8', type: 'article', title: 'Baking Business Plan', description: 'Key elements for a successful bakery.', skillId: 'skill-8', url: 'https://example.com/baking-business-plan' },
  { id: 'res-9', type: 'checklist', title: 'Carpentry Tool Safety', description: 'Safety protocols for tool usage.', skillId: 'skill-9', url: null },
  { id: 'res-10', type: 'video', title: 'Painting Techniques', description: 'Essential painting techniques for beginners.', skillId: 'skill-10', url: 'https://example.com/painting-techniques' },
];

const mentors: Mentor[] = [
  { id: 'mentor-1', name: 'Aisha Patel', expertise: ['Tailoring', 'Fashion Design'], experience: '10 years', bio: 'Experienced fashion designer with a passion for empowering women through craft.', available: true },
  { id: 'mentor-2', name: 'Ravi Kumar', expertise: ['Handicrafts'], experience: '8 years', bio: 'Specialist in traditional crafts and market access.', available: true },
  { id: 'mentor-3', name: 'Sofia Gomez', expertise: ['Food Preparation', 'Catering'], experience: '5 years', bio: 'Expert in culinary arts and small-scale food businesses.', available: false },
  { id: 'mentor-4', name: 'John Doe', expertise: ['Repair Services'], experience: '12 years', bio: 'Veteran technician providing repair solutions.', available: true },
  { id: 'mentor-5', name: 'Lina Zhou', expertise: ['Digital Marketing', 'Web Development'], experience: '6 years', bio: 'Digital marketing strategist and web developer.', available: true },
  { id: 'mentor-6', name: 'Priya Singh', expertise: ['Graphic Design'], experience: '7 years', bio: 'Creative designer helping brands stand out.', available: true },
  { id: 'mentor-7', name: 'Carlos Mendes', expertise: ['Baking'], experience: '4 years', bio: 'Passionate baker offering business guidance.', available: false },
  { id: 'mentor-8', name: 'Nina Petrova', expertise: ['Carpentry'], experience: '9 years', bio: 'Craftsperson specializing in bespoke furniture.', available: true },
  { id: 'mentor-9', name: 'Michael Brooks', expertise: ['Painting'], experience: '11 years', bio: 'Professional artist and art business consultant.', available: true },
];

export function getMentors(): Mentor[] {
  return mentors;
}

export function getMentorById(id: string): Mentor | undefined {
  return mentors.find(m => m.id === id);
}

export function getMentorsByExpertise(skillName: string): Mentor[] {
  return mentors.filter(m => m.expertise.includes(skillName));
}