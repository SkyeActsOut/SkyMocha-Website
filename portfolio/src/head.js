function sortName (name) {
    return name.split(' ').join('').split('?').join('').split('!').join('');
}

function Head(props) {

  return (
    <head> 

        <title>{props.name}</title>
        <link rel='icon' href={`/assets/thumbnails/${sortName(props.name)}.png`} />
        <meta name="description" content={`Skye Kychenthal's Project ${props.name}: ${props.short}`} />
        <meta name="author" content={`SkyMocha`} />

        <meta property="og:title" content={props.name} />
        <meta property="og:description" content={`Skye Kychenthal's Project ${props.name}: ${props.short}`} />
        <meta property="og:image" content={`/assets/thumbnails/${sortName(props.name)}.png`} />

    </head>
  );

}

export default Head;
