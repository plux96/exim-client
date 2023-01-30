import React from 'react';
import RequestApplication from '../../../../components/requestApplication';
import RequestDrawer from '../../../../components/requestDrawer';

export default function Requests() {
    console.log('🇺🇸 Requests is working as PARENT!');
    const applications = [{ step: 1 }, { step: 2 }, { step: 3 }, { step: 4 }, { step: 5 }, { step: 6 }, { step: 7 }, { step: 8 }, { step: 9 }, { step: 0 }];



    return (
        <div className='requests'>                    
            <div className='requests__header'>
                <h3 className='requests__header--title'>Заявки на рассмотрении</h3>
            </div>
            {applications.map((application, index) => (
                <RequestApplication response={application} key={index}/>
            ))}
            <div className='requests__drawer'>
                <RequestDrawer/>
            </div>
        </div>
    );
}