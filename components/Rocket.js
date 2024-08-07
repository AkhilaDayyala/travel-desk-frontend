import React from 'react';
import { motion } from 'framer-motion';
import rocketImage from '../assets/images/rocket.png'; // Ensure you have a rocket image in your assets
import flameImage from '../assets/images/flame.png'; // Ensure you have a flame image in your assets

const Rocket = ({ stage }) => {
  return (
    <div style={{ position: 'relative', height: '100px' }}>
      <motion.div
        initial={{ y: 0 }}
        animate={
          stage === 'launch' ? { y: -500 } : { y: 0 }
        }
        transition={{ type: 'spring', stiffness: 100 }}
        style={{ position: 'absolute', bottom: '20px', width: '50px' }}
      >
        <img src={rocketImage} alt="Rocket" style={{ width: '100%' }} />
        {(stage === 'ignite' || stage === 'launch') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, 15, 20] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            style={{ position: 'absolute', bottom: '-20px', width: '50px' }}
          >
            <img src={flameImage} alt="Flame" style={{ width: '100%' }} />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Rocket;
