import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconComponents,
  IconDownload,
  IconHeadset,
  IconHelp,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRocket,
  IconRss, IconHammer, IconHome, IconTool, IconTrendingUp, IconUsers, IconBuildingSkyscraper, IconBrandEnvato

} from '@tabler/icons-react';
import {
  AnnouncementProps,
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialProps,
} from './types';

import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import heroImg from '~/assets/images/hero.jpg';
import hero2Img from '~/assets/images/hero2.jpg';
import AtticBungalowImg from '~/assets/images/Attic Bungalow 1/Sample 1.jpg';
import BungalowImg from '~/assets/images/Bungalow 1/1.jpg';
import MansionImg from '~/assets/images/Maisonette Flat roof 1/1.jpg';
import RenderImg from '~/assets/images/Render1/101.jpeg'
import Image2 from '~/assets/images/2.jpg';
import gasImg from '~/assets/images/gas.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'Outline Designs',
  callToAction: {
    text: 'Outline Designs Construction Company »',
    href: '',
  },
  callToAction2: {
    text: 'Follow @outlineDesigns on Twitter',
    href: '',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Pages',
      icon: IconChevronDown,
      links: [
        {
          label: 'About us',
          href: '/about',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Contact us',
          href: '/contact',
        },
        {
          label: 'FAQs',
          href: '/faqs',
        },
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
        {
          label: 'Terms & Conditions',
          href: '/terms',
        },
      ],
    },
    
  ],
  // actions: [
  //   {
  //     text: 'Download',
  //     href: 'https://github.com/onwidget/tailnext',
  //     targetBlank: true,
  //     btnType: 'primary',
  //   },
  // ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Hero data
// Hero data
export const heroData: HeroProps = {
  title: (
    <>
      Bringing your architectural vision to life,
      <br /> one outline at a time
    </>
  ),
  subtitle: (
    <>

    <span className="hidden md:inline">
      <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
        Outline Designs
      </span>{' '}
      is a premier construction company in the industry, offering exceptional building design and construction services. Our expertise lies in transforming architectural visions into reality, employing industry best practices, sustainability, and innovation.
    </span>{' '}
    We are dedicated to delivering exceptional outcomes, prioritizing quality, functionality and aesthetics.
    
    </>
  ),
  callToAction: {
    text: 'Get started',
    href: '/contact',
    icon: IconDownload,
    targetBlank: false,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Learn more',
    href: '/about',
  },
  image: {
    src: Image2,
    alt: 'Outline Designs - Bringing your architectural vision to life',
  },
};

// Hero2 data
export const hero2Data: HeroProps = {
  title: 'Building Exceptional Structures with a Dedicated Team',
  subtitle:
    'At Outline Designs, we believe that great companies are made by great people. Our team of architects, engineers and construction professionals is passionate about creating exceptional architectural buildings that inspire and endure. We are committed to delivering projects of the highest quality, craftsmanship and innovation.',
  callToAction: {
    text: 'View our projects',
    href: '/blogs',
    targetBlank: false,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Contact us',
    href: '/contact',
  },
  image: {
    src: MansionImg,
    alt: 'Outline Designs - Building Exceptional Structures',
  },
};


// SocialProof data
export const socialProofData: SocialProofProps = {
  images: [
    {
      link: 'https://twitter.com/',
      src: nextJsLogo,
      alt: 'Twitter',
    },
    {
      link: 'https://tiktok.com/',
      src: reactLogo,
      alt: 'Tiktok',
    },
    {
      link: 'https://linkedIn.com/',
      src: tailwindCssLogo,
      alt: 'LinkedIn  ',
    },
    {
      link: 'https://www.facebook.com/',
      src: typescriptLogo,
      alt: 'Facebook ',
    },
    {
      link: 'https://www.instagram.com/',
      src: typescriptLogo,
      alt: 'Instagram ',
    },
  ],
};

// FAQS data
// FAQs data 1
export const faqsData: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Find answers to common questions about our building design and construction services.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'What services does Outline Designs provide?',
      description: `Outline Designs specializes in building design and construction of architectural buildings. We offer a wide range of services, including architectural design, structural engineering, project management and construction.`,
    },
    {
      title: 'What types of buildings do you design and construct?',
      description: `We design and construct various types of architectural buildings, including residential homes, commercial complexes, office buildings and institutional structures such as schools and hospitals.`,
    },
    {
      title: 'How experienced is Outline Designs in the construction industry?',
      description: `With over 10 years of experience in the construction industry, Outline Designs has successfully completed numerous projects of varying scales and complexities. Our team of architects, engineers and construction professionals brings extensive expertise to every project.`,
    },
    {
      title: 'What sets Outline Designs apart from other construction companies?',
      description: `At Outline Designs, we pride ourselves on our commitment to quality, attention to detail and customer satisfaction. We strive to deliver innovative designs, efficient construction processes and timely project completion. Our collaborative approach ensures that clients' vision and requirements are met with precision.`,
    },
    {
      title: 'How does Outline Designs ensure the quality of construction?',
      description: `We adhere to strict quality control measures at every stage of the construction process. Our team conducts regular inspections, uses high-quality materials and collaborates with reputable suppliers and contractors to ensure the highest standards of craftsmanship and durability.`,
    },
    {
      title: 'Does Outline Designs provide post-construction support?',
      description: `Yes, we provide comprehensive post-construction support, including maintenance services, repairs and renovations. Our goal is to build long-lasting relationships with our clients and assist them with any future needs.`,
    },
  ],
};

// FAQs data 2
export const faqsData2: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Find answers to common questions about our building design and construction services.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'How can I request a consultation with Outline Designs?',
      description: `To request a consultation with Outline Designs, you can fill out the contact form on our website or call our office directly. Our team will be happy to schedule a meeting to discuss your project requirements.`,
    },
    {
      title: 'What is the typical timeline for a building design and construction project?',
      description: `The timeline for a building design and construction project varies depending on the size and complexity of the project. It can range from a few months for smaller residential projects to several years for large-scale commercial or institutional buildings. Our team will provide you with a detailed project timeline during the initial consultation.`,
    },
    {
      title: 'How does Outline Designs handle permits and regulatory approvals?',
      description: `Outline Designs has extensive experience in navigating the permitting and regulatory approval processes. We will assist you in obtaining the necessary permits and approvals from relevant authorities to ensure your project complies with local building codes and regulations.`,
    },
    {
      title: 'Does Outline Designs offer sustainable design and construction solutions?',
      description: `Yes, sustainability is a core aspect of our design and construction philosophy. We prioritize energy efficiency, use eco-friendly materials and integrate sustainable practices into our projects whenever possible. Our aim is to create buildings that are environmentally responsible and minimize their impact on the ecosystem.`,
    },
    {
      title: 'Can Outline Designs work within a specific budget for a project?',
      description: `Absolutely. We understand the importance of budget constraints for our clients. Our team will work closely with you to develop a design and construction plan that aligns with your budget while ensuring the highest quality and meeting your objectives.`,
    },
    {
      title: 'What geographical areas does Outline Designs serve?',
      description: `Outline Designs serves clients in the greater region of Kenya, including cities Nairobi, Kisumu and Mombasa. If you have a project outside these areas, please contact us and we will accommodate your location.`,
    },
  ],
};


// FAQS3 data
export const faqs3Data: FAQsProps = {
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Do you have other questions?',
    position: 'left',
  },
  items: [
    {
      title: 'What factors determine the cost of construction?',
      description: 'The cost of construction is influenced by various factors such as the size and complexity of the project, the quality of materials used, the location andthe timeline for completion. Our team can provide a detailed cost estimate based on your specific requirements.',
    },
    {
      title: 'Do you offer fixed-price contracts?',
      description: 'Yes, we offer fixed-price contracts for construction projects. This means that the agreed-upon price will not change unless there are modifications to the scope of work or unforeseen circumstances arise during the construction process.',
    },
    {
      title: 'Are there any additional fees or charges?',
      description: 'Our pricing includes all the necessary costs for the construction project. However, there might be additional fees or charges for any changes or upgrades requested after the initial agreement. We will discuss these details with you and provide transparent pricing information.',
    },
    {
      title: 'Do you provide financing options?',
      description: 'While we do not directly provide financing, we can offer guidance and recommendations for financing options available in the market. We work with various financial institutions that specialize in construction project financing and can connect you with them.',
    },
    {
      title: 'Can you provide a cost estimate for my project?',
      description: 'Yes, we can provide a detailed cost estimate for your project based on the architectural plans and specifications. Our team will assess the requirements and provide you with a comprehensive breakdown of the expected costs involved.',
    },
    {
      title: 'How do I request a quote?',
      description: 'To request a quote, please contact our sales team through the contact information provided on our website. We will schedule a consultation to discuss your project requirements and provide you with a customized quote.',
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnText: 'uppercase',
    btnType: 'primary',
  },
};


// FAQS4 data
export const faqs4Data: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Design and Build with Outline Designs',
    highlight: 'FAQS',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General',
        href: '/tab1',
      },
      items: [
        {
          title: 'What services does Outline Designs offer?',
          description: `Outline Designs offers a wide range of services in the construction industry, including architectural design, interior design, project management, and construction consulting.`,
        },
        {
          title: 'How can I contact Outline Designs?',
          description: `You can contact Outline Designs by visiting our website and filling out the contact form, or by calling our customer service hotline at [phone number]. We are available to assist you during our business hours from Monday to Friday, 9am to 5pm.`,
        },
        {
          title: 'Does Outline Designs provide custom design solutions?',
          description: `Yes, Outline Designs specializes in providing customized design solutions tailored to meet the unique needs and preferences of our clients. Our team of experienced architects and designers will work closely with you to create a design that reflects your vision and objectives.`,
        },
        {
          title: 'What construction projects has Outline Designs completed?',
          description: `Outline Designs has successfully completed a wide range of construction projects, including residential buildings, commercial complexes, office spaces, and institutional facilities. You can view our portfolio on our website to see examples of our past projects.`,
        },
      ],
    },
    {
      link: {
        label: 'Services and Pricing',
        href: '/tab2',
      },
      items: [
        {
          title: 'What factors determine the cost of a construction project?',
          description: `The cost of a construction project depends on various factors, such as the size and complexity of the project, the materials used, the location, and any additional features or specifications. Our team at Outline Designs will assess your project requirements and provide you with a detailed cost estimate.`,
        },
        {
          title: 'Does Outline Designs offer fixed-price contracts?',
          description: `Yes, Outline Designs offers fixed-price contracts for certain types of construction projects. This provides our clients with a clear understanding of the total project cost and helps in budget planning. Contact us to discuss your specific project and pricing options.`,
        },
        {
          title: 'Can Outline Designs assist with obtaining permits and approvals?',
          description: `Yes, Outline Designs can assist you with the permit and approval process for your construction project. Our team is well-versed in the local regulations and requirements and will guide you through the necessary steps to obtain the required permits and approvals.`,
        },
        {
          title: 'What is the typical timeline for completing a construction project?',
          description: `The timeline for completing a construction project can vary depending on the size and complexity of the project. Outline Designs will provide you with a project timeline during the initial consultation, taking into account factors such as design development, permitting, procurement, and construction duration.`,
        },
      ],
    },
    {
      link: {
        label: 'Collaboration and Support',
        href: '/tab3',
      },
      items: [
        {
          title: 'How does the collaboration process work with Outline Designs?',
          description: `At Outline Designs, we follow a collaborative approach throughout the design and construction process. We will involve you in key decision-making stages, seek your input and feedback, and keep you updated on the progress

 of your project. Our goal is to ensure that your vision is translated into a successful construction project.`,
        },
        {
          title: 'What support does Outline Designs provide during the construction phase?',
          description: `During the construction phase, Outline Designs provides on-site supervision and project management to ensure that the construction is carried out according to the approved design and specifications. We will also coordinate with contractors and suppliers, conduct regular inspections, and address any issues that may arise.`,
        },
        {
          title: 'Does Outline Designs offer post-construction support?',
          description: `Yes, Outline Designs offers post-construction support to address any issues or concerns that may arise after the completion of the project. Our team will work with you to resolve any warranty-related matters and ensure your satisfaction with the final outcome.`,
        },
        {
          title: 'Can Outline Designs work with other professionals or contractors?',
          description: `Yes, Outline Designs has experience collaborating with various professionals and contractors in the construction industry. We can work with your preferred team or recommend trusted partners from our network to ensure a smooth and coordinated construction process.`,
        },
      ],
    },
  ],
};


// CallToAction2 data
export const callToActionData2: CallToActionProps = {
  title: 'Still have questions?',
  subtitle:
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnType: 'primary',
  },
};

export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">Outline Designs</span> Construction
      </>
    ),
    subtitle:
      'Building, Developing and Constructing Houses with Excellence and Precision',
    highlight: 'Features',
  },
  items: [
    {
      title: 'Custom Home Construction',
      description:
        'We specialize in constructing custom homes tailored to your unique vision and needs.',
      icon: IconBrandTailwind,
      // link: {
      //   label: 'Discover now',
      //   href: '/',
      // },
    },
    {
      title: 'Ready-to-Move-in Homes',
      description:
        'Explore our collection of ready-to-move-in homes designed with quality and style.',
      icon: IconComponents,
      // link: {
      //   label: 'Discover now',
      //   href: '/',
      // },
    },
    {
      title: 'Experienced Team and Best Practices',
      description:
        'Our experienced team follows industry best practices to ensure the highest quality standards in every project.',
      icon: IconListCheck,
      // link: {
      //   label: 'Discover now',
      //   href: '/',
      // },
    },
    {
      title: 'Timely Delivery and Excellent Craftsmanship',
      description:
        'We prioritize timely delivery and showcase excellent craftsmanship in every aspect of our work.',
      icon: IconRocket,
      // link: {
      //   label: 'Discover now',
      //   href: '/',
      // },
    },
    {
      title: 'Integrate Sustainability in Construction',
      description:
        'We employ sustainable practices and materials to minimize environmental impact.',
      icon: IconArrowsRightLeft,
      // link: {
      //   label: 'Discover now',
      //   href: '/',
      // },
    },
    {
      title: 'Collaborative Approach and Innovative Solutions',
      description:
        'We welcome new ideas and contributions, fostering a collaborative environment for innovative solutions.',
      icon: IconBulb,
      // link: {
      //   label: 'Discover now',
      //   href: '/',
      // },
    },
  ],
};


// Feature2 data
export const featuresData2: FeaturesProps = {
  header: {
    title: 'Support Center',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions',
      icon: IconHelp,
      link: {
        href: '/faqs',
      },
    },
    {
      title: 'Chat with us',
      description: 'Live chat with our support team',
      icon: IconMessages,
      link: {
        href: '/',
      },
    },
    {
      title: 'Get help',
      description: 'Speak to our team today',
      icon: IconHeadset,
      link: {
        href: '/',
      },
    },
  ],
};

// Feature data 3
export const featuresData3: FeaturesProps = {
  header: {
    title: 'Services',
  },
  items: [
    {
      title: 'Architectural Design',
      description: 'We create stunning architectural designs that blend functionality and aesthetics seamlessly.',
      icon: IconHome,
    },
    {
      title: 'Efficient Project Management',
      description: 'Our team ensures smooth project execution, adhering to timelines and budgets.',
      icon: IconTrendingUp,
    },
    {
      title: 'Customized Building Solutions',
      description: 'Tailored construction plans that meet your specific requirements and vision.',
      icon: IconBuildingSkyscraper,
    },
    {
      title: 'Sustainable Green Building',
      description: 'Embrace eco-friendly practices with our green building solutions.',
      icon: IconBrandEnvato,
    },
    {
      title: 'Cutting-edge Technology',
      description: 'Incorporating the latest construction technologies for superior results.',
      icon: IconTool,
    },
    {
      title: 'Quality Craftsmanship',
      description: 'Uncompromising dedication to delivering top-notch craftsmanship in every project.',
      icon: IconHammer,
    },
    {
      title: 'Collaborative Approach',
      description: 'We collaborate closely with clients to ensure their vision is brought to life.',
      icon: IconUsers,
    },
    {
      title: 'Innovative Solutions',
      description: 'Constantly exploring new ideas and approaches to improve our services.',
      icon: IconBulb,
    },
  ],
};

// Content data
export const contentData: ContentProps = {
  header: {
    title: 'Delivering Excellence in Construction',
    subtitle: 'Building Your Dream Home with Precision and Quality',
    highlight: '',
  },
  content:
    'At Outline Designs Construction, we are dedicated to providing top-notch construction services. Our team of experts ensures that your dream home becomes a reality. With our commitment to precision and quality, we deliver excellence in every project.',
  items: [
    {
      title: 'Customized Solutions',
      description:
        'We understand that every homeowner has unique requirements. Our team offers customized solutions that meet your specific needs and preferences. From architectural design to material selection, we ensure a personalized approach.',
    },
    {
      title: 'Professional Expertise',
      description:
        'With years of experience in the construction industry, our professionals bring their expertise to every project. We have a skilled team of architects, engineers and builders who work together to create homes of exceptional quality.',
    },
    {
      title: 'Timely Completion',
      description:
        'We value your time and strive to complete projects within the agreed-upon timeline. Our efficient project management ensures that your dream home is delivered on schedule, without compromising on quality.',
    },
  ],
  image: {
    src: AtticBungalowImg,
    alt: 'Beautiful Home',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content2 data
export const content2Data: ContentProps = {
  content:
    'We believe in building homes that reflect your style and taste. Our attention to detail and commitment to customer satisfaction sets us apart. Trust Outline Designs Construction to bring your vision to life and create a home that you and your family will cherish for years to come.',
  items: [
    {
      title: 'Quality Craftsmanship',
    },
    {
      title: 'Transparent Communication',
    },
    {
      title: 'Superior Materials',
    },
    {
      title: 'Customer Satisfaction',
    },
    {
      title: 'Reliable Support',
    },
    {
      title: 'Post-Construction Services',
    },
  ],
  image: {
    src: BungalowImg,
    alt: 'Blueprint',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data
export const stepsData: StepsProps = {
  title: 'Building Your Dream Home: Our Process',
  items: [
    {
      title: 'Step 1: Consultation',
      description:
        'We start with a detailed consultation to understand your vision, requirements and budget. Our team of experts will collaborate with you to create a customized plan for your dream home.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2: Design and Planning',
      description:
        'Our architects and designers will work closely with you to develop architectural plans, create 3D renderings and finalize the design details. We ensure that every aspect of your home is meticulously planned and tailored to your preferences.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3: Construction and Execution',
      description:
        'Once the design is approved, our skilled builders and craftsmen will bring the plans to life. We use high-quality materials and follow industry best practices to ensure the construction process is efficient, safe and of the highest quality.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready for Your Dream Home!',
      icon: IconCheck,
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1683818834458-a6e603abd8b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    alt: 'Steps image',
  },
};

// Team data
export const teamData: TeamProps = {
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // highlight: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Testimonial data
export const testimonialData: TestimonialProps = {
  header: {
    title: 'What our customers say about us',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
    // highlight: 'Testimonial',
  },
  testimonials: [
    {
      name: 'Tayla Kirsten',
      occupation: 'Marketing Manager',
      comment:
        'Suspendisse mollis ante turpis, ut fermentum nulla finibus ac. Integer ut justo id dolor lobortis pharetra. Integer ultrices leo a nunc ullamcorper commodo. In id nulla et nibh pretium pretium non vel metus. Suspendisse dapibus quis lorem sit amet fermentum. Ut a dapibus justo. In faucibus molestie pretium. Cras eros orci, bibendum fringilla elit at, vehicula maximus eros. Aenean placerat aliquet mi, et pellentesque dolor gravida at.',
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Silver Jordan',
      occupation: 'Senior Marketer',
      comment:
        'Mauris semper enim dolor, ac dictum sapien sollicitudin quis. Quisque id pharetra mi. Phasellus eu posuere lectus, vitae rhoncus velit. Nullam imperdiet purus quis dapibus vestibulum. Integer purus ex, hendrerit at elementum non, varius a nibh. Ut eget convallis mi. Morbi mattis, felis sit amet consectetur scelerisque, odio purus ornare sapien, in feugiat lorem tellus et magna. Pellentesque luctus dolor in ornare mattis.',
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Kelsey Arden',
      occupation: 'Co-Founder & CEO',
      comment:
        'Sed malesuada rhoncus arcu, sit amet condimentum leo pharetra feugiat. In augue quam, venenatis nec dui in, auctor tempus libero. Aliquam tempus ex id metus viverra blandit. Proin varius venenatis tortor, a pellentesque enim malesuada a. Aliquam lectus magna, interdum eget odio non, consequat imperdiet ipsum.',
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
  ],
};

// Pricing data
export const pricingData: PricingProps = {
  header: {
    title: 'Prices for each plan',
    subtitle:
      'At Outline Designs, we offer competitive pricing for construction services in different locations. Our rates are based on the quality of materials, craftsmanship and project requirements.',
  },
  prices: [
    {
      title: 'Kisumu',
      value: 45000,
      period: 'per Square Metre',
      texts: [
        'High-quality construction materials',
        'Skilled and experienced workforce',
        'Attention to detail in every aspect',
        'Timely completion of projects',
      ],
      callToAction: {
        text: 'Request a Quote',
        href: '/contact',
      },
      hasRibbon: false,
    },
    {
      title: 'Nairobi',
      value: 42000,
      period: 'per Square Metre',
      texts: [
        'Premium construction materials',
        'Experienced architects and engineers',
        'Innovative and sustainable designs',
        'Excellent track record of successful projects',
      ],
      callToAction: {
        text: 'Request a Quote',
        href: '/contact',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'Mombasa',
      value: 45000,
      period: 'per Square Metre',
      texts: [
        'Efficient project management',
        'Skilled labor with attention to detail',
        'Adherence to safety and quality standards',
        'Flexibility to meet client requirements',
      ],
      callToAction: {
        text: 'Request a Quote',
        href: '/contact',
      },
      hasRibbon: false,
    },
  ],
};

// Comparison data
export const comparisonData: ComparisonProps = {
  header: {
    title: "What's available for each plan?",
    subtitle:
      'Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.',
    // highlight: 'Comparison',
  },
  columns: [
    {
      title: 'compare plans',
      items: [
        {
          title: 'In vitae finibus',
        },
        {
          title: 'Cras sollicitudin',
        },
        {
          title: 'Suspendisse',
        },
        {
          title: 'Vestibulum ornare',
        },
        {
          title: 'In hendrerit',
        },
        {
          title: 'Ut pharetra',
        },
      ],
    },
    {
      title: 'basic',
      items: [
        {
          title: 'Free 7-day trial',
        },
        {
          title: 'Limited',
        },
        {
          title: '$29',
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'standard',
      items: [
        {
          title: 'Free 15-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$69',
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'premium',
      items: [
        {
          title: 'Free 30-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$199',
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
  ],
};

// Stats
export const statsData: StatsProps = {
  items: [
    {
      title: 13269,
      description: 'Downloads',
    },
    {
      title: 24.8,
      description: 'Stars',
    },
    {
      title: 1767.77,
      description: 'Forks',
    },
    {
      title: 484000,
      description: 'Users',
    },
  ],
};

// Contact data
export const contactData: ContactProps = {
  header: {
    title: 'Get in Touch',
    subtitle: 'Feel free to contact us',
    highlight: 'Contact',
  },
  content:
    'We would love to hear from you. Please reach out to us for any inquiries, project discussions, or general information.',
  items: [
    {
      title: 'Our Address',
      description: ['Nairobi, Kenya'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +254 718 275 068', 'Phone: +254 797 777 169', 'Email: outlinedesignsltd@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working Hours',
      description: ['Monday - Saturday: 08:00 - 17:00', 'Sunday: Closed'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: 'Get in Touch',
    subtitle: 'Feel free to contact us',
    highlight: 'Contact',
  },
  content:
    'We would love to hear from you. Please reach out to us for any inquiries, project discussions, or general information.',
  items: [
    {
      title: 'Our Address',
      description: ['Nairobi, Kenya'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +254 718 275 068', 'Phone: +254 797 777 169', 'Email: outlinedesignsltd@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working Hours',
      description: ['Monday - Saturday: 08:00 - 17:00', 'Sunday: Closed'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    description:
      'We are here to assist you. Please provide us with the necessary information and we will get back to you as soon as possible.',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        placeholder: 'Your first name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        placeholder: 'Your last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Your email address',
      },
    ],
    radioBtns: {
      label: 'Reason for Contact',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Technical help',
        },
        {
          label: 'Claims',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we assist you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'I have read and agree to the privacy policy',
        value: '',
      },
      {
        label: 'Please subscribe me to receive monthly updates by email',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};


// Footer data
export const footerData: FooterProps = {
  title: 'Outline Designs',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">
        {' '}
        onWidget
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['Nairobi Kenya'],
    },
    {
      title: 'Contact',
      texts: ['Mobile: +254 718 275 068', 'Phone: +254 797 777 169', 'Email: outlinedesignsltd@gmail.com'],
    },
    {
      title: 'Email',
      texts: ['Office: outlinedesignsltd@gmail.com', 'Site: https://outlinedesigns.co.ke'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://outlinedesigns.co.ke">
        outlineDesigns
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};
