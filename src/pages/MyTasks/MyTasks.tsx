import { Outlet, useNavigate } from 'react-router-dom'; 
import {MyTasksWrapper, SideBar, MainPage, TaskBox} from './styles';

function MyTasks() {

    // const navigate = useNavigate();

    return(
        <MyTasksWrapper>
            <SideBar>
                <TaskBox to='task_01'>MyTask_01</TaskBox>
                <TaskBox to='task_02'>MyTask_02 - todo list</TaskBox>
                <TaskBox to='lesson17'>Lesson 17 - counter</TaskBox>
                <TaskBox to='lesson18'>Lesson 18 - get jokes</TaskBox>
                <TaskBox to='task_03'>Number fact</TaskBox>
            </SideBar>
            {/* Outlet - Це місце, де будуть відображатися дочірні компоненти */}
            <MainPage><Outlet /></MainPage>
        </MyTasksWrapper>
    );
}

export default MyTasks;