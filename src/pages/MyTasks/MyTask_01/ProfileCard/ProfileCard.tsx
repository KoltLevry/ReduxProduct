import { ProfileCardWrapper } from "./styles";
import { ProfileCardProps } from "./types";

function ProfileCard( {userName="Non", userAge=34, job}: ProfileCardProps) {
    return(
        <ProfileCardWrapper>
            <p>
                <strong>Користувач:</strong> {userName}
                <strong>, Вік:</strong> {userAge}
                {job && <><strong>, Job:</strong> {job}</>}
            </p>
        </ProfileCardWrapper>
    )
}

export default ProfileCard;