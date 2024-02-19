import React, { useState } from 'react';
import '../landingPage/video.css';

export const Video = () => {
  const [displayedVids, setDisplayedVids] = useState(0);
  const videoInfo = [
    {
    genre: 'wallpaper',
    thumbnail: '/images/DemoImage.jpg',
    title: 'Wallpaper 1',
    link: '#'
    },
    {
      genre: 'wallpaper',
      thumbnail: '/images/DemoImage.jpg',
      title: 'Wallpaper 2',
      link: '#'
    },
    {
      genre: 'wallpaper',
      thumbnail: '/images/DemoImage.jpg',
      title: 'Wallpaper 3',
      link: '#'
    },
    {
      genre: 'wallpaper',
      thumbnail: '/images/DemoImage.jpg',
      title: 'Wallpaper 4',
      link: '#'
    },
    {
      genre: 'wallpaper',
      thumbnail: '/images/DemoImage.jpg',
      title: 'Wallpaper 5',
      link: '#'
    },
    {
      genre: 'wallpaper',
      thumbnail: '/images/DemoImage.jpg',
      title: 'Wallpaper 6',
      link: '#'
    },
    {
      genre: 'wallpaper',
      thumbnail: '/images/DemoImage.jpg',
      title: 'Wallpaper 1',
      link: '#'
      },
      {
        genre: 'wallpaper',
        thumbnail: '/images/DemoImage.jpg',
        title: 'Wallpaper 2',
        link: '#'
      },
      {
        genre: 'wallpaper',
        thumbnail: '/images/DemoImage.jpg',
        title: 'Wallpaper 3',
        link: '#'
      },
      {
        genre: 'wallpaper',
        thumbnail: '/images/DemoImage.jpg',
        title: 'Wallpaper 4',
        link: '#'
      },
      {
        genre: 'wallpaper',
        thumbnail: '/images/DemoImage.jpg',
        title: 'Wallpaper 5',
        link: '#'
      },
      {
        genre: 'wallpaper',
        thumbnail: '/images/DemoImage.jpg',
        title: 'Wallpaper 6',
        link: '#'
      },
    
  ];

  const scrollLeft = () => {
    setDisplayedVids(prev => Math.max(prev - 3, 0));
  };

  const scrollRight = () => {
    setDisplayedVids(prev => Math.min(prev + 3, videoInfo.length - 3));
  };

  return (
    <>
      <button className="VidCycle left" onClick={scrollLeft}></button>
        <div className="video-list gap-5" style={{ transform: `translateX(-${displayedVids * 300}px)` }}>
          {videoInfo.slice(displayedVids, displayedVids + 6).map((video, index) => (
            <a key={index} href={video.link} className="Video col-3">
              <img className="thumbnail col-12" src={video.thumbnail} alt="Thumbnail" />
              <p className="title">{video.title}</p>
            </a>
          ))}
        </div>
      <button className="VidCycle right" onClick={scrollRight}></button>
    </>
  );
};
