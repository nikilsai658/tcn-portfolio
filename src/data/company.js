import nextwash from '../assets/nextwash.png'
import hhLogo from '../assets/hh-logo.png'
import hh1 from '../assets/hh-1.jpg'
import hh2 from '../assets/hh-2.jpg'
import hh3 from '../assets/hh-3.jpg'
import hh4 from '../assets/hh-4.jpg'
import hh5 from '../assets/hh-5.jpg'
import nw1 from '../assets/nw-1.jpg'
import nw2 from '../assets/nw-2.jpg'
import nw3 from '../assets/nw-3.jpg'
import nw4 from '../assets/nw-4.jpg'
import nw5 from '../assets/nw-5.jpg'
import tcnLogo from '../assets/logo.png'
import lms1 from '../assets/lms-1.jpg'
import lmsTx1 from '../assets/lms-tx1.jpg'
import lmsTx2 from '../assets/lms-tx2.jpg'
import lmsTx3 from '../assets/lms-tx3.jpg'
import lmsTx4 from '../assets/lms-tx4.jpg'
import skylinxLogo from '../assets/skylinx-logo.png'
import sky1 from '../assets/sky-1.jpg'
import sky2 from '../assets/sky-2.jpg'
import sky3 from '../assets/sky-3.jpg'
import odLogo from '../assets/onedestiny-logo.png'
import odVenue from '../assets/od-venue.jpg'
import odGlow from '../assets/od-glow.jpg'
import odNight from '../assets/od-night.jpg'
import odVenues from '../assets/od-venues.jpg'
import odPhotography from '../assets/od-photography.jpg'
import odVideography from '../assets/od-videography.jpg'
import odMakeup from '../assets/od-makeup.jpg'
import odMehendi from '../assets/od-mehendi.jpg'
import odCatering from '../assets/od-catering.jpg'
import odDecoration from '../assets/od-decoration.jpg'
import odPandit from '../assets/od-pandit.jpg'
import odDj from '../assets/od-dj.jpg'
import dsrLogo from '../assets/dsr-logo.png'

export const company = {
  name: 'Technex Cloud Networks Pvt Ltd',
  shortName: 'TechNex',
  tagline: 'Web Development & Digital Marketing That Grow Real Businesses',
  summary:
    'Based in Hyderabad, TechNex Cloud Networks is an integrated partner for digital growth and technical expertise. We deliver custom software development, strategic IT consultancy, digital marketing and industry-focused EdTech programs, helping businesses build, scale and grow in the digital age.',
  email: 'tcncontactinfo@gmail.com',
  // TODO: add the official Technex phone number, e.g. '+91 90000 00000'
  phone: '',
  address: {
    line1: '2nd Floor, Uptown Cyberabad',
    line2: 'Plot 532-534, 100 Feet Road, Madhapur',
    city: 'Hyderabad, Telangana 500081',
    country: 'India',
  },
  mapEmbed:
    'https://maps.google.com/maps?q=Uptown%20Cyberabad%20Madhapur%20Hyderabad%20500081&t=&z=15&ie=UTF8&iwloc=&output=embed',
  website: 'https://technexcloudnetworks.in/',
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/technexcloudnetworks/' },
    { name: 'Instagram', url: 'https://www.instagram.com/technex_cloud_networks' },
    { name: 'Facebook', url: 'https://www.facebook.com/share/1Bk74pA2BP/' },
  ],
}

export const stats = [
  { value: '600+', label: 'Students trained & placed' },
  { value: '10+', label: 'Business clients' },
  { value: '5+', label: 'Software products delivered' },
  { value: '4', label: 'Service verticals' },
]

export const services = [
  {
    title: 'Software Development',
    text: 'Custom web apps, mobile apps and admin portals built for scale, using modern stacks like React, Node.js and cloud-native infrastructure.',
    points: ['Web & mobile apps', 'Admin & vendor portals', 'APIs & integrations'],
  },
  {
    title: 'IT Consultancy',
    text: 'Guidance on choosing the right technology: cloud, software and infrastructure planning that is scalable, secure and cost-effective.',
    points: ['Cloud strategy', 'Infrastructure planning', 'Security reviews'],
  },
  {
    title: 'Digital Marketing',
    text: 'SEO, social media and performance campaigns that grow brand visibility, engagement and measurable leads.',
    points: ['SEO', 'Social media', 'Paid campaigns'],
  },
  {
    title: 'EdTech Programs',
    text: 'Hands-on training, internships and live projects in Full Stack, Cloud/AWS, Cybersecurity, AI, Data Science, SAP and more, plus placement guidance.',
    points: ['Internships', 'Live projects', 'Placement support'],
  },
]

export const projects = [
  {
    name: 'H&H Coworking Spaces',
    category: 'Website · Coworking',
    url: 'https://hhcoworkingspaces.com/',
    logo: hhLogo,
    logoBg: '#ffffff',
    // website screenshots, in order
    gallery: [hh1, hh2, hh3, hh4, hh5],
    description:
      'A premium marketing website for H&H Co-Working Spaces, a coworking brand on 100 Feet Road, Madhapur, Hyderabad. The site showcases every workspace type and turns visitors into enquiries.',
    highlights: [
      'Private offices, private cabins, dedicated desks',
      'Meeting rooms & halls, business lounge',
      'Virtual office with GST registration support',
      'Enquiry form saved straight to Google Sheets via Apps Script',
    ],
    stack: {
      Frontend: ['React', 'Vite', 'Tailwind CSS'],
      Backend: ['Google Apps Script'],
      Database: ['Google Sheets'],
    },
    accent: '#d4a54a',
  },
  {
    name: 'OneDestiny',
    category: 'Platform · Event management',
    url: 'https://www.onedestiny.online/',
    logo: odLogo,
    logoBg: '#0e0b08',
    gallery: [
      odVenue, odGlow, odNight, odVenues, odPhotography, odVideography,
      odMakeup, odMehendi, odCatering, odDecoration, odPandit, odDj,
    ],
    description:
      "India's premium event management and wedding vendor booking platform. Couples discover, compare and book verified vendors, and vendors register and showcase their work.",
    highlights: [
      '9 categories: photography, videography, makeup, catering, venues, decor, pandits, mehendi, DJ & music',
      '1,600+ vendor listings with starting prices',
      'Vendor registration and contact forms stored in Google Sheets via Apps Script',
      'App preview, how-it-works and service detail pages',
    ],
    stack: {
      Frontend: ['React', 'Vite', 'Tailwind CSS'],
      Backend: ['Google Apps Script'],
      Database: ['Google Sheets'],
    },
    accent: '#c9a84c',
  },
  {
    name: 'NextWash',
    category: 'Laundry app + web portal',
    url: '',
    logo: nextwash,
    logoBg: '#0057e7',
    // app screenshots, in order; tall phone shots, so 2 are shown per slide
    gallery: [nw1, nw2, nw3, nw4, nw5],
    perView: 2,
    description:
      'An on-demand laundry app with a web admin portal. Customers pick a service, add clothes item by item, subscribe to monthly plans and get pickup and delivery, while the business manages orders from the portal.',
    highlights: [
      'Wash & iron, wash & fold, steam ironing, dry cleaning, shoe cleaning, saree rolling',
      'Item-wise cart with live price estimate',
      'Monthly plans: Bachelor ₹1,999 (20 kg) and Family ₹5,500 (60 kg)',
      'Refer & earn ₹100, plus a web portal for admins to manage orders',
    ],
    stack: {
      Frontend: ['Flutter'],
      Backend: ['.NET'],
    },
    accent: '#5b9bff',
  },
  {
    name: 'TechNex LMS Portal',
    category: 'Web portal · LMS',
    url: '',
    note: 'In-house platform',
    logo: tcnLogo,
    logoBg: '#0b1215',
    // portal screenshots, in order 1-4, then the My Courses page
    gallery: [lmsTx1, lmsTx2, lmsTx3, lmsTx4, lms1],
    description:
      "TechNex Cloud Networks' own learning portal for its EdTech programs. Students work through learning domains and courses, solve coding assignments in the browser, and track their rank on a leaderboard.",
    highlights: [
      'My Domains and My Courses dashboards (e.g. Data Science & AI, Python)',
      'In-browser code editor: run, submit, score, difficulty and tab-switch tracking',
      'Student leaderboard with ranks and points',
      'Certifications and Raise Ticket support',
    ],
    stack: {
      Frontend: ['Angular'],
      Backend: ['.NET'],
      Database: ['Supabase'],
    },
    accent: '#24c0c5',
  },
  {
    name: 'SkyLinx',
    category: 'Website · AI & software firm',
    url: 'https://skylinxglobal.com/',
    logo: skylinxLogo,
    logoBg: '#ffffff',
    // website screenshots, in order
    gallery: [sky1, sky2, sky3],
    description:
      'Corporate website for Skylinx Global Solutions, a Hyderabad AI-first technology firm, presenting its AI, software, cloud and healthcare services, the industries it serves and its Emplinx product.',
    highlights: [
      'Pages for AI & Technology, Solutions, Industries, Careers and Contact',
      '10 industry pages, from manufacturing and retail to healthcare and finance',
      'Emplinx product showcase and healthcare services section',
      'Enquiries saved to Google Sheets via Apps Script',
    ],
    stack: {
      Frontend: ['React'],
      Backend: ['Google Apps Script'],
      Database: ['Google Sheets'],
    },
    accent: '#3aa0ff',
  },
]

// digital marketing work, as listed on technexcloudnetworks.in/digitalmarketing
export const marketing = {
  services: ['SEO', 'Meta Ads', 'Performance Marketing', 'Social Media Marketing', 'Content Creation', 'Graphic Designing'],
  results: [
    { value: '+287%', label: 'Avg. traffic growth' },
    { value: '+194%', label: 'Avg. lead volume increase' },
    { value: '-43%', label: 'Avg. cost per lead' },
  ],
  clients: [
    { id: 'AL', name: 'Adding Life', category: 'Healthcare', result: '340%', metric: 'more organic traffic', work: ['SEO', 'Content'] },
    { id: 'NW', name: 'NextWash', category: 'Laundry app', result: '180%', metric: 'more app downloads', work: ['Meta Ads', 'Social media'], logo: nextwash, logoBg: '#0057e7' },
    { id: 'DSR', name: 'DSR EV Mobility', category: 'Electric vehicles', result: '99%', metric: 'vehicle campaign success', work: ['Social media', 'Graphic design'], logo: dsrLogo, logoBg: '#ffffff' },
  ],
  process: [
    { title: 'Discovery & audit', text: 'A deep dive into your digital presence, competitors and market to set a baseline.' },
    { title: 'Strategy blueprint', text: 'A 90-day growth roadmap with KPIs, channel mix, budget and messaging.' },
    { title: 'Execution & optimisation', text: 'Fast launch, then weekly testing and tuning across every active channel.' },
    { title: 'Reporting & scaling', text: 'Monthly reviews with live dashboards, and plans to scale what works.' },
  ],
}
