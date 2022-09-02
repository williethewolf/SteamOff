import { Helmet } from "react-helmet";

const Head = (props) => {
    return(
        <Helmet>
            <title> {props.title} | STEAM© Off</title>
        </Helmet>
    )
}

export default Head