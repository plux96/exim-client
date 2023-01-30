import { Outlet, useLoaderData } from 'react-router-dom';
import { getUser } from '../../actions/appActions';
import Drawer from '../../components/drawer';
import Header from '../../components/header';
import menuItems from '../../utils/menuItems';

export async function loader() {
    const user = await getUser();
    return { user };
}

function AppView() {
    const { user } = useLoaderData();
    return (
        <div className='app__view'>
            <Drawer
                parent={'app'}
                menuItems={menuItems} 
            />
            <Header user={user} navPanel/>
            <main className='app__view--main'>
                <Outlet context={[user]}/>
            </main>
        </div>
    );
}

export default AppView;