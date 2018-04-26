import React from 'react';
import AppBar from 'material-ui/AppBar';
import MenuIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
class BaseContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = { open: false };
    }
    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose(link) {
        this.setState({ open: false });
        // return <Redirect to={link} />
    }
    render() {
        const links = this.props.links;
        return (
            <div>
                <AppBar
                    title="Cafe Apps"
                    iconElementRight={<IconButton><MenuIcon /></IconButton>}
                    onLeftIconButtonClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    {links.map((lnk) => <Link to={lnk.path} style={{textDecoration:'none'}}><MenuItem onClick={this.handleClose}>{lnk.name}</MenuItem></Link>)}
                </Drawer>
                {this.props.children}
            </div>
        );
    }
}

export default BaseContainer;
