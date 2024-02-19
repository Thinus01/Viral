import './video.css'

export const VideoInfo = [
  {
  thumbnail: '/images/DemoImage.jpg',
  title: 'Top 10 weird wallpapers',
  link: '#'
  }
];

const Content = () => {

  return (
    <a href={VideoInfo[0].link} className="Video">
      <img className="thumbnail col-12" src={VideoInfo[0].thumbnail} alt="Thumbnail" />
      <p className="title">{VideoInfo[0].title}</p>
    </a>
  );
}

export default Content;
