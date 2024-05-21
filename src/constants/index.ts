import laptop from '../assets/laptop.jpg';
import globe from '../assets/globe.png';
import codeWindow from '../../src/assets/codeWindow.png';
import code from '../../src/assets/code.png';

import Git from '../assets/github.png';
import In from '../assets/in.png';
import Tg from '../assets/tg.png';

import california from '../assets/california.jpg';
import hydra from '../assets/hydra.jpg';
import metaverse from '../assets/metaverse.jpg';
import hilink from '../assets/hilink.jpg';


export const gridItems = [
    {
        id: 1,
        title: 'I prioritize client collaboration and encourage open communication',
        subtitle: '',
        className: 'lg:col-span-3 md:col-span-6 md:row-span-4',
        img: laptop,
        animate: 'left',
    },
    {
        id: 2,
        title: "I'm highly responsible, self-motivated and have excelent time management skills",
        subtitle: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
        img: globe,
        animate: 'right',
    },
    {
        id: 3,
        title: 'My tech stack',
        subtitle: 'I constantly try to improve',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
        animate: 'right',
    },
    {
        id: 4,
        title: 'Junior developer with a passion for coding',
        subtitle: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
        img: codeWindow,
        animate: 'left',
    },
    {
        id: 5,
        title: 'Currently learning NextJs and NodeJs',
        subtitle: '',
        className: 'md:col-span-3 md:row-span-2',
        img: code,
        animate: 'right',
    },
    {
        id: 6,
        title: 'I would like to build a project together',
        subtitle: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
        animate: 'left',
    },
];


export const projectsInfo = [
    {
        id: 1,
        title: 'California E-Commerce',
        description: 'California E-Commerce is a online shop, where you can buy modern gadgets',
        img: california,
        codeLink: 'https://github.com/h4ze-07/CALIFORNIA-website',
        siteLink: 'https://californiaecommerce.netlify.app/',
    },
    {
        id: 2,
        title: 'Hydra Landing Page',
        description: 'Simple modern landing page design for Hydra Virtual Reality website',
        img: hydra,
        codeLink: 'https://github.com/h4ze-07/Hydra',
        siteLink: 'https://hydralatestpage.netlify.app/',
    },
    {
        id: 3,
        title: 'Metaverse Madness',
        description: 'Metaverse is a new thing in the future, where you can enjoy the virtual world',
        img: metaverse,
        codeLink: 'https://github.com/h4ze-07/Metaverse',
        siteLink: 'https://metaversuslanding.netlify.app/',
    },
    {
        id: 4,
        title: 'HiLink. Travel Camp',
        description: 'We can help you on an adventure around the world in just one app',
        img: hilink,
        codeLink: 'https://github.com/h4ze-07/travelcampapp',
        siteLink: 'https://travelcampwebsite.netlify.app/',
    },
]


export const footerLinks = [
    {
        title: 'github',
        link: 'https://github.com/h4ze-07',
        img: Git,
    },
    {
        title: 'in',
        link: 'https://www.linkedin.com/in/haze07/',
        img: In,
    },
    {
        title: 'tg',
        link: 'https://t.me/vlad_b01',
        img: Tg,
    },
]


