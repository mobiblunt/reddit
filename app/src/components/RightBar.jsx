import React from 'react';
import { Link } from 'react-router-dom';
import TrendingIcon from '../../public/trending.svg';
import EventsIcon from '../../public/events.svg';
import RedditLogo from '../../public/redditlogo.svg';
import UserAvatar from '../../public/Avatar.png';

const RightBar = () => {
  return (
    <div className="fixed z-10 right-0 bg-gray-800 text-white w-72 h-screen p-4 flex flex-col border-l-[1px] border-slate-500">
      <nav className="flex flex-col space-y-2 mb-6">
        <Link to="/" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
          <img src={TrendingIcon} alt="Trending" className="w-4 h-4 mr-4" />
          <span className="text-lg">Trending</span>
        </Link>

        <Link to="/" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
          <img src={EventsIcon} alt="Events" className="w-4 h-4 mr-4" />
          <span className="text-lg">Events</span>
        </Link>

        
      </nav>
    </div>
  );
};

export default RightBar;
