import "./Header.css";

function Header(props){
    return (
        <header className="header">
            {props.headerName}
        </header>
    )
}

export default Header;