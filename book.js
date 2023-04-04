// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Books = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/books')
//       .then(response => {
//         setBooks(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Books</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Author</th>
//             <th>Genre</th>
//             <th>Publish Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map(book => (
//             <tr key={book.id}>
//               <td>{book.id}</td>
//               <td>{book.title}</td>
//               <td>{book.author}</td>
//               <td>{book.genre}</td>
//               <td>{book.publish_date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Books;
