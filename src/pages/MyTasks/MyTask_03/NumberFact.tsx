import Spinner from "components/Spinner/Spinner";
import { BottomButtonDiv, DeleteAllFactsButton, DeleteButton, ErrorMessage, FactsContainer, GetFactButton, List, MyTask03Container, NumberFactContainer, ShuttleFacts, TopButtonDiv } from "./styles";

function NumberFact() {
    return (
        <>
         <NumberFactContainer>
            <TopButtonDiv>
                <GetFactButton onClick={() => {}}>Get Number Fact</GetFactButton>
                <button onClick={() => {}}>Filter</button>
            </TopButtonDiv>
            <div>
                <FactsContainer>
                    <List>
                       
                    </List>
                    {status === 'loading' && <Spinner />} 
                </FactsContainer>
                {/* {data.length > 0 && 
                 <DeleteButton onClick={()=>{}}>Delete All Advices</DeleteButton>
                }    */}
                {/* {error && <ErrorMessage>Error: {error}</ErrorMessage>} */}
            </div>
            <BottomButtonDiv>
                <DeleteAllFactsButton onClick={() => {}}>Delete all facts</DeleteAllFactsButton>
                <ShuttleFacts onClick={() => {}}>Shatle facts</ShuttleFacts>
            </BottomButtonDiv>
        </NumberFactContainer>
        </>
    )
}

export default NumberFact;
