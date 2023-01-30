import { useContext } from 'react';
import { AppViewDispatch } from '../../../contexts/AppViewContext';
import { SnackbarContext } from '../../../contexts/SnackbarContext';
import { useOutletContext } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { 
    KeyboardArrowLeftOutlined as ArrowLeftIcon,
    DownloadForOffline as DownloadIcon
} from '@mui/icons-material';

function DoneSubmit({ document }) {
    const [ user ] = useOutletContext();
    // const { application, status } = response;
    const dispatch = useContext(AppViewDispatch);
    const { handleCallToSnack } = useContext(SnackbarContext);

    const submitForm = (feedback) => {
        handleCallToSnack(false, "Your application has been canceled");
        dispatch({ type: "DRAWER_RESET" });
    }

    console.log('• DoneSubmit.jsx is working! ✅')
    return (
        <div className='viewsubmit'>
            <div className='viewsubmit__header'>
                <div className='viewsubmit__header--status'>
                    <h4>Заявка №345802</h4>
                    <p className='text-disabled subtitle margin-top'>от 15 октября 2022 г в. 16:56</p>
                </div>
                <div className='viewsubmit__header--options'>
                    <Button>Создать копию</Button>
                    <Button onClick={() => dispatch({ type: "DRAWER_RESET" })}>
                        <ArrowLeftIcon/>
                        К списку
                    </Button>
                </div>
            </div>
            <div className='viewsubmit__content display-block'>
                <div className='viewsubmit__content--list viewlist w-100'>
                    <div className='viewlist__status--header'>
                        <h4 className='circle--success'>Проверка документов</h4>
                        <div className='display-column-center'>
                            <h4>Ответственный: <span className='focus-blue'>Aleksandr Bradevsky</span></h4>
                            <h4 className='margin-top'>Контактная информация: <span className='text-disabled'>+1 1240 124 80 80</span></h4>
                        </div>
                    </div>
                    <div className='viewlist__status'>
                        <h4 className='viewlist__status--title'>Заявка №345802</h4>
                        <p className='text-disabled margin-top-small subtitle'>от 15 октября 2022 г в. 16:56</p>
                        <div className='viewlist__status--submits display-flex-between'>
                            <h4 className='viewlist__status--submits-name subtitle'>Выбор процедуры</h4>
                            <p className='text-disabled subtitle'>Import</p>
                        </div>
                        <div className='viewlist__status--submits display-flex-between'>
                            <h4 className='viewlist__status--submits-name subtitle'>Выбор режима</h4>
                            <p className='subtitle focus-blue'>Cargo Store [74]</p>
                        </div>
                        <div className='viewlist__status--submits display-flex-between'>
                            <h4 className='viewlist__status--submits-name subtitle'>
                            Транспортная накладная (TIR,CMR,жд,накладная,авиа накладная,коносамент и т.д)
                            </h4>
                            <p className='subtitle focus-blue'>example.jpg</p>
                        </div>
                        <div className='viewlist__status--submits display-flex-between'>
                            <h4 className='viewlist__status--submits-name subtitle'>Инвойс</h4>
                            <p className='subtitle focus-blue'>example.jpg</p>
                        </div>
                        <div className='viewlist__status--submits display-flex-between'>
                            <h4 className='viewlist__status--submits-name subtitle'>Упаковочный лист</h4>
                            <p className='subtitle focus-blue'>example.jpg</p>
                        </div>
                        <div className='viewlist__status--submits display-flex-between'>
                            <h4 className='viewlist__status--submits-name subtitle'>Контракт</h4>
                            <p className='subtitle focus-blue'>example.jpg</p>
                        </div>
                        <div className='viewlist__status--submits display-flex-between'>
                            <h4 className='viewlist__status--submits-name subtitle'>Сертефикат происхождения</h4>
                            <p className='subtitle focus-blue'>example.jpg</p>
                        </div>
                    </div>
                    <div className='viewlist__status margin-top-1'>
                        <h4 className='viewlist__status--title text-blue'>История</h4>
                        <div className='viewlist__status--submits display-flex-between'>
                            <h4 className='viewlist__status--submits-name subtitle'>Создана заявка</h4>
                            <p className='subtitle text-disabled'>29.12.2022 в 14:25</p>
                        </div>
                        <div className='viewlist__status--submits display-flex-between'>
                            <h4 className='viewlist__status--submits-name subtitle text-orange'>
                                Кем
                            </h4>
                            <p className='subtitle text-disabled focus-blue'>Павел Ломоносов</p>
                        </div>
                        <div className='viewlist__status--submits display-flex-between'>
                            <h4 className='viewlist__status--submits-name subtitle'>Заявка №321551</h4>
                            <p className='subtitle text-disabled w-50'>29 декабря 2022г. в 16:20</p>
                        </div>
                    </div>
                    <div className='viewlist__status margin-top-1'>
                        <h4 className='viewlist__status--title text-blue'>Готовый документ</h4>
                        <div className='viewlist__status--submits display-flex-between'>
                            <h4 className='viewlist__status--submits-name subtitle text-orange'>
                                Ваш готовый документ
                            </h4>
                            <Button className='app-button-success w-100'>
                                <DownloadIcon className='margin-side'/>
                                СКАЧАТЬ ДОКУМЕНТ
                            </Button>
                        </div>
                    </div>
                    <div className='viewlist__status margin-top-1'>
                        <h4 className='viewlist__status--title'>
                            Спасибо что выбрали нас, вы можете оставить свой отзыв
                        </h4>
                        <TextField
                            margin={'dense'}
                            id={'form-feedback-textarea'}
                            label={'Введите свой комментарий...'}
                            type={'text'}
                            fullWidth
                            multiline
                            rows={4}
                            variant={'filled'}
                            className={'form__textarea--success'}
                        />
                    </div>
                </div>
            </div>
            <div className='viewsubmit__form'>
                <Button 
                    className='viewsubmit__form--accept success'
                    onClick={submitForm}
                >
                    Отправить
                </Button>
            </div>
        </div>
    );
}
export default DoneSubmit;