import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import CustomPagination from '../Components/CustomPagination';
import Card from '../Components/Card';

const Search = () => {
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(" ");

  const fetchSearch = async () => {
    const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9ab656c6f1596990ec8a11ec1801b101&language=en-US&query=${query}&page=${page}&include_adult=false`)
    // console.log(data.data);
    setContent(data.data.results)
    setNumOfPages(data.data.total_pages)
  }

  useEffect(() => {
    fetchSearch();
  }, [query, page])

  return (
    <div className='mb-28 justify-center m-auto'>
      <div className="flex items-center justify-center m-5">
        <div className="flex rounded border-2 border-blue-500">
          <input type="text" className="px-4 py-2 w-80 sm:w-96" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
          <button className="flex items-center justify-center px-4 border-l">
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className='flex flex-wrap justify-center mb-18'>
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