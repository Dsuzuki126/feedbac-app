import Header from "./components/Header.jsx";

import { useState } from "react";
import FeedbackData from "./data/feedbackData.js";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback= (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (
        <>
            <Header/>
            <div className='container'>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}></FeedbackList>
         
            </div>
        </>
    
    );
    
}

export default App