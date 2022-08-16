import Header from './header';
import React from 'react';
import Head from './head'

/**
 * 
 * @param {String} elem 
 */
function formatText (elem) {

    let split1 = elem.split ('**<') // 0 is before 1 is temporary

    if (split1[1] == undefined)
        return (<div className="text"><p>{elem}</p></div>);

    let split2 = `${split1[1]}`.split('>**')

    return (<div className="text"><p>{addBreak(split1[0])}</p> <h3>{addBreak(split2[0])}</h3> <p>{addBreak(split2[1])}</p></div>)
        
}

function addBreak (elem) {
    let br = elem.split ('<br>')
    if (br.length > 1) {
        let _br = []
        br.forEach (e => {
            _br.push ( <p>{e}</p> )
        })
        return ( <span>{_br}</span> )
    }
    return elem;
}

function populateFormat (elem) {

    let div = [];

    elem.forEach(element => {
        
        if (!element.startsWith ('https') && !element.startsWith ('img') && !element.includes ('url'))
            div.push ( <p>
                            {(formatText(element))}
                        </p> )
        else if (element.startsWith('https')) {
            div.push (<iframe src={`https://www.youtube.com/embed/${element.split('/')[3]}`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
        }
        else if (element.startsWith ('img')) {
            let src = element.split('>')[1].split(' ');
            div.push ( <div className='text'> <img src={src[0]} /> <p>{src.slice(1).join(' ')}</p> </div> )
        }
        else if (element.startsWith ('url')) {
            let _div = []

            _div.push (<h3>Links</h3>)

            element.split('url>').forEach (e => {
                let e_split = e.split('(')
                if (e_split[1] != undefined)
                    _div.push  ( <div className='link'> <a href={ e_split[0] } > { `${e_split[1].replace(')','')}` } </a> </div>)
            });

            div.push (<div className="text">{_div}</div>)
        }
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

            <Head name={props.name} short={props.short} />

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