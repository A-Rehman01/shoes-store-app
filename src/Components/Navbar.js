import React, { useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import Logo from './../images/nikewhite.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import {Context} from './../GlobalContext/Context';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const { alert } = useContext(Context);
    console.log(alert)
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton color="inherit">
                    <Link to='/'><HomeIcon /> <span style={{ fontSize: '19px', marginRight: '5px' }}>Home</span></Link>
                </IconButton>
            </MenuItem>

            <MenuItem>
                <IconButton color="inherit">
                    <Link to='/product'><CardGiftcardIcon /> <span style={{ fontSize: '19px', marginRight: '5px' }}> Product </span></Link>
                </IconButton>
            </MenuItem>

            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={alert} color="secondary">
                    <Link to='/chart'><ShoppingCartIcon /> <span style={{ fontSize: '19px', marginRight: '5px' }}> Cart </span></Link>
                    </Badge>
                </IconButton>
            </MenuItem>

            <MenuItem>
                <IconButton color="inherit">
                    <a href='https://github.com/A-Rehman01/shoes-store-app' target="_blank" rel="noopener noreferrer"><GitHubIcon /> <span style={{ fontSize: '19px', marginRight: '5px' }}> Github </span></a>
                </IconButton>
            </MenuItem>

                    </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>

                    <Typography className={classes.title} variant="h6" style={{ fontWeight: 'bolder', fontFamily: 'PT Serif' }} noWrap>
                        <img src={Logo} height={35} width={40} alt="nikelogo"></img>    BLUE SHOE
                    </Typography>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>

                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Link to='/'> <HomeIcon className="iconDesktop" style={{ fontSize: '27' }} /> </Link>
                        </IconButton>

                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Link to='/product'> <CardGiftcardIcon className="iconDesktop" style={{ fontSize: '27' }} /></Link>
                        </IconButton>


                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={alert} color="secondary">
                            <Link to='/chart'> <ShoppingCartIcon className="iconDesktop" style={{ fontSize: '27' }} /></Link>
                            </Badge>
                        </IconButton>

                        
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <a href='https://github.com/A-Rehman01/shoes-store-app' target="_blank" rel="noopener noreferrer"> <GitHubIcon className="iconDesktop" style={{ fontSize: '27' }} /></a>
                        </IconButton>


                                            </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div >
    );
}
