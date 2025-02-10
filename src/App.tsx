import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'

//lessons
import Lesson17 from 'lessons/Lesson17/Lesson17'
import Layout from 'pages/UsersApp/Layout/Layout'
import Home from 'pages/UsersApp/Home/Home'
import Users from 'pages/UsersApp/Users/Users'

// my tasks
import MyTasks from 'pages/MyTasks/MyTasks'
import MyTask_01 from 'pages/MyTasks/MyTask_01/MyTask_01'
import MyTask_02 from 'pages/MyTasks/MyTask_02/MyTask_02'
import Homework17 from 'components/homeworks/Homework17/Homework17'

//homeworks

//consultations

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Lesson17 /> */}
      {/* UserApp - Practice - Lesson17 */}
      <Layout>
        <Routes>
          <Route path='/tasks' element={<MyTasks/>}>
            <Route path='task_01' element={<MyTask_01/>}/>
            <Route path='task_02' element={<MyTask_02/>}/>
          </Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/lesson17' element={<Lesson17/>}/>
          <Route path='/homework17' element={<Homework17/>}/>
          <Route path='*' element='Page not found'/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
