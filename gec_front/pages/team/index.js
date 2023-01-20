import Link from "next/link";
import { useEffect, useState } from "react";
import Paginate from "../../components/Paginate/Paginate"; 

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

const Team = ({ teamData }) => {
  // const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(8);


  // useEffect(() => {
  //   setBlogPosts(teamData)
  // },);

  const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = teamData.slice(indexOfFirstPost, indexOfLastPost);
    
  const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const previousPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const nextPage = () => {
		if (currentPage !== Math.ceil(teamData.length / postsPerPage)) {
			setCurrentPage(currentPage + 1);
		}
	};

  return (
    <div className="container">
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "0",
          marginTop: "250px",
        }}
      >
        {currentPosts.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                width: "calc((100% / 4) - 15px)",
                height: "200px",
                background: "gray",
                listStyle: "none",
              }}
            >
              <Link
                // href={{
                //   pathname: `/team/${item.id}`,
                //   query: {
                //     text: item.title,
                //   },
                // }}
                href={`/team/${item.id}`}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <h1>{item.title}</h1>
              </Link>
            </li>
          );
        })}
      </ul>
      <h1>Pagination</h1>

      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={teamData.length}
        currentPage={currentPage}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
};

 
export async function getStaticProps() {
  return {
    props: {
      teamData: data,
    }, 
  };  
}


export default Team;