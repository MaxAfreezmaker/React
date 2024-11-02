import FlexContainer from "../components/FlexContainer";
import ProfileCard from "../components/ProfileCard";
import data from '../data/data'

function LayoutPage(){
    return(
        <FlexContainer element={ProfileCard} data={data}>

        </FlexContainer>
    );
}
export default LayoutPage;