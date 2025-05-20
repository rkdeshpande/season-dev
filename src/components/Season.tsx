import React from 'react';
import './Season.css';

interface SeasonProps {
  season: number;
}

const Season: React.FC<SeasonProps> = ({ season }) => {
  return (
    <div className="hello">
      <h1 className={season === 1 ? 'active' : 'inactive'}>Winter</h1>
      <h1 className={season === 2 ? 'active' : 'inactive'}>Fool's Spring</h1>
      <h1 className={season === 3 ? 'active' : 'inactive'}>Second Winter</h1>
      <h1 className={season === 4 ? 'active' : 'inactive'}>Spring of Deception</h1>
      <h1 className={season === 5 ? 'active' : 'inactive'}>Third Winter</h1>
      <h1 className={season === 6 ? 'active' : 'inactive'}>The Pollening</h1>
      <h1 className={season === 7 ? 'active' : 'inactive'}>Actual Spring</h1>
      <h1 className={season === 8 ? 'active' : 'inactive'}>Summer</h1>
      <h1 className={season === 9 ? 'active' : 'inactive'}>Hell's Front Porch</h1>
      <h1 className={season === 10 ? 'active' : 'inactive'}>False Fall</h1>
      <h1 className={season === 11 ? 'active' : 'inactive'}>Second Summer</h1>
      <h1 className={season === 12 ? 'active' : 'inactive'}>Actual Fall</h1>
    </div>
  );
};

export default Season; 