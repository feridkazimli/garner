import FormSide from "./FormSide"
import ImageSide from "./ImageSide"
import CustomForms from "../../Components/Blocks/CustomForms"

export default function SignUp() {
    return <CustomForms text='Sign up' leftSide={< FormSide />} rightSide={< ImageSide />} />
}


