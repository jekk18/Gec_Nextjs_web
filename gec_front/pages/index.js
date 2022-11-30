import MainBanner from "../components/MainBanner/MainBanner";
 

export default function Home() {
  return ( 
       <>
          <MainBanner /> 
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