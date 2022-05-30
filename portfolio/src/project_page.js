import Header from './header';
import React from 'react';

/**
 * 
 * @param {String} elem 
 */
function formatText (elem) {

    let split1 = elem.split ('**<') // 0 is before 1 is temporary

    if (split1[1] == undefined)
        return (<div className="text"><p>{elem}</p></div>);

    let split2 = `${split1[1]}`.split('>**')

    return (<div className="text"><p>{split1[0]}</p> <h1>{split2[0]}</h1> <p>{split2[1]}</p></div>)
        
}

function populateFormat (elem) {

    let div = [];

    elem.forEach(element => {
        
        if (!element.startsWith ('https'))
            div.push ( <p>
                            {formatText(element)}
                        </p> )
        else
            div.push (<iframe src={`https://www.youtube.com/embed/${element.split('/')[2]}`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)

    });

    return div;

}

function ProjectPage (props) {

    let left = props.format.left;
    let right = props.format.right;

    let left_div = populateFormat(left);
    let right_div = populateFormat(right);

    return (
        <React.StrictMode>
            <Header name={props.name} short={props.short}/>
   
            <div className='boxes'>
                <div className='left-box'>
                    {left_div}
                </div>
                <div className='right-box'>
                    {right_div}
                </div>
            </div>

        </React.StrictMode>
    )


}

export default ProjectPage;