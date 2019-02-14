import React, { Component } from "react";
import { connect } from "react-redux";
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { findAds } from "../../../data/actions/actionCreators";
import { IState } from "../../../data/interfaces";

const styles = (theme: Theme) => createStyles({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
            width: 200,
        },
        },
    },
});

interface ISearchProps {
    classes: {
        search: string;
        searchIcon: string;
        inputRoot: string;
        inputInput: string;
    };
    findAds: (category: string) => void;
}

class Search extends Component<ISearchProps & RouteComponentProps> {

    public searchInputChangeHandler = (e: React.FormEvent<EventTarget>) => {
        const target = e.target as HTMLInputElement;

        if (target.value !== "") {
            this.props.findAds(target.value);

            setTimeout(() => {
                this.props.history.push("/search-result");
                target.value = "";
            }, 2000);
        }
    }

    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
                <form>
                    <InputBase
                        placeholder="type category..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        onChange={this.searchInputChangeHandler}
                    />
                </form>
            </div>
        );
    }
};

const mapStateToProps = (state: IState) => ({
    foundAds: state.foundAds,
  });
  
  const mapDispatchToProps = {
    findAds
  };
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Search)));
