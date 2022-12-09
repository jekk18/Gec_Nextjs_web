// import Layout from '../components/Layout/Layout';

// export default function Slug({type}) {
//     if(type==='list')
//     {
//         return <Layout><List></List></Layout>
//     }
//   return <Layout>...</Layout>;
// }
// import Layout from '../components/Layout/Layout';


// export async function getServerSideProps(context) {
//   // Return a list of possible value for id
//   const { slug } = context.query
//   fetch('https://dasdasd/api/main')
//   const pages = [
// { slug:'services',
//     type:'list'},
//     { slug:'portfolio',
//     type:'text'},
//     { slug:'contact-us',
//     type:'contact'}
//   ];
//   const found =  pages.filter(x=>x.slug === slug);
  
//   return{
//     props:{slug, type: found[0]?.type}
//   }
// }