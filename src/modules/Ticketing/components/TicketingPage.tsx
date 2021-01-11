import React from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import "./Ticketing.scss";
import { ITicketingProps } from "../model/ITicketingProps";
import { CustomizedSteppers } from "./Stepper";
import { LoadingCustom } from "../../../components";

interface IProps extends RouteComponentProps, ITicketingProps {}

const TicketingPage: React.FC<IProps> = props => {
    const [loading, setLoading] = React.useState(true);

    const { currentSession } = props.store.DetailPage;
    const history = useHistory();

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
        if(loading) {
            window.scrollTo(0, 0);
        }
        if (currentSession === null) {
            history.push("/");
        }
    },[]);
    return (
        <React.Fragment>
            <LoadingCustom spinning={loading} opacity={1} />
            {currentSession && (
                <>
                    <div className="wrapper-ticketing-page">
                        <CustomizedSteppers {...props} />
                    </div>
                </>
            )}
        </React.Fragment>
    );
};

export default TicketingPage;
