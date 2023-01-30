import { Fragment } from 'react';
import Button from '@mui/material/Button';
import {
    NavigateNext as RightIcon,
    NavigateBefore as LeftIcon
} from '@mui/icons-material';

export default function PanelActionControllers({ actionIndexChange, index, handleCloseModal}) {
    if (index === 0) return (
        <Fragment>
            <Button 
                className='app-button request-drawer__actions--button button-blue'
                onClick={handleCloseModal}
            >Отправить</Button>
            <Button 
                className='app-button request-drawer__actions--button'
                onClick={() => actionIndexChange(1)}
            >
                Вернуться к заявке 
                <RightIcon className='margin-left'/>
            </Button>
            <Button/>
        </Fragment>
    ); 
    else if (index === 1) return (
        <Fragment>
            <Button 
                className='app-button request-drawer__actions--button'
                onClick={() => actionIndexChange(0)}
            >
                <LeftIcon className='margin-right'/>
                Подготовка счёта на оплату
            </Button>
            <Button 
                className='app-button request-drawer__actions--button button-blue'
                onClick={handleCloseModal}
            >Отклонить</Button>
            <Button 
                className='app-button request-drawer__actions--button'
                onClick={() => actionIndexChange(2)}
            >
                На доработку 
                <RightIcon className='margin-left'/>
            </Button>
        </Fragment>
    );
    else if (index === 2) return (
        <Fragment>
            <Button/>
            <Button 
                className='app-button request-drawer__actions--button'
                onClick={() => actionIndexChange(1)}
            >
                <LeftIcon className='margin-right'/>
                Вернуться к заявке
            </Button>
            <Button 
                className='app-button request-drawer__actions--button button-blue'
                onClick={handleCloseModal}
            >Отправить</Button>
        </Fragment>
    );
}