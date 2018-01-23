import {Collection, Document} from 'firestorter';
import FirestoreDb from './FirestoreDb';
import {action, observable, useStrict, runInAction} from 'mobx';
import Behansome from './Behansome';

//useStrict(true);

const Projects = new Collection('projects');

FirestoreDb.init();

class ProjectStore {
  @observable state = 'pending'; // "pending" / "done" / "error"
  
  static async updateProjects(category, page = 1) {
    runInAction(() => {
      this.state = 'pending'
    })

    try {
      const projects = await fetchProjectsFromBehance(category, page);

      for (let i = 0; i < projects.length; i++) {
        let project = projects[i];

        let projectData = {
          id: project.id,
          category: category,
          published_on: project.published_on,
          name: project.name,
          covers: project.covers,
          fields: project.fields,
          stats: project.stats,
          url: project.url
        };

        // Since projects can have multiple categories
        const projectId = `${project.id}_${category.replace(/\s/g, '')}`;

        let projectRef = new Document(`projects/${projectId}`);

        projectRef.set(projectData);
      }

      runInAction(() => {
        this.state = 'done'
      })

      return projects;

    } catch (error) {
      runInAction(() => {
        this.state = 'error'
      })
    }
  }
}

async function fetchProjectsFromBehance(category, page) {
  return await Behansome.getPagedProjects(category, page);
}


export {ProjectStore, Projects};