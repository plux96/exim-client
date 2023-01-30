import { IconButton, TextField } from '@mui/material';
import DownloadIcon from '@mui/icons-material/CloudDownload';

export default function ViewRequests() {
    console.log('• viewRequests.jsx is working 📑');
    return (
        <div className='request-drawer__content'>
            <div className='request-drawer__content--form-container'>
                <div className='form-container'>
                    <h4 className='form-container__label text-disabled'>Процедура</h4>
                    <h2 className='form-container__value'>Импорт</h2>
                </div>
                <div className='form-container'>
                    <h4 className='form-container__label text-disabled'>Режим</h4>
                    <h2 className='form-container__value'>Реимпорт</h2>
                </div>
                <FormDownload
                label={'Транспортная накладная ( TIR, CMR, жд, накладная, авиа накладная, коносамент и т.д )'}
                name={'example.pdf'}
                /> 
            </div>
            <div className='request-drawer__content--form-container'>
                <FormDownload
                    label={'Инвойс'}
                    name={'invoice.pdf'}
                /> 
                <FormDownload
                    label={'Упаковочный лист'}
                    name={'packageList.pdf'}
                /> 
                <FormDownload
                    label={'Контракт'}
                    name={'contracts.pdf'}
                /> 
            </div>
            <div className='request-drawer__content--form-container'>
                <FormDownload
                    label={'Сертификат происхождения'}
                    name={'certification.pdf'}
                />
                <FormDownload
                    label={'Дополнительная документация'}
                    name={'documents.pdf'}
                /> 
                <FormDownload
                    label={'Список товаров'}
                    name={'certification.trucks.jpg'}
                /> 
            </div>
            <div className='request-drawer__content--form-container'>
                <div className='form-container'>
                    <h4 className='form-container__label text-disabled'>Сертификация груза</h4>
                    <h2 className='form-container__value'>Определение кодов ТНВЭД</h2>
                </div>
                <FormDownload
                    label={'Прочие документы'}
                    name={'documents.pdf'}
                />
            </div>
            <div className='request-drawer__content--form-container'>
                <div className='form-container w-100'>
                    <h4 className='form-container__label text-disabled'>
                        Выбранный пост таможни
                    </h4>
                    <h2 className='form-container__value'>
                        Узбекистан, Ташкент, Яшнабадск...   
                    </h2>
                </div>
            </div>
            <div className='request-drawer__content--form-container'>
                <div className='form-container w-100 no-border padding-bottom-5'>
                    <h4 className='form-container__label text-disabled'>
                        Комментарий к заявке от клиента
                    </h4>
                    <TextField
                        margin={'dense'}
                        id={'form-cancelation-textarea'}
                        label={'Введите причину отказа...'}
                        type={'text'}
                        fullWidth
                        multiline
                        rows={4}
                        variant={'filled'}
                        className={'form-container__input'}
                    />
                </div>
            </div>
        </div>
    );
}

function FormDownload({ label, name }) {
    return (
        <div className='form-container'>
            <h4 className='form-container__label text-disabled'>{label}</h4>
            <div className='form-container__details'>
                <h2 className='form-container__value'>{name}</h2>
                <IconButton>
                    <DownloadIcon/>
                </IconButton>
            </div>
        </div>
    )
}