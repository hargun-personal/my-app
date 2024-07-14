var myStyle = {
    color:'green',
    borderBottom:'2px solid green'
}

var AppHeader = function (args) {
    console.log(args)
    return <div style={myStyle}>
                <h1>Hello React World</h1>
                <p>Welcome to world of react</p>
           </div>;
}

export default AppHeader;