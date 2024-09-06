import React from "react";
import CardComponent from "./CardComponent";

const Tickethistory = () => {
    return (
        <div className="Main" style={styles.Main}>
            <h1 style={styles.heading}>My Tickets</h1> {/* Apply left alignment */}
            <h3 style={styles.subHeading}>UPCOMING</h3> {/* Apply left alignment */}
            <CardComponent
                bookingId="HELLO456"
                museumName="Modern Art Museum"
                date="12th September, 2024"
                time="2:00 PM to 3:00 PM"
                imageUrl="/images/v143_514.png"
            />
            <h3 style={styles.subHeading}>VISITED</h3> {/* Apply left alignment */}
            <CardComponent
                bookingId="HELLO456"
                museumName="Modern Art Museum"
                date="12th September, 2024"
                time="2:00 PM to 3:00 PM"
                imageUrl="/images/v143_495.png"
            />
            
            <div className="Footer" style={styles.Footer}>
                {/* Add content or footer links here */}
                <p>Home</p> 
            </div>
        </div>
    );
};

const styles = {
    Main: {
        backgroundColor: "black",
        color: "white",
        padding: "7px",
    },
    heading: {
        textAlign: "left", // Align h1 to the left
        marginLeft: "460px", // Optional: Add left margin
    },
    subHeading: {
        textAlign: "left", // Align h3 to the left
        marginLeft: "460px", // Optional: Add left margin
    },
    Footer: {
        height: "30px",
        backgroundColor: "rgba(7,138,123,1)",
        marginTop: "20px",
        textAlign: "center",
        color: "white",
    },
};

export default Tickethistory;
