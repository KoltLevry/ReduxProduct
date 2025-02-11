import { useAppDispatch, useAppSelector } from "store/hooks";
import { AdviceRandomizerContainer, AdvicesContainer, AppContainer, DeleteButton, ErrorMessage, GetAdviceButton, List, ListItem, MainTitle } from "./styleds";
import { adviceRandomizerActions, adviceRandomizerSelectors } from "store/redux/adviceRandomizer/adviceRandomizerSlice";
import { v4 } from "uuid";
import Spinner from "components/Spinner/Spinner";

function AdviceRandomizer() {

    const {data, error, status} = useAppSelector(adviceRandomizerSelectors.adviceData)
    const dispatch = useAppDispatch();

    const advices = data.map((advice) => {
        return <ListItem key={v4()}>{advice}</ListItem>
    });

    const getAdvice = () => {
        dispatch(adviceRandomizerActions.getAdvice())
    }

    const deleteAdvices = () => {
        dispatch(adviceRandomizerActions.deleteAdvices())
    }

    return(
        <>
        <AdviceRandomizerContainer>
            <MainTitle>Advice Randomizer</MainTitle>
            <AppContainer>
                <GetAdviceButton onClick={getAdvice}>Get Advice</GetAdviceButton>
                <AdvicesContainer>
                    <List>
                        {advices}
                    </List>
                    {status === 'loading' && <Spinner />} 
                </AdvicesContainer>
                {data.length > 0 && 
                 <DeleteButton onClick={deleteAdvices}>Delete All Advices</DeleteButton>
                }   
                {error && <ErrorMessage>Error: {error}</ErrorMessage>}
            </AppContainer>
        </AdviceRandomizerContainer>
        </>
    );
}

export default AdviceRandomizer;