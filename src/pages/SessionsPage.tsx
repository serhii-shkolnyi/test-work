import React, {FC} from 'react';

import {Sessions} from "../components";
import {ISession} from "../interfaces/session.interface";

export const sessions: ISession[] = [
    {
        Frequency: 1.462,
        Bandwidth: 71.5,
        Digital: 1,
        Analog: 12,
        Modulation: 11,
        Source: "Sensor 1-d",
        Data: "2/17/2024 8:40:44 AM"
    },
    {
        Frequency: 1.752,
        Bandwidth: 61.5,
        Digital: 30,
        Analog: 52,
        Modulation: 11,
        Source: "Sensor 2-d",
        Data: "2/17/2024 8:40:44 AM"
    },
    {
        Frequency: 2.462,
        Bandwidth: 51.5,
        Digital: 50,
        Analog: 72,
        Modulation: 11,
        Source: "Sensor 3-d",
        Data: "2/17/2024 8:40:44 AM"
    },
    {
        Frequency: 2.462,
        Bandwidth: 51.5,
        Digital: 50,
        Analog: 72,
        Modulation: 11,
        Source: "Sensor 4-d",
        Data: "2/17/2024 8:40:44 AM"
    },
    {
        Frequency: 2.462,
        Bandwidth: 51.5,
        Digital: 50,
        Analog: 72,
        Modulation: 11,
        Source: "Sensor 5-d",
        Data: "2/17/2024 8:40:44 AM"
    },
]
const SessionsPage: FC = () => {



    return (
        <div className="h-full">
            <Sessions data={sessions}/>
        </div>
    );
};

export {SessionsPage};