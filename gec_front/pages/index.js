import BusinessAsistant from "../components/BusinessAsistant";
import MainBanner from "../components/MainBanner/MainBanner";
import PuzzleSection from "../components/PuzzleSection";
import ServicesSection from "../components/ServicesSection"; 
import CaseSection from "../components/CaseSection";
import NewsAndPublicationsSection from "../components/NewsAndPublications";

export default function Home() {
  return ( 
       <>
          <section>
            <MainBanner />  
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
            <CaseSection />
          </section>
          <section>
            <NewsAndPublicationsSection />
          </section>
       </>
  )
}


// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
//   console.log('statical regenerated')
//   return {
//     props: {banners:[{image:"../../assets/img/banner1.png"},{image:"../../assets/img/banner1.png"}]}, // will be passed to the page component as props
//     revalidate:60
//   }
// }