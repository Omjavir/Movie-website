import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import CustomPagination from '../Components/CustomPagination';
import Card from '../Components/Card';
import CallMadeIcon from '@mui/icons-material/CallMade';

const Search = () => {
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(" ");
  const value1 = "Pathaan";
  const value2 = "Love";
  const value3 = "Fifty shades";


  const fetchSearch = async () => {
    const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9ab656c6f1596990ec8a11ec1801b101&language=en-US&query=${query}&page=${page}&include_adult=false`)
    // console.log(data.data);
    setContent(data.data.results)
    setNumOfPages(data.data.total_pages)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSearch();
      // console.log("Query Length : ", query.length);
    }, 1000);
    return () => clearTimeout(timer);
  }, [query]);

  // useEffect(() => {
  //   fetchSearch();
  // }, [query, page])

  return (
    <div className='mb-22 justify-center m-auto'>
      <div className="items-center flex justify-center m-5">
        <div className="flex rounded border-2 border-blue-500">
          <input type="text" className="sm:px-4 p-2 w-72 sm:w-96" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
          <button className="flex items-center border-x-2 border-blue-500 justify-center px-4 border-l">
            <SearchIcon />
          </button>
        </div>
      </div>
      {query.length === 1 &&
        <div className="suggestions flex flex-col mt-2 cursor-pointer">
          <span className='mx-2 my-1 border-b-2' onClick={() => setQuery(value1)}><CallMadeIcon />{value1}</span>
          <span className='mx-2 my-1 border-b-2' onClick={() => setQuery(value2)}><CallMadeIcon />{value2}</span>
          <span className='mx-2 my-1 border-b-2' onClick={() => setQuery(value3)}><CallMadeIcon />{value3}</span>
        </div>}
      <div className='flex flex-wrap justify-center mb-12'>
        {content && content.map((c) => {
          return <Card
            key={c.id}
            poster={c.poster_path}
            title={c.title || c.name} />
        })}
      </div>
      <div className='m-5 flex justify-center'>
        {numOfPages > 1 &&
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        }
      </div>
    </div>
  )
}

export default Search