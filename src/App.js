import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout  from "./pages/AppLayout/AppLayout.component.tsx";
import CreateTask from "./pages/CreateTask/CreateTask.component.tsx";
import Inbox from './pages/Inbox/Inbox.component.tsx';
import UpcomingComponent from "./pages/Upcoming/Upcoming.component.tsx";
import StarredComponent from "./pages/Starred/Starred.component.tsx";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
          <Route path="/create" element={<CreateTask/>}/>
          <Route path="/inbox" element={<Inbox/>}/>
          <Route path="/upcoming" element={<UpcomingComponent/>}/>
          <Route path="/starred" element={<StarredComponent/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
