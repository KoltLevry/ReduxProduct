import PhoneComponent from './PhoneComponent/PhoneComponent';
import ProfileCard from './ProfileCard/ProfileCard';
import PropsCard from './PropsCard/PropsCard';
import {PropsCardWrapper, TaskWrapper} from './styles';

function MyTask_01() {
    return(
        <>
            <TaskWrapper>
                <div>
                    <h1>Hi Objects!</h1>
                    <PhoneComponent />
                </div>
                <div>
                    <h1>Hi Props!</h1>
                    <PropsCardWrapper>
                        <PropsCard title={"HI Title!"} />
                        <PropsCard title={"HI Both!"}  description={"welcome"} />
                        <PropsCard description={"only description"} />
                    </PropsCardWrapper>
                </div>
                <div>
                    <h1>Hi Props!</h1>
                    <PropsCardWrapper>
                        <ProfileCard userName={'Dave'}  />
                        <ProfileCard userName={'Mandy'} userAge={25}  />
                        <ProfileCard userName={'undefined'} />
                        <ProfileCard userName={'Tom'} job={"+"} />
                        <ProfileCard userName={'JJ'} userAge={22} job={"-"} />
                    </PropsCardWrapper>
                </div>
            </TaskWrapper>
        </>
    );
}

export default MyTask_01;