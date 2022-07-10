import React from "react";

// Keep notes here: https://schmincenzo.com/wp-admin/post.php?post=1968&action=edit
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

//<> Import CSS
import "./css/palette.css";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
 
const App = () => {
 return (
   <div className='bg-orange-dark text-orange-bright'>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
   </div>
 );
};
 
export default App;