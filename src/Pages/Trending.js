import Card from '../Components/Card'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CustomPagination from '../Components/CustomPagination';

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const fetchTrending = async () => {
    const data = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=9ab656c6f1596990ec8a11ec1801b101&page=${page}`)
    // console.log(data.data.results);
    setContent(data.data.results)
  }
  useEffect(() => {
    fetchTrending();
  }, [page, content])

  return (
    <div>
      <h2 className='text-2xl font-semibold flex justify-center mb-2'>TRENDING TODAY</h2>
      <div className='flex flex-wrap justify-center '>
        {content && content.map((c) => {
          return <Card
            key={c.id}
            poster={c.poster_path}
            title={c.title || c.name} />
        })}
      </div>
      <div className='pb-20 pt-5 flex justify-center'>
        <CustomPagination setPage={setPage} />
      </div>
    </div>
  )
}

export default Trending