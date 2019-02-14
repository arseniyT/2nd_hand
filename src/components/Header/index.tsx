import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import UserMenu from "./UserMenu";
import Search from "./Search";
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const style = () => createStyles({
    header: {
        width: '100%',
        height: '50px',
        flexDirection: 'row',
        background: 'royalblue',
        padding: '10px',
    },
})

interface IHeaderProps {
    classes: {
        header: string;
    }
}

const Header = (props: IHeaderProps) => {
    const { classes } = props;

    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <Search/>
            </Toolbar>
            <Link to="/home" title="Home">
                <div className="logo">
                    <h1>2<sup>nd</sup>H&</h1>
                </div>
            </Link>
            <Toolbar className="default-actions">
                <UserMenu/>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(style)(Header);
