import { useRouter } from 'next/router'
import { useState } from 'react';

const data = [
  {
    id: 1,
    title: "Title __ 1",
  },
  {
    id: 2,
    title: "Title __ 2",
  },
  {
    id: 3,
    title: "Title __ 3",
  },
  {
    id: 4,
    title: "Title __ 4",
  },
  {
    id: 5,
    title: "Title __ 5",
  },
  {
    id: 6,
    title: "Title __ 6",
  },
  {
    id: 7,
    title: "Title __ 7",
  },
  {
    id: 8,
    title: "Title __ 8",
  },
  {
    id: 9,
    title: "Title __ 9",
  },
  {
    id: 10,
    title: "Title __ 10",
  },
];

export const aboutDetPage = (setItem) => { 
  const [value, setValue] = useState();

  const router = useRouter()
  // console.log(router.query.id) 
  // console.log(router.query)
  return (
    <div className="container">
      <div style={{width: '300px', height: '200px', backgroundColor: 'red', marginTop: '300px', color: '#fff'}}>
        <h1>{setItem.setItem.id}</h1>
        <h2>{setItem.setItem.title}</h2>
      </div>
    </div>
     
  )
}


export async function getStaticPaths(){
  const files = data;

  const paths = files.map((item) =>  ({
    params: {
      id: item.id.toString(),
    }, 
  }))

  // console.log(paths)

  return { 
    paths, 
    fallback: false,
  }
}


export async function getStaticProps({ params: {id} }){

  // console.log()   
   
let value = {};

 const teamItem = JSON.stringify(
  data.map(item => { 
      if(item.id == id){ 
        value = item;
      } 
   })
 )

//  console.log(teamItem ) 

  return {
    props: {
      setItem: value,
    }
  }
}


// export async function getStaticPaths() {
   
//   return {
//     fallback: false,
//     paths: data.map((item) =>  ({
//       params: {
//         id: item.id.toString(),
//       }, 
//     })),
//   };
// }
 

// export async function getStaticProps(context) {

//   const teamId = context.params.id;
//   console.log(teamId) 

//   return {
//     props: {
//       teamData: {
//         id: teamId,
//         title: 'title1'
//       },
//     },
//   };
// }

export default aboutDetPage;
