import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player'


const LoadingPage = (props) => {
  const [blobs, setBlobs] = useState([]);

  useEffect(() => {
    const newBlobs = [];
    for (let i = 0; i < 15; i++) {
      newBlobs.push(createBlobData());
    }
    setBlobs(newBlobs);
  }, []);

  const createBlobData = () => {
    return {
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      endX: Math.random() * 100,
      endY: Math.random() * 100,
      moveDuration: 20 + Math.random() * 10,
      shapeDuration: 10 + Math.random() * 5,
      moveDelay: -Math.random() * 20,
      shapeDelay: -Math.random() * 10,
    };
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <h1 style={{
        fontFamily: 'Arial, sans-serif',
        textAlign:'center',
        fontSize: '30px',
        fontFamily:'Gill Sans MT',
        // fontFamily:'Calibri',
        // fontFamily: 'Trebuchet MS', 
        // fontFamily: 'sans-serif',
        color: 'black',
        zIndex: 2,
        position: 'relative',
      }}>
        <Lottie loop play style={{ width: 500, height: 260 }} animationData={props.animation} />
        Creating Response...
      </h1>
      {blobs.map((blob, index) => (
        <div
          key={index}
          className="blob"
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '50%',
            filter: 'blur(20px)',
            '--start-x': `${blob.startX}vw`,
            '--start-y': `${blob.startY}vh`,
            '--end-x': `${blob.endX}vw`,
            '--end-y': `${blob.endY}vh`,
            animationDuration: `${blob.moveDuration}s, ${blob.shapeDuration}s`,
            animationDelay: `${blob.moveDelay}s, ${blob.shapeDelay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes move {
          0%, 100% { transform: translate(var(--start-x), var(--start-y)); }
          50% { transform: translate(var(--end-x), var(--end-y)); }
        }
        
        @keyframes shape-change {
          0% { border-radius: 50%; }
          25% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 50% 20% 80% 50% / 50% 80% 20% 50%; }
          75% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
          100% { border-radius: 50%; }
        }
        
        .blob {
          animation: move 20s infinite alternate, shape-change 10s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;