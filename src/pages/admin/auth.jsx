import React, { useState } from 'react';
import useInputState from '../../hooks/useInputState';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import {
    EmailOutlined as EmailIcon,
    LockOutlined as LockIcon
} from '@mui/icons-material';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';

export default function AdminAuth() {
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [email, setEmail, resetEmail] = useInputState('');
    const [password, setPassword, resetPassword] = useInputState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        email ? setValidEmail(true) : setValidEmail(false);
        password ? setValidPassword(true) : setValidPassword(false);
        if (email && password) {
            resetEmail();
            resetPassword();
            navigate('/dashboard/read-requests');
        }
    }

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className='auth auth-admin'>
            <div className='auth__sidebar'>
                <div className='form-container'>
                    <div className='form-container__logo'>
                        <div className='form-container__logo--sample'/>
                    </div>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <form   
                                className='form-container__body margin-side-2'
                                onSubmit={handleSubmit}
                            >
                                <h3>Вход</h3>
                                <div className={`form-container__input`}>
                                    <h4 className='text-disabled'>Ваш логин</h4>
                                    <div className={`form-container__input--field ${!validEmail && 'error'}`}>
                                        <TextField 
                                            type={'login'}
                                            placeholder={'Ввудите логин...'}
                                            variant={'outlined'}
                                            name={'login'}
                                            className={'text-field-input'}
                                            value={email}
                                            onChange={setEmail}
                                        />
                                        <EmailIcon/>
                                    </div>
                                </div>
                                <div className='form-container__input'>
                                    <h4 className='text-disabled'>Паролъ</h4>
                                    <div className={`form-container__input--field ${!validPassword && 'error'}`}>
                                        <TextField 
                                            error={validPassword}
                                            type={'password'}
                                            placeholder={'Ведите свой паролъ...'}
                                            variant={'outlined'}
                                            name={'password'}
                                            className={'text-field-input'}
                                            value={password}
                                            onChange={setPassword}
                                        />
                                        <LockIcon/>
                                    </div>
                                </div>
                                <div className='auth__type'>
                                    <Button className='form-container__button padding-height' type='submit'>
                                        Войты
                                    </Button>
                                    <h4 
                                        className='subtitle text-center text-blue margin-top-1'
                                        onClick={() => handleChangeIndex(1)}
                                    >Fotgot Password?</h4>
                                </div>
                            </form>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <form   
                                className='form-container__body margin-side-2'
                                onSubmit={handleSubmit}
                            >
                                <h3>Reset Password</h3>
                                <div className={`form-container__input`}>
                                    <h4 className='text-disabled'>Your Email Address</h4>
                                    <div className={`form-container__input--field ${!validEmail && 'error'}`}>
                                        <TextField 
                                            type={'login'}
                                            placeholder={'Ввудите логин...'}
                                            variant={'outlined'}
                                            name={'login'}
                                            className={'text-field-input'}
                                            value={email}
                                            onChange={setEmail}
                                        />
                                        <EmailIcon/>
                                    </div>
                                </div>
                                <div className='auth__type'>
                                    <Button className='form-container__button padding-height' type='submit'>
                                        Reset Password
                                    </Button>
                                    <h4 
                                        className='subtitle text-center text-blue margin-top-1'
                                        onClick={() => handleChangeIndex(0)}
                                    >Go Back</h4>
                                </div>
                            </form>
                        </TabPanel>
                    </SwipeableViews>
                </div>
            </div>
        </div>
    );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};