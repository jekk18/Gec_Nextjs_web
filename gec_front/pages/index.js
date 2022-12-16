import BusinessAsistant from "../components/BusinessAsistant";
import MainBanner from "../components/MainBanner/MainBanner";
import PuzzleSection from "../components/PuzzleSection";
import ServicesSection from "../components/ServicesSection"; 
import CaseSection from "../components/CaseSection";
import NewsAndPublicationsSection from "../components/NewsAndPublications";
import Banners from "../components/Banners";
import bannerImg from '../assets/img/banner1.png';
import caseImg1 from '../assets/img/caseimg1.png';
import caseImg2 from '../assets/img/caseimg2.png'; 

const DATA_CASE =  [
      {
          title: 'Cooperation with the georgian national competition agency',
          text: ' A management reporting system is a part of a management control system that provides business information.  The system is designed to assist',
          image: caseImg1,
          link: '#'
        },
        {
          title: 'Management reporting',
          text: 'A management reporting system is A part of A management control system that provides business information. The system is designed to assist members of the management by providing timely.',
          image: caseImg2, 
          link: '#'
        },
        {
          title: '3',
          text: ' A management reporting system is a part of a management control system that provides business information.  The system is designed to assist',
          image: caseImg1,
          link: '#'
        },
    ]

const DATA_BANNERS = [
  {
    bannerLink: '#',
    bannerKey: '01',
    bannerImg: bannerImg,
    bannerText: 'GEC is an international business and management consulting company, implementing systemic business solutions to large enterprises'
  },
  // {
  //   bannerLink: '#',
  //   bannerKey: '00',
  //   bannerImg: "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&amp;modestbranding=1&amp;controls=0&amp;mute=1&amp;rel=0&amp;loop=1&amp;playlist=tgbNymZ7vqY",
  //   bannerText: 'GEC is an international business and management consulting company, implementing systemic business solutions to large enterprises'
  // },
  {
    bannerLink: '#',
    bannerKey: '01',
    bannerImg: bannerImg,
    bannerText: 'GEC is an international business and management consulting company, implementing systemic business solutions to large enterprises'
  }
]    


export default function Home(props) { 
  return ( 
       <>
          <section>
            <MainBanner bannersItem={props.banners}/>  
          </section>
          <section>
            <BusinessAsistant />  
          </section> 
          <section>
            <PuzzleSection />
          </section>
          <section>
            <ServicesSection />
          </section>
          <section>
            <Banners />
          </section>
          <section>
            <CaseSection dataCase={props.cases}  sectionTitle="Case"/>
          </section>
          <section>
            <NewsAndPublicationsSection />
          </section>
       </>
  )
}


export async function getStaticProps({ params }) {
   
  console.log('statical regenerated')
  return {
    props: {
      cases:DATA_CASE,
      banners: DATA_BANNERS,
    },   
    revalidate:60
  }
}