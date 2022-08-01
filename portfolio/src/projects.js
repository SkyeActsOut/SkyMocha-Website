import './app.css';
import React from 'react';
import projects from './project_list.json'

function sortName (name) {
    return name.split(' ').join('').split('?').join('').split('!').join('');
}

function Project (props) {
    
    if (props.technical) {

        let tags = []
        props.tags.forEach (t => { 
            tags.push( <div>{ t }</div> )
        })
        return (
            <a href={sortName(props.name)} className="project">
                <img src={ `/assets/thumbnails/${sortName(props.name)}.png` } alt={props.name} />
                <div className="info">
                    <h2> { props.name } </h2>
                    <p> { props.short } </p>
                    <p className='technologies'>Technologies:</p>
                    <ul> { tags } </ul>
                </div>
            </a>
        );
    }
    else
        return (
            <a href={sortName(props.name)} className="project">
                <img src={ `/assets/thumbnails/${sortName(props.name)}.png` } alt={props.name} />
                <div className="info">
                    <h2> { props.name } </h2>
                    <p> { props.short } </p>
                </div>
            </a>
        );

}

function titleClass (t) {
    if (t=='Technical Projects') {
        return 'tech'
    }
    return 'nontech'
}
  
function Projects (props) {
    let projs = [];
    let title = 'Technical Projects'

    if (props.technical) {
        let i = 0;
        projects.technical.forEach(p => {
            if (i==2)
                projs.push (
                    <img className='GitHubStats' src="https://github-readme-stats.vercel.app/api?username=skymocha&hide_border=true" />
                )
            projs.push ( <Project 
                name={p.name} 
                short={p.short}
                tags={p.tags}
                technical={true}
            /> )
            i+=1;

        })

    }
    else {
        title = 'NonTechnical Projects'
        projects.nontechnical.forEach(p => {
            projs.push ( <Project 
                name={p.name} 
                short={p.short}
                tags={p.tags}
                technical={false}
            /> )
        })
    }
  
    let classes = `project-section ${titleClass(title)}`

    return (
        
        <div className={classes}>
            <h2>{title}</h2>
            <div className='projects_container'>
                { projs }
            </div>
        </div>

    );

}

export default Projects;