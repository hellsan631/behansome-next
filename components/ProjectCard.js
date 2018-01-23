import BehanceImage from './BehanceImage';
import TrackVisibility from 'react-on-screen';

const ProjectCard = ({project, visable}) => {
  return (
    <div>
      <div className="card">
        <TrackVisibility partialVisibility>
          {(visable) => (<BehanceImage visable={visable.isVisible} covers={project.covers} />)}
        </TrackVisibility>
        <div className="card-title">
          <span className="title">{project.name}</span>
        </div>
      </div>

      <style jsx>{`
        .card {
          display:block;
          text-align: left;
          text-decoration: none;
          color: #434343;
          box-shadow: none;
          border: 1px solid #ddd;
          background-color: #fff;
          transition: box-shadow .25s;
          border-radius: 2px;
        }

        .card-image {
          width: 100%;
          padding-top: 100%;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }

        .card-title {
          padding: 20px;
          border-radius: 0 0 2px 2px;
        }

        .title {
          display: inline-block;
          white-space: nowrap;
          width: 100%;
          padding-right: 20px;
          overflow: hidden;
          font-size: 13px;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  )
}

export default ProjectCard;