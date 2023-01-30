import { useEffect, useState, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppViewDispatch } from '../../../contexts/AppViewContext';
import ViewSubmit from './viewSubmit';
import NotiDialog from '../../../miniComponents/notificationDialog';
import SelectBase from '../../../miniComponents/selectBase';
import Upload from '../../../miniComponents/upload';
import Choice from '../../../miniComponents/choice';
import { Button, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/CloudDownload';

function NewSubmit() {
    //eslint-disable-next-line
    const [newDocument, setNewDocument] = useState({ });
    const [submitState, setSubmitState] = useState({});
    const [notiDialog, setNotiDialog] = useState(false);
    const dispatch = useContext(AppViewDispatch);

    const optionStateChange = (optionState, newStateVal) => {
        dispatch({ type: "OPEN_FORMS" });
        submitState[optionState] = newStateVal;
        setSubmitState(submitState);
    }

    const submitApplication = () => setNotiDialog(true);
    const handleCloseApplication = () => {
        setNotiDialog(false);
        dispatch({ type: "DRAWER_RESET" });
    }

    const handleRedirectApplication = (document) => {
        dispatch({ type: "DRAWER_OPEN_FULL", content: <ViewSubmit document={document}/> })
    }

    useEffect(() => { console.log("submitState: ", submitState)}, [submitState]); 

    console.log('• NewSubmit is working 🆕');
    return (
        <Fragment>
            {notiDialog && <NotiDialog 
                open={notiDialog}
                optionChange={{
                    close: handleCloseApplication,
                    redirect: () => handleRedirectApplication(newDocument)
                }}
            />}
            <div>
                <h3>Добавление заявки</h3>
                <div className='form margin-top-1'>
                    <h4 className='subtitle'>Название заявки</h4>
                    <input 
                        placeholder='Введите название вашей заявки...'
                        className='form__input margin-top'
                    />
                </div>
                <SelectBase
                    label={'Выбор режима'}
                    variants={[
                        'Реэкспорт',
                        'Временный ввоз',
                        'Выпуск для свободного обращения',
                        'Экспорт',
                    ]}
                    optionChange={{
                        change: optionStateChange,
                        stateVal: 'mode'
                    }}
                />
                <Upload
                    label={'Транспортная накладная (TIR,CMR,жд,накладная,авиа накладная,коносамент и т.д'}
                    progress={100}
                    fileName={'CertificationOfTruck.jpeg'}
                    optionChange={{
                        change: optionStateChange,
                        stateVal: 'billOfLading'
                    }}
                />
                <Upload 
                    label={'Инвойс'}
                    optionChange={{
                        change: optionStateChange,
                        stateVal: 'invoice'
                    }}
                />
                <Upload 
                    label={'Упаковочный лист'}
                    optionChange={{
                        change: optionStateChange,
                        stateVal: 'packingList'
                    }}
                />
                <Upload 
                    label={'Конракт'}
                    optionChange={{
                        change: optionStateChange,
                        stateVal: 'contract'
                    }}
                />
                <Upload 
                    label={'Сертефикат происхождения'}
                    optionChange={{
                        change: optionStateChange,
                        stateVal: 'certificateOfOrigin'
                    }}
                />
                <Upload 
                    label={'Дополнительная документация'}
                    optionChange={{
                        change: optionStateChange,
                        stateVal: 'additionalDocuments'
                    }}
                />
                <Upload 
                    label={'Список товаров'}
                    optionChange={{
                        change: optionStateChange,
                        stateVal: 'productPhotos'
                    }}
                />
                <SelectBase
                    label={'Выберите таможенный пост'}
                    variants={[
                        'Uzbkistan',
                        'Kazakhstan',
                        'Turkey',
                        'Azarbaijan',
                    ]}
                    defaultVariant={'Azarbaijan'}
                    optionChange={{
                        change: optionStateChange,
                        stateVal: 'mode'
                    }}
                />
                <Link className='display-flex text-link height-40 hover-blue margin-top w-100'>
                    <IconButton className='text-blue'>
                        <DownloadIcon/>
                    </IconButton> 
                    <h4 className='text text-blue'>
                        Скачать шаблон для правильной загрузки списка товаров
                    </h4>
                </Link>
                <h4 className='subtitle padding-height-1'>Дополнительная услуги</h4>
                <Choice 
                    defaultChecked
                    text={'Определение кодов ТНВЭД'}
                    optionChange={{
                        change: optionStateChange,
                        stateVal: 'codes'
                    }}
                />
                <Choice 
                    text={'Получение сертификатов'}
                    optionChange={{
                        change: optionStateChange,
                        stateVal: 'contracts'
                    }}
                />
                <Upload 
                    label={'Прочие документы'}
                    optionChange={{
                        change: optionStateChange,
                        stateVal:  'otherDocuments'
                    }}
                />
                <div className='form'>
                    <h4 className='subtitle padding-top'>Комментарий к заявке</h4>
                    <textarea 
                        placeholder='Введите комментарий...'
                        className='form__textarea--input'
                    />
                </div>
                <Button 
                    className='app-button app-button--warning padding-height'
                    onClick={submitApplication}
                >Подать заявку</Button>
            </div>
        </Fragment>
    );
}
export default NewSubmit;

/* 

режима,
коносамент,
Инвойс,
Упаковочный лист,
Конракт,
Сертефикат происхождения,
Дополнительная документация,
Фотографии товаров,
Определение кодов,
Составление договора,
Прочие документы,
Введите комментарий


mode,
bill of lading,
invoice,
Packing list,
contract,
certificate of origin,
Additional Documentation,
Product photos,
Definition of codes,
Preparation of contract,
Other documents
Enter a comment

*/