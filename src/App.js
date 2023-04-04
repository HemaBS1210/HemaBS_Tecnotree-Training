import React from 'react';
// // // // import LoginForm from './Components/LoginForm';
// // // // import MyComponent from './Components/Mycomponents';

// // // // function Greeting(props) {
// // // //   return <h1>Hello, {props.name}!</h1>;
// // // // }

// // // // function App() {
// // // //   return (
// // // //     <div>
// // // //     <Greeting name="Techno" />
// // // //     <Greeting name="Tree" />
// // // //     <Greeting name="Trainees" />
// // // //     <LoginForm />
// // // //     <MyComponent />
// // // //   </div>

// // // //   );
// // // // }
// // // function Greeting(props) {
// // //     return <h1>Hello, {props.name}!</h1>;
// // //   }

// // //   function App() {
// // //     return (
// // //       <div>
// // //         <Router />
// // //         </div>
// // //     );
// // //   }
// // import React from 'react';
// // import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// // function Home() {
// //   return <h1>Welcome to the home page!</h1>;
// // }

// // function About() {
// //   return <h1>About us</h1>;
// // }

// // function Contact() {
// //   return <h1>Contact us</h1>;
// // }

// // function App() {
// //   return (
// //     <Router>
// //       <div>
// //         <nav>
// //           <ul>
// //             <li>
// //               <Link to="/">Home</Link>
// //             </li>
// //             <li>
// //               <Link to="/about">About</Link>
// //             </li>
// //             <li>
// //               <Link to="/contact">Contact</Link>
// //             </li>
// //           </ul>
// //         </nav>
// //         <Switch>
// //           <Route path="/about">
// //             <About />
// //           </Route>
// //           <Route path="/contact">
// //             <Contact />
// //           </Route>
// //           <Route path="/">
// //             <Home />
// //           </Route>
// //         </Switch>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;


// // // export default App;

// import React, { useState } from 'react';

// function PasswordChecklist() {
//   const [password, setPassword] = useState('');
//   const [isUppercase, setIsUppercase] = useState(false);
//   const [isLowercase, setIsLowercase] = useState(false);
//   const [isNumber, setIsNumber] = useState(false);
//   const [isSpecialChar, setIsSpecialChar] = useState(false);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const strengthMap = {
//     weak: 'red',
//     moderate: 'orange',
//     strong: 'green',
//   };

//   function handlePasswordChange(event) {
//     setPassword(event.target.value);

//     // Check if password contains uppercase letters
//     setIsUppercase(/[A-Z]/.test(event.target.value));

//     // Check if password contains lowercase letters
//     setIsLowercase(/[a-z]/.test(event.target.value));

//     // Check if password contains numbers
//     setIsNumber(/\d/.test(event.target.value));

//     // Check if password contains special characters
//     setIsSpecialChar(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(event.target.value));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const strength = getPasswordStrength();
//     const color = strengthMap[strength];

//     if (!isUppercase || !isLowercase || !isNumber || !isSpecialChar) {
//       alert('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
//     } else {
//       alert(`Password is ${strength} (${color}).`);
//     }
//   }

//   function getPasswordStrength() {
//     let strength = 0;

//     if (isUppercase) strength++;
//     if (isLowercase) strength++;
//     if (isNumber) strength++;
//     if (isSpecialChar) strength++;

//     if (password.length >= 8 && strength >= 3) {
//       return 'strong';
//     } else if (password.length >= 8 && strength >= 2) {
//       return 'moderate';
//     } else {
//       return 'weak';
//     }
//   }

//   function togglePasswordVisibility() {
//     setIsPasswordVisible(prev => !prev);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Password:
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <input type={isPasswordVisible ? 'text' : 'password'} value={password} onChange={handlePasswordChange} />
//           <button type="button" onClick={togglePasswordVisibility}>
//             {isPasswordVisible ? 'Hide' : 'Show'}
//           </button>
//         </div>
//         <div style={{ color: strengthMap[getPasswordStrength()] }}>
//           Password strength: {getPasswordStrength()}
//         </div>
//       </label>
//       <button type="submit" style={{ marginTop: '1rem' }}>
//         Submit
//       </button>
//     </form>
//   );
// }

// export default PasswordChecklist;
// import React, { useState } from 'react';
// import ItemForm from 'Components./ItemForm';
// import ItemList from './Components/ItemList';

//  const  items = [
//   {id: 1, name: "Apple"},
//   {id: 2, name: "Banana"},
//   {id: 3, name: "Straberry"},
//   {id: 4, name: "Cherry"},
//  ]


// function App() {
//   const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

//   const handleSubmit = (newItem) => {
//     setItems([...items, newItem]);
//   };

//   return (
//     <div>
//       <h1>My Item List</h1>
//       <ItemList items={items} />
//       <ItemForm onSubmit={handleSubmit} />
//     </div>
//   );
// }



// export default App;
// import React, { useState } from 'react';
// import ItemList from './Components/ItemList';
// import ItemForm from './Components/ItemForm';

// function App() {
//   const  items = [
//       {id: 1, name: "Apple"},
//       {id: 2, name: "Banana"},
//       {id: 3, name: "Straberry"},
//       {id: 4, name: "Cherry"},
//      ]

//   const handleSubmit = (newItem) => {
//     setItems([items, newItem]);
//   };

//   return (
//     <div>
//       <h1>List of Fruits</h1>
//       <ItemList items={items} />
//       <ItemForm onSubmit={handleSubmit} />
//     </div>
//   );
// }


// import React from 'react';
// import TodoList from './Components/TodoList';

// function App() {
//   return (
//     <div>
//       <h1>My Todo App</h1>
//       <TodoList />
//     </div>
//   );
// }


// // export default App;
// import React from 'react';
// import FruitList from './Components/FruitList';

// const items = [
//   { id: 1, name: "Strawberry" },
//   {id: 2, name : "Cherry"},
//   {id : 3, name: "Apple"},
// ]

// function App() {
//   return (
//     <div>
//       <h1>My Fruit App</h1>
//       <FruitList />
//     </div>
//   );
// }

// export default App;

// export default App;
// import React from 'react';
// import DataFetcher from './Components/DataFetcher';

// function App() {
//   return (
//     <div className="App">
//       <DataFetcher />
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import Slideshow from './Componenets/Slideshow';

// const images = [
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvimPzwOXCXDCFyo4gygMnyo_C3kJ6XoGCDQ&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYQi_eUi4Qx-4fD5n8O9K3l0R4Ioior4xNA&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjLEEEKh3niD1espK8sdJmAnVvwYBkC3z1w&usqp=CAU',
// ];

// const App = () => {
//   return (
//     <div>
//       <Slideshow images={images} duration={5000} />
//     </div>
//   );
// };

// export default App;
// import React from 'react';


// import React, { Component } from 'react';
// import CountdownTimer from './Components/CountdownTimer';
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>CountdownTimer</h1>
//         <CountdownTimer />
//       </div>
//     );
//   }
// }
// export default App;
// import React from 'react';
// import Game from './Components/Game';
// // import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Game />
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import TodoList from './Components/TodoList';
// // import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <TodoList />
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import WeatherApp from "./Components/WeatherApp";

// const App = () => {
//   return (
//     <div>
//       <WeatherApp />
//     </div>
//   );
// };

// export default App;


//protop




// import React, { useEffect, useState } from "react";
// import Recipe from "./Components/Recipe";




// const App = () => {
//   const APP_ID = "6d6687a7";
//   const APP_KEY = "276a106691ab94fd9dec2d5082fe0965";

//   const [recipes, setRecipes] = useState([]);
//   const [search, setSearch] = useState();
//   const [query, setQuery] = useState("avocado");

//   useEffect(() => {
//     getRecipes();
//   }, [query]);

//   const getRecipes = async () => {
//     const response = await fetch(
//       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
//     );
//     const data = await response.json();
//     setRecipes(data.hits);
//     console.log('data.hits',data.hits)
//   };

//   const updateSearch = e => {
//     setSearch(e.target.value);
//     console.log(search);
//   };

//   const getSearch = e => {
//     e.preventDefault();
//     setQuery(search);
//   };

//   return (
  
//     <div className="App">
//       <h1>Welcome to my App</h1>
//       <form onSubmit={getSearch} className="search-form">
//         <input
//           className="search-bar"
//           type="text"
//           value={search}
//           onChange={updateSearch}
//         />
//         <button className="search-button" type="submit">
//           search
//         </button>
//       </form>
//       {recipes.map(recipe => (
//         <Recipe
//           key={recipe.recipe.label}
//           title={recipe.recipe.label}
//           calories={recipe.recipe.calories}
//           image={recipe.recipe.image}
//           ingredients={recipe.recipe.ingredients}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;
// documentation

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [selectedTopic, setSelectedTopic] = useState('Introduction');

//   const topics = [
//     'Introduction',
//     'Getting Started',
//     'Data Types',
//     'Functions',
//     'Objects',
//     'Arrays',
//     'Loops',
//     'Conditional Statements',
//     'Debugging',
//     'Best Practices'
//   ];

//   const topicContent = {
//     'Introduction': 'This is the introduction section. Welcome to our technical documentation webpage!',
//     'Getting Started': 'Here you will find information on how to get started with our technology.',
//     'Data Types': 'Learn about the various data types available in our technology.',
//     'Functions': 'This section provides information on functions in our technology.',
//     'Objects': 'Information on objects in our technology can be found here.',
//     'Arrays': 'Learn about arrays and how to use them in our technology.',
//     'Loops': 'This section covers loops in our technology.',
//     'Conditional Statements': 'Here you will find information on conditional statements in our technology.',
//     'Debugging': 'Learn how to debug your code with this section on debugging.',
//     'Best Practices': 'This section provides some best practices for our technology.'
//   };

//   const handleTopicClick = (topic) => {
//     setSelectedTopic(topic);
//   };

//   return (
//     <div className="App">
//       <div className="left-section">
//         <h1 className="title">Technical Documentation</h1>
//         <ul className="topics-list">
//           {topics.map((topic) => (
//             <li
//               key={topic}
//               className={selectedTopic === topic ? 'selected-topic' : ''}
//               onClick={() => handleTopicClick(topic)}
//             >
//               {topic}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="right-section">
//         <h2 className="topic-title">{selectedTopic}</h2>
//         <p className="topic-content">{topicContent[selectedTopic]}</p>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import About from './Components/About';
// import Donate from './Components/Donate';
// import Footer from './Components/Footer';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Home />
//       <About />
//       <Donate />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [activeSection, setActiveSection] = useState('introduction');
//   const sections = [
//     { id: 'introduction', title: 'Introduction', content: 'In this section, we provide an overview of our product.' },
//     { id: 'installation', title: 'Installation', content: 'In this section, we provide instructions on how to install our product.' },
//     { id: 'usage', title: 'Usage', content: 'In this section, we provide information on how to use our product.' },
//     { id: 'api-reference', title: 'API Reference', content: 'In this section, we provide detailed information on the API of our product.' },
//     { id: 'contributing', title: 'Contributing', content: 'In this section, we provide information on how to contribute to our product.' },
//     { id: 'license', title: 'License', content: 'In this section, we provide information on the license of our product.' },
//   ];

//   const handleClick = (id) => {
//     setActiveSection(id);
//   };

//   const renderSections = () => {
//     return sections.map(section => (
//       <div key={section.id} id={section.id} style={{ display: activeSection === section.id ? 'block' : 'none' }}>
//         <h2>{section.title}</h2>
//         <p>{section.content}</p>
//       </div>
//     ));
//   };

//   const renderMenu = () => {
//     return sections.map(section => (
//       <a key={section.id} href={`#${section.id}`} onClick={() => handleClick(section.id)} className={activeSection === section.id ? 'active' : ''}>
//         {section.title}
//       </a>
//     ));
//   };

//   return (
//     <div className="App">
//       <div className="menu">
//         {renderMenu()}
//       </div>
//       <div className="content">
//         {renderSections()}
//       </div>
//     </div>
//   );
// }

// export default App;


// 