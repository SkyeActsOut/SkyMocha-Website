import './app.css';

function Header(props) {

  return (
    <div className="header">
    
      <header className="header">

        <div className="header-flex">
          <h1><a href='/'>HOME</a></h1>
          <h1><a href='/portfolio'>PORTOLIO</a></h1>
        </div>

        <div className="title">
          <h2>{props.name}</h2>
          <p>{props.short}</p>
        </div>

      </header>
    </div>
  );

}

export default Header;
