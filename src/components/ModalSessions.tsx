import React, {FC, PropsWithChildren} from 'react';

import {ISession} from "../interfaces/session.interface";
import {ModalSession} from "./ModalSession";

interface IProps extends PropsWithChildren {
    data: ISession[];
}
const ModalSessions:FC<IProps> = ({data}) => {

    return (
        <div>
            {data &&
                <div className="max-h-[550px] overflow-auto flex flex-col gap-6">
                    {data.map(session => <ModalSession key={session.Source} session={session}/>)}
                                                  
                </div>
            }
        </div>
    );
};

export {ModalSessions};
