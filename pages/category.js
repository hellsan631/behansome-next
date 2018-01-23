import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import FirestoreDb from '../libs/FirestoreDb';
import {ProjectStore, Projects} from '../libs/ProjectStore';
import {observer} from 'mobx-react';
import ProjectCard from '../components/ProjectCard';
import stylesheet from '../static/simple.css';

const Category = observer(class Category extends React.Component {
  componentWillMount() {
    this.setQuery(this.props.url.query.name);
  }

  componentWillReceiveProps(nextProps) {
    this.setQuery(nextProps.url.query.name);
  }
  
  static async getInitialProps(req) {
    const category = req.query.name;

    ProjectStore.updateProjects(category, 1);

    return { };
  }

  setQuery(category) {
    Projects.query = Projects.ref
      .where('category', '==', category)
      .orderBy('published_on', 'desc')
      .limit(12);
  }

  render() {
    const projects = Projects.docs.map(project => (
      <div key={project.id} className="col-4 col-6-sm">
        <ProjectCard project={project.data} />
      </div>
    ));

    return (
      <div>
        <Head title="Home" />
        <Nav />
    
        <div className="hero">
          <h1 className="title">{this.props.url.query.name}</h1>
        </div>
        <div className="row">
          {projects}
        </div>
    
        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title, .description {
            text-align: center;
          }
        `}</style>

        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </div>
    )
  }
});

export default Category;
