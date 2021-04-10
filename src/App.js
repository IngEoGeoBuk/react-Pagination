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





// import React, { useState, useEffect } from 'react'
// import Axios from 'axios';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Colors from '../../styles/Colors'
// import ReactPaginate from 'react-paginate';
// import './Home.css';

// const White = Colors.White;
// const Indigo = Colors.Indigo;

// interface postTypes {
//     id?: number;
//     title: string;
//     contents: string;
// }

// const Home = () => {
//     const [postList, setPostList] = useState<postTypes[]>([]);
//     useEffect(() => {
//         Axios.get('http://localhost:5000/read')
//         .then((res) => setPostList(res.data));
//     }, [])

//     const [pageNumber, setPageNumber] = useState(0);
//     const postPerPage = 5;
//     const pagesVisited = pageNumber * postPerPage;

//     const displayPosts = postList
//     .slice(pagesVisited, pagesVisited + postPerPage)
//     .map((val : postTypes , key : number) => {
//         return (
//             <div>
//                 <Paper elevation={2} style={{ padding: '10px' }} >
//                     <Link to={`/team/${val.id}`} style={{ textDecoration: 'none' }}>
//                         <h3 style={{ display: 'none' }}>{key}</h3>
//                         <Typography style={{ color: Indigo }}>{val.title}</Typography>
//                     </Link>
//                 </Paper>
//                 <br/>                    
//             </div>
//         );
//     });

//     const pageCount = Math.ceil(postList.length / postPerPage);

//     const changePage = ({ selected } : any) => {
//         setPageNumber(selected);
//     };

//     return (
//         <div className="App">
//             {displayPosts}
//             <div className="pagination">
//             <ReactPaginate
//                 previousLabel={"prev"}
//                 nextLabel={"next"}
//                 pageCount={pageCount}
//                 onPageChange={changePage}
//                 breakLabel={"..."}
//                 breakClassName={"break-me"}
//                 marginPagesDisplayed={5}
//                 pageRangeDisplayed={5}
//                 containerClassName={"pagination"}
//                 activeClassName={"active"}/>
//             </div>
//         </div>
//     );

// }

// export default Home
