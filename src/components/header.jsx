import { useState, useEffect } from 'react';
// MATERIALS
import { 
    IconButton, 
    Badge, 
    Avatar, 
    Divider, 
    Menu, 
    MenuItem, 
    ListItemIcon
} from '@mui/material';
import { 
    NotificationsActive as AlertIcon,
    KeyboardArrowDownOutlined as ArrowDown,
    MoreVert as OptionsIcon,
    Person2 as ProfileIcon,
    ManageAccounts as ProfileSettingsIcon,
    Logout as LogoutIcon
} from '@mui/icons-material';
// DEFAULT MATERIAL COMPONENTS PROPS
import headerOptionsProps from '../props/headerOptionsProps';
// SCROLLABLE NOTIFICATION DIALOG
import ScrollDialog from '../miniComponents/scrollableDialog';

function Header(props) {
    const { user={name: "", profile: ""}, navPanel } = props;
    const [anchorOptionMenu, setAnchorOptionMenu] = useState(null);
    const [toggleOptions, setToggleOptions] = useState(false);
    const [toggleNotifications, setToggleNotifications] = useState(false);
    const handleClick = (event) => {
        setAnchorOptionMenu(event.currentTarget);
        setToggleOptions(true);
    };

    // TIMER BELL | TIMER BELL | TIMER BELL | TIMER BELL
    const [bell, setBell] = useState(true);
    useEffect(() => {
        const timer = true && setInterval(() => setBell(!bell), 1000);
        return function() {
            clearInterval(timer);
        }
    }, [bell]);

    return (
        <header className='app__header'>
            <nav className='app__nav'>
                <div className='app__nav--options'>
                    <div className='app__nav--notifications'>
                        <IconButton
                            onClick={() => setToggleNotifications(true)}
                        >
                            <Badge 
                                overlap={'rectangular'} 
                                badgeContent={12} 
                                color={'warning'}
                                className={`notification--alert ${bell && 'alert-poper'}`}
                            >
                                <AlertIcon className='bell-poper'/>
                            </Badge>
                        </IconButton>
                    </div>
                    <div className='app__nav--profile'>
                        <Avatar 
                            alt={user.name} 
                            src={user.profile}
                            className='app__nav--profile-photo'
                        />
                        <h3 className='app__nav--profile-name'>{user.name}</h3>
                        <IconButton
                            onClick={handleClick}
                            size={'small'}
                            sx={{ ml: 2 }}
                            aria-controls={toggleOptions ? 'account-menu' : undefined}
                            aria-haspopup={'true'}
                            aria-expanded={toggleOptions ? 'true' : undefined}
                            className={'profile__options'}
                        >
                            <OptionsIcon/>
                        </IconButton>
                        <Menu
                            anchorEl={anchorOptionMenu}
                            id={'account-menu'}
                            open={toggleOptions}
                            onClose={() => setToggleOptions(false)}
                            onClick={() => setToggleOptions(false)}
                            PaperProps={headerOptionsProps}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            className={'profile__options--menu'}
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <ProfileIcon/>
                                </ListItemIcon>
                                My account
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ProfileSettingsIcon />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <Divider className={'profile__options--divider'}/>
                            <MenuItem>
                                <ListItemIcon>
                                    <LogoutIcon/>
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </nav>
            {navPanel && <div className='preview__panel'>
                <div className='preview__panel--menubar'>
                    <div className='preview__panel--menu active-menu'>
                        Таможенное оформление
                    </div>
                    <div className='preview__panel--menu'>
                        Сертификация груза
                    </div>
                    <div className='preview__panel--menu'>
                        Определение кода ТНВ
                    </div>
                </div>
                <div className='preview__panel--options'>
                    Ещё <IconButton><ArrowDown/></IconButton>
                </div>
            </div>}
            {toggleNotifications && <ScrollDialog
                open={toggleNotifications}
                handleClose={() => setToggleNotifications(false)}
            />}
        </header>
    );
}

export default Header;