import { memo } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { getAdmin } from '../../../actions/appActions';
import Drawer from '../../../components/drawer';
import Header from '../../../components/header';
import dashboardMenuItems from '../../../utils/dashboardMenuItems';

export async function loader() {
    const admin = await getAdmin();
    return { admin };
}

function Dashboard() {
    const { admin } = useLoaderData();

    return (
        <div className='app__view'>
            <Drawer
                to={false}
                parent={'dashboard'}
                menuItems={dashboardMenuItems} 
            />
            <Header user={admin} navPanel/>
            <main className='app__view--main'>
                <Outlet context={[admin]}/>
            </main>
        </div>
    );
}

export default memo(Dashboard);