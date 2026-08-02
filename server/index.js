import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory submissions store
const inquiries = [];

// Sample data derived from Nexora Digital Framer app
const servicesData = [
  {
    id: 'web-dev',
    title: 'Website Development',
    category: 'Development',
    description: 'High-performance business, corporate, and e-commerce websites engineered to convert.',
    tags: ['Business Sites', 'Landing Pages', 'E-Commerce', 'Portals', 'Redesigns', 'Maintenance'],
    icon: 'Globe'
  },
  {
    id: 'nocode-dev',
    title: 'No-Code Development',
    category: 'No-Code',
    description: 'Fast-launch websites and products built on the best modern platforms.',
    tags: ['Framer', 'Webflow', 'WordPress', 'Wix Studio', 'Bubble', 'FlutterFlow', 'Shopify'],
    icon: 'Zap'
  },
  {
    id: 'fullstack-dev',
    title: 'Custom Full-Stack Development',
    category: 'Development',
    description: 'Enterprise software, SaaS platforms, and business systems built to scale.',
    tags: ['CRM', 'ERP', 'HRMS', 'SaaS', 'Dashboards', 'APIs', 'Payments', 'Booking Systems'],
    icon: 'Code'
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    category: 'Mobile',
    description: 'Native and cross-platform apps for customers, teams, and operations.',
    tags: ['Android', 'iOS', 'Cross Platform', 'PWA', 'Delivery', 'Booking', 'Healthcare'],
    icon: 'Smartphone'
  },
  {
    id: 'ui-ux',
    title: 'UI / UX Design',
    category: 'Design',
    description: 'Interfaces that feel effortless — researched, prototyped, and systemized.',
    tags: ['App Design', 'Web Design', 'Dashboards', 'Wireframes', 'Prototypes', 'Design Systems'],
    icon: 'Layout'
  },
  {
    id: 'branding',
    title: 'Branding & Creative Design',
    category: 'Design',
    description: 'Identities and creative assets that make your business unforgettable.',
    tags: ['Logos', 'Brand Identity', 'Brochures', 'Packaging', 'Pitch Decks', 'Social Creatives'],
    icon: 'Palette'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Growth',
    description: 'Data-driven growth across search, social, and paid channels.',
    tags: ['SEO', 'Local SEO', 'Google Ads', 'Meta Ads', 'Content', 'Email', 'Analytics'],
    icon: 'TrendingUp'
  },
  {
    id: 'cloud-infra',
    title: 'Cloud & Infrastructure',
    category: 'Infrastructure',
    description: 'Reliable hosting, security, and performance for total peace of mind.',
    tags: ['Hosting', 'Cloudflare', 'SSL', 'Migration', 'Backups', 'Security', 'Optimization'],
    icon: 'Cloud'
  },
  {
    id: 'api-integrations',
    title: 'API & Integrations',
    category: 'Integration',
    description: 'Connect your stack — payments, CRMs, analytics, and beyond.',
    tags: ['Razorpay', 'Stripe', 'PayPal', 'HubSpot', 'Zoho', 'Salesforce', 'REST APIs'],
    icon: 'Layers'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    category: 'E-Commerce',
    description: 'Stores and marketplaces built to sell, ship, and scale.',
    tags: ['Shopify', 'WooCommerce', 'Magento', 'B2B Portals', 'Marketplaces', 'Shipping'],
    icon: 'ShoppingBag'
  }
];

const projectsData = [
  {
    id: 'medicare-plus',
    title: 'MediCare Plus Hospital Platform',
    category: 'Software',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    problem: 'Paper-based patient records slowed down appointments and billing across three clinic locations.',
    solution: 'A custom hospital management system with scheduling, EMR, billing, and role-based dashboards.',
    impact: 'Admin time cut by 60% and zero missed appointments.',
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'savoria-restaurant',
    title: 'Savoria Restaurant Group Website',
    category: 'Website',
    tech: ['Framer', 'CMS', 'SEO'],
    problem: 'An outdated site with no online reservations was losing bookings to competitors.',
    solution: 'A premium multi-location website with menus, table booking, and local SEO optimization.',
    impact: 'Online reservations up 3.2× in the first quarter.',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'fieldsync-delivery',
    title: 'FieldSync Delivery App',
    category: 'Mobile App',
    tech: ['Flutter', 'Firebase', 'Maps API'],
    problem: 'A logistics SME coordinated drivers over phone calls with no live visibility.',
    solution: 'A cross-platform driver and customer app with live tracking, routing, and proof of delivery.',
    impact: 'Deliveries per driver up 40%, support calls down 70%.',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'northwind-realty',
    title: 'Northwind Realty Brand Identity',
    category: 'Branding',
    tech: ['Illustrator', 'Figma', 'Print'],
    problem: 'A growing real estate firm looked indistinguishable from every local competitor.',
    solution: 'A full identity system — logo, stationery, brochures, and social templates.',
    impact: 'Brand recall doubled in post-launch client surveys.',
    gradient: 'from-amber-500 to-emerald-600'
  },
  {
    id: 'learnhub-lms',
    title: 'LearnHub LMS Dashboard',
    category: 'UI/UX',
    tech: ['Figma', 'Design System', 'Prototyping'],
    problem: 'Students abandoned courses because the learning platform felt cluttered and confusing.',
    solution: 'A complete UX overhaul with a design system, simplified navigation, and progress-first dashboards.',
    impact: 'Course completion rates improved by 45%.',
    gradient: 'from-violet-600 to-cyan-500'
  },
  {
    id: 'vertex-manufacturing',
    title: 'Vertex Manufacturing Growth Campaign',
    category: 'Digital Marketing',
    tech: ['SEO', 'Google Ads', 'Analytics'],
    problem: 'A B2B manufacturer relied entirely on trade shows for lead generation.',
    solution: 'Technical SEO, targeted Google Ads, and conversion-optimized landing pages.',
    impact: 'Inbound leads up 5× with 38% lower cost per lead.',
    gradient: 'from-emerald-500 to-teal-600'
  }
];

const faqsData = [
  {
    q: 'Should I choose No-Code or Full-Stack development?',
    a: 'It depends on your goals. No-Code platforms like Framer or Webflow are perfect for fast, beautiful marketing sites. Full-stack development is the right choice for custom software, complex logic, and products that must scale. We help you decide based on budget, timeline, and growth plans.'
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Absolutely. We audit your current site, keep what works, and rebuild what doesn’t — improving design, performance, SEO, and conversion in the process.'
  },
  {
    q: 'Do you provide SEO?',
    a: 'Yes. Every site we build is SEO-optimized from day one — semantic structure, metadata, performance, and schema. We also offer ongoing SEO, local SEO, and content strategy as a service.'
  },
  {
    q: 'Can you maintain my website after launch?',
    a: 'Yes — maintenance plans cover updates, backups, security monitoring, content changes, and performance optimization, so your site keeps getting better.'
  },
  {
    q: 'How long does a project take?',
    a: 'A typical business website takes 2–4 weeks. Larger builds like custom software or mobile apps range from 6 weeks to several months. We share a clear timeline before any work begins.'
  },
  {
    q: 'How much does a website cost?',
    a: 'It depends on scope. No-Code websites start at accessible price points, while custom platforms are quoted per project. Every proposal is transparent with no hidden costs.'
  },
  {
    q: 'Can you build custom software for my business?',
    a: 'Yes — CRMs, ERPs, booking systems, dashboards, SaaS products, and more. We design custom systems around your exact workflows, not the other way around.'
  },
  {
    q: 'Do you develop mobile applications?',
    a: 'We build Android, iOS, and cross-platform apps — from customer-facing apps to internal tools for employees, delivery, and bookings.'
  }
];

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Stats API
app.get('/api/stats', (req, res) => {
  res.json([
    { number: '100+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Industries Served' },
    { number: '99%', label: 'Client Satisfaction' }
  ]);
});

// Services API
app.get('/api/services', (req, res) => {
  res.json(servicesData);
});

// Projects API
app.get('/api/projects', (req, res) => {
  res.json(projectsData);
});

// FAQs API
app.get('/api/faqs', (req, res) => {
  res.json(faqsData);
});

// Contact Submission API
app.post('/api/contact', (req, res) => {
  const { name, email, service, details } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const inquiry = {
    id: `NEX-${Date.now().toString(36).toUpperCase()}`,
    name,
    email,
    service: service || 'General Consultation',
    details: details || '',
    createdAt: new Date().toISOString()
  };

  inquiries.push(inquiry);
  console.log('New Consultation Inquiry received:', inquiry);

  res.status(201).json({
    success: true,
    message: 'Thank you! Your free consultation request has been received. Our team will contact you within 2 hours.',
    inquiryId: inquiry.id
  });
});

app.listen(PORT, () => {
  console.log(`Nexora Digital API Server listening on port ${PORT}`);
});
