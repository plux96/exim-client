import { useContext } from 'react';
import { DashboardContext, DashboardDispatch } from '../contexts/DashboardContext';
import SwipeablePanel from '../partials/swipeablePanel';
import PanelActionControllers from '../partials/panelActionControllers';
import ViewRequest from '../pages/admin/dashboard/requests/viewRequest';
import TransitionUp from '../props/transitionUpProps';
import { IconButton, Dialog, AppBar, Toolbar } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { Close as CloseIcon } from '@mui/icons-material';

export default function FullScreenDialog() {
    const theme = useTheme();
    const { modal } = useContext(DashboardContext);
    const dispatch = useContext(DashboardDispatch); 
    const handleCloseModal = () => dispatch({ type: "RESET_MODAL" });

    const changePanelIndex = (newIndex) => dispatch({ type: "OPEN_FULL_MODAL", index: newIndex });

    return (
        <Dialog
            fullScreen
            open={modal.open}
            TransitionComponent={TransitionUp}
            className='request-drawer'
        >
            <AppBar className='request-drawer__navbar'>
                <Toolbar className='request-drawer__toolbar'>
                    <h4 className='request-drawer__navbar--title'>Заявка №1827841</h4>
                    <IconButton 
                        className='request-drawer__navbar--close'
                        onClick={handleCloseModal}
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {modal.index !== false && <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={modal.index}
                onChangeIndex={changePanelIndex}
            >
                <SwipeablePanel value={modal.index} index={0} dir={theme.direction}>
                    Item One
                </SwipeablePanel>
                <SwipeablePanel value={modal.index} index={1} dir={theme.direction}>
                    <ViewRequest/>
                </SwipeablePanel>
                <SwipeablePanel value={modal.index} index={2} dir={theme.direction}>
                    Item Three
                </SwipeablePanel>
            </SwipeableViews>}
            <AppBar className='request-drawer__bottom-bar'>
                <Toolbar className='request-drawer__actions'>
                    <PanelActionControllers
                        actionIndexChange={changePanelIndex}
                        index={modal.index}
                        handleCloseModal={handleCloseModal}
                    />
                </Toolbar>
            </AppBar>
        </Dialog>
    );
}