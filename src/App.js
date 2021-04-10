import React, { useState } from "react";
import Pagination from "react-js-pagination";
import "./App.css"

const PaginatedContent = () => {
  // Data to be rendered using pagination.
  const todos = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const todosPerPage = 3;
  const [activePage, setCurrentPage] = useState(1);

  // Logic for displaying current todos
  const indexOfLastTodo = activePage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const renderTodos = currentTodos.map((todo, index) => {
    return <li key={index}>{todo}</li>;
  });

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber)
  };

  return (
    <div>
      <div className="result">
        {renderTodos}
      </div>
      <div className="pagination">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={3}
          totalItemsCount={todos.length}
          pageRangeDisplayed={3}
          onChange={handlePageChange}
        />
      </div>
    </div>
  )

}

export default PaginatedContent;





// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import ReactPaginate from 'react-paginate';
// // import './App.css'

// function App() {
//   const [offset, setOffset] = useState(0);
//   const [data, setData] = useState([]);
//   const [perPage] = useState(10);
//   const [pageCount, setPageCount] = useState(0)


//   const getData = async() => {
//       const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
//       const data = res.data;
//                 const slice = data.slice(offset, offset + perPage)
//                 const postData = slice.map((pd : any) => <div key={pd.id}>
//                     <p>{pd.title}</p>
//                     <img src={pd.thumbnailUrl} alt=""/>
//                 </div>)
//                 setData(postData)
//                 setPageCount(Math.ceil(data.length / perPage))
//   }
//   const handlePageClick = (e: any) => {
//     const selectedPage = e.selected;
//     setOffset(selectedPage + 1)
// };

//  useEffect(() => {
//    getData()
//  }, [offset])

//   return (
//     <div className="App">
//       {data}
//        <ReactPaginate
//                     previousLabel={"prev"}
//                     nextLabel={"next"}
//                     breakLabel={"..."}
//                     breakClassName={"break-me"}
//                     pageCount={pageCount}
//                     marginPagesDisplayed={2}
//                     pageRangeDisplayed={6}
//                     onPageChange={handlePageClick}
//                     containerClassName={"pagination"}
//                     // subContainerClassName={"pages pagination"}
//                     activeClassName={"active"}/>
//     </div>
//   );
// }

// export default App;
