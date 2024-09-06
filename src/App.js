import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
import './App.css';
import FeedbackForm from './Form'; // Correct component name
import TicketBookingInterface from './TicketBookingInterface';
import Tickethistory from "./tickethistory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/history" element={<Tickethistory/>} />
          <Route path="/form" element={<FeedbackForm />} /> {/* Use FeedbackForm */}
          <Route path="/booking" element={<TicketBookingInterface />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
