import React from "react";


export class AppFooter extends React.Component {
    render () {
        return <div>
               <a href={this.props.link}>{this.props.text}</a>
            </div>;
    }
}

export default AppFooter;