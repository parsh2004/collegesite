import React, { useState, useEffect } from 'react';
import './Events.css';

const eventsData = [
  { title: 'Tech Society', date: 'The Gateway to the exciting world of new technologies.', image: '/college/assets/e1.jpg' },
  { title: 'Pongal Fest', date: ' Marking the end of winter and signals the start of the journey of The Sun', image: '/college/assets/e2.jpg' },
  { title: 'Drestein', date: 'Tecnical Symposiums and Workshops welcoming the enthusiastic emerging Techies.', image: '/college/assets/e3.jpg' },
  { title: 'Celenza', date: 'A three-day showdown of Sports and Culturals bringing out the creative talent of learners.', image: '/college/assets/e4.jpg' }
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="events" id="events">
      <div className="event-list">
        <div className="event">
          <img src={eventsData[currentIndex].image} alt={eventsData[currentIndex].title} className="event-image" />
          <h3>{eventsData[currentIndex].title}</h3>
          <p>{eventsData[currentIndex].date}</p>
        </div>
      </div>
    </div>
  );
}

export default Events;
