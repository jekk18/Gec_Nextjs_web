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
import np_img1 from '../assets/img/news1.png';
import np_img2 from '../assets/img/news2.png';
import np_img3 from '../assets/img/news3.png';

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

const DATA_PUZZLE = {
  text:`Before the project start, we, togather with you, will discuss your needs and expectations. 
        It will allow us to accurately estimate the scope of the work, all necessary resources, 
        and the level of your engagment in the various stages of the projec. 
        Your level of engagement may vary from the case when the main work is implemented by your team with our support 
        to the case when we lead the entire process, and your role is limited only to providing information 
        and validating the results.`,
}
 
const DATA_NEWSANDPUB = [
  {
    image: np_img1,
    date: 'September 21, 2022',
    identId: '2',
    publication: 'Publication',
    title: 'Industry / Sector / Market / Value chain research',
    text: 'Business process re-engineering is the practice of rethinking and redesigning.',
    link: '#'
  },
  {
    image: np_img2,
    date: 'August 21, 2022',
    identId: '3', 
    title: 'Business Strategy',
    text: 'Business process re-engineering is the practice of rethinking',
    link: '#'
  },
  {
    image: np_img3,
    date: 'September 09, 2022',
    identId: '3', 
    title: 'COOPERATION WITH THE GEORGIAN NATIONAL COMPETITION AGENCY',
    text: 'Today’s level of disruption and pace of change is accelerating rapidly within',
    link: '#'
  },
]
  

export default function Home(props) { 
  return ( 
       <>
          <section>
            <MainBanner bannerItems={props.banners}/>  
          </section> 
          <section>
            <BusinessAsistant />  
          </section>  
          <section>
            <PuzzleSection dataPuzzle={props.puzzleData} sectionTitle='How We Start Cooperation With You' />
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
            <NewsAndPublicationsSection dataNewsPublication={props.dataNewsPublication} sectionTitle="New And Publication" />
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
      puzzleData: DATA_PUZZLE,
      dataNewsPublication: DATA_NEWSANDPUB,
    },   
    revalidate:60
  }
}