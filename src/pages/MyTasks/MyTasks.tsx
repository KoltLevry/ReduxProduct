import { Outlet, useNavigate } from 'react-router-dom'; 
import {MyTasksWrapper, SideBar, MainPage, TaskBox} from './styles';

function MyTasks() {

    // const navigate = useNavigate();

    return(
        <MyTasksWrapper>
            <SideBar>
                <TaskBox to='task_01'>MyTask_01</TaskBox>
                <TaskBox to='task_02'>MyTask_02</TaskBox>
                <TaskBox to='lesson17'>Lesson 17</TaskBox>
                <TaskBox to='lesson18'>Lesson 18</TaskBox>
            </SideBar>
            {/* Outlet - Це місце, де будуть відображатися дочірні компоненти */}
            <MainPage><Outlet /></MainPage>
        </MyTasksWrapper>
    );
}

export default MyTasks;