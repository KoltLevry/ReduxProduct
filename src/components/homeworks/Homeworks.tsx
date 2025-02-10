import { Outlet } from "react-router-dom";
import { MainPage, MyTasksWrapper, SideBar, TaskBox } from "./styles";

function Homeworks() {
//   const [homeworks, setHomeworks] = useState<Homework[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchHomeworks = async () => {
//       const homeworks = await getHomeworks();
//       setHomeworks(homeworks);
//       setLoading(false);
//     };

//     fetchHomeworks();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

  return (
    // <div>
    //   {homeworks.map((homework) => (
    //     <div key={homework.id}>{homework.title}</div>
    //   ))}
    // </div>
    <MyTasksWrapper>
        <SideBar>
            <TaskBox to="homework17">Homework 17</TaskBox>
            <TaskBox to="homework18">Homework 18</TaskBox>
        </SideBar>
        <MainPage>
            <Outlet />
        </MainPage>
    </MyTasksWrapper>
  );
}
export default Homeworks;