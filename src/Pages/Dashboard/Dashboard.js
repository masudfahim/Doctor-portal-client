import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-dashboard" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl text-purple-500 '>Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="my-dashboard" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard/review'>My reviews</Link></li>
                    <li><Link to='/dashboard/histry'>My Histry</Link></li>
                    {admin && <li><Link to="/dashboard/users">All Users</Link></li>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;