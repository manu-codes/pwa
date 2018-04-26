import React from 'react';
import AppBar from 'material-ui/AppBar';
import MenuIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
class BaseContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = { open: true };
    }
    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });
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
                    {links.map((lnk)=><MenuItem onClick={this.handleClose}>{lnk}</MenuItem>)}

                    {/* <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem> */}
                </Drawer>
                {this.props.children}
            </div>
        );
    }
}

export default BaseContainer;
