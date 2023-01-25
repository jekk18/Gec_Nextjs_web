import Link from "next/link";
import { useEffect, useState } from "react";
import CalendarRange from "../../components/CalendarRange/CalendarRange";
import Paginate from "../../components/Paginate/Paginate";  
import DatePicker, { DateObject, getAllDatesInRange } from "react-multi-date-picker" 
import "react-datepicker/dist/react-datepicker.css"; 
import { Calendar } from 'react-multi-date-picker';


const data = [
  {
    id: 1,
    title: "Title __ 1",
    date: '2023/01/15'
  },
  {
    id: 11,
    title: "Title __ 1",
    date: '2024/01/15'
  },
  {
    id: 2,
    title: "Title __ 2",
    date: '2023/01/16'
  },
  {
    id: 31,
    title: "Title __ 3",
    date: '2023/01/17'
  },
  {
    id: 3,
    title: "Title __ 3",
    date: '2023/01/17'
  },
  {
    id: 4,
    title: "Title __ 4",
    date: '2023/01/18'
  },
  {
    id: 5,
    title: "Title __ 5",
    date: '2023/01/19'
  },
  {
    id: 6,
    title: "Title __ 6",
    date: '2023/01/20'
  },
  {
    id: 7,
    title: "Title __ 7",
    date: '2023/01/21'
  },
  {
    id: 8,
    title: "Title __ 8",
    date: '2023/01/22'
  },
  {
    id: 9,
    title: "Title __ 9",
    date: '2023/01/23'
  },
  {
    id: 10,
    title: "Title __ 10",
    date: '2023/01/24'
  },
];

const Team = ({ teamData }) => {
  // const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(8);


  const [dates, setDates] = useState([])
  const [allDates, setAllDates] = useState([])

  const weekDays = ["S", "M", "T", "W", "T", "F", "S"]
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] 
  const dateArr = []; 
  allDates.map((index) => (
      dateArr.push(index.format('YYYY/MM/DD'))
  )) 
 

  
  let blogPosts = []; 
    if(dateArr.length < 1){
      blogPosts=teamData;
    }else{
      blogPosts=(teamData.filter((item) => dateArr.includes(item.date)))
    }
   
  // const blogPosts = teamData.filter((item) => dateArray.includes(item.date))
  // console.log(blogPosts)

  const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const previousPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const nextPage = () => {
		if (currentPage !== Math.ceil(blogPosts.length / postsPerPage)) {
			setCurrentPage(currentPage + 1);
		}
	};
 
 
  return (
    <div className="container">
       <div style={{marginTop: '250px'}}>
        <h1>CalendarRange</h1> 
        <div>
            <Calendar
                rangeHover={true}
                range
                weekDays={weekDays}
                months={months}
                onChange={dateObjects => {
                setDates(dateObjects)
                setAllDates(getAllDatesInRange(dateObjects))
                }} 
            />
            {/* <DatePicker 
                className='dataPPPicker' 
                rangeHover={true}
                range
                calendarPosition="bottom-right"
                fixMainPosition
                value={dates} 
                weekDays={weekDays}
                months={months}
                onChange={dateObjects => {
                setDates(dateObjects)
                setAllDates(getAllDatesInRange(dateObjects))
                }} 
            />  */}
            {/* {dates.length > 1 &&
              <div>
                  <h5>
                      All Dates between {dates[0].format()} and {dates[1].format()}:
                  </h5>
                  <ul>
                      {
                        allDates.map((date, index) =>   
                                <li key={index}>
                                    {date.format('YYYY/MM/DD')}  
                                </li>  
                            ) 
                      }
                  </ul>
              </div>
            } */}
        </div>
     </div>

      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "0",
          marginTop: "50px",
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
                <h1>{item.date}</h1>
              </Link>
            </li>
          );
        })}
      </ul>
      <h1>Pagination</h1>

      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={blogPosts.length}
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




// import React, { useState, useEffect } from 'react'
// import { DateRangePicker } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // import the styles
// import 'react-date-range/dist/theme/default.css'; // import the theme

// const Team = () => {
//   const [dateRange, setDateRange] = useState({
//     startDate: new Date(),
//     endDate: new Date(),
//     key: 'selection'
//   });
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     setFilteredData(data.filter(item => {
//       const itemDate = new Date(item.date);
//       return itemDate >= dateRange.startDate && itemDate <= dateRange.endDate;
//     }));
//   }, [dateRange, data]);

//   return (
//     <div style={{marginTop: "300px"}}>
//       <DateRangePicker
//         ranges={[dateRange]}
//         onChange={(ranges) => setDateRange(ranges.selection)}
//       />
//       {console.log(dateRange)}
//       <table>
//         <tbody>
//           {filteredData.map(item => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>{item.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

export default Team;


