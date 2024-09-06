import React from "react";

const CardComponent = ({ bookingId, museumName, date, time, imageUrl, children }) => {
    return (
      <div style={styles.cardWrapper}> {/* Centering wrapper */}
        <div style={styles.cardContainer}>
          <div style={styles.cardBackground}>
            <img src={imageUrl} alt="Museum" style={styles.backgroundImage} />
          </div>
          <div style={styles.cardContent}>
            <h2 style={styles.museumName}>{museumName}</h2>
            <p style={styles.bookingId}>Booking ID: {bookingId}</p>
            <p style={styles.dateTime}>{date}</p>
            <p style={styles.time}>{time}</p>
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
};

const styles = {
    cardWrapper: {
      display: 'flex', // Flexbox to center the card
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically (if necessary)
      margin: '20px 0', // Add some space around the card
    },
    cardContainer: {
      borderColor: "white",
      borderWidth: "2px",
      borderStyle: "solid",
      backgroundColor: "white",
      position: 'relative',
      width: '330px',
      height: '160px',
      borderRadius: '7px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 2)',
    },
    cardBackground: {
      width: '100%',
      height: '100%',
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'brightness(0.2)', 
    },
    cardContent: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: 'white', 
    },
    bookingId: {
        
      fontSize: '12px',
      margin: 0,
      color: 'white', 
    },
    museumName: {
      fontSize: '18px',
      margin: '5px 0',
    },
    dateTime: {
      fontSize: '14px',
      margin: 0,
    },
    time: {
      fontSize: '14px',
      margin: 0,
    },
};

export default CardComponent;
