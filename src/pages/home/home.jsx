import React from 'react';
import Footer from '../../layouts/footer';
import { IconButton, Button } from '@mui/material';
import {
    SettingsPhone as CallPhoneIcon
} from '@mui/icons-material';

export default function Home() {
    return (
        <div className='home'>
            <header className='header-nav'>
                <div className='header-nav__appbar'>
                    <div className='header-nav__appbar--right'>
                        <div className='appbar__logo'/>
                        <h3 className='appbar__title'>
                            Автоматизированная интерактивная СИСТЕМА 
                            ‟<span className='appbar__title--name'>
                                ОПТИМИЗАЦИЯ РЕСУРСНОГО ПЛАНИРОВАНИЯ ВЭД
                            </span>”
                        </h3>
                    </div>
                    <div className='header-nav__appbar--left'>
                        <div className='appbar__contacts'>
                            <IconButton className='appbar__contacts--icon'>
                                <CallPhoneIcon/>
                            </IconButton>
                            <div className='appbar__contacts--details'>
                                <h5>У вас есть вопрос?</h5>
                                <h4>+998 (55) 506 45 54</h4>
                            </div>
                        </div>
                        <div className='appbar__auth'>
                            <Button>
                                Вход/Регистрация
                            </Button>
                        </div>
                    </div>
                </div>
                <nav className='header-nav__navbar'>
                    <ul className='header-nav__navbar--navlink'>
                        <li className='navlink--item'>Новости</li>
                        <li className='navlink--item'>Контакты</li>
                        <li className='navlink--item'>Ресурсы</li>
                        <li className='navlink--item'>Партнёры</li>
                        <li className='navlink--item'>О нас</li>
                        <li className='navlink--item'>FAQ</li>
                    </ul>
                </nav>
            </header>
            <main className='home__section'>
                <div className='home__section--intro'>
                    <div className='section__intro'>
                        <h3>EximERP</h3>
                        <p>
                            Вывести уровень цифровизации процессов внешнеэкономической деятельности 
                            Республики Узбекистан на общемировой стандарт
                        </p>
                        <div className='section__intro--details'>
                            <Button>
                                Есть вопросы?
                            </Button>
                            <Button className='outline'>
                                Связаться с нами
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='home__section--partners'>
                    <h3>Наши партнёры</h3>
                    <div className='partners'>
                        <div className='partners--logo one'/>
                        <div className='partners--logo two'/>
                        <div className='partners--logo three'>
                            <img/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
        </div>
    );
}