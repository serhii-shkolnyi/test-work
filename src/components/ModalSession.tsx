import React, {FC, PropsWithChildren} from 'react';

import {ISession} from "../interfaces/session.interface";
import RangeGreen from "../assets/icon/range-green.svg";
import RangeOrange from "../assets/icon/range-orange.svg";
import Spectrogram from "../assets/images/spectogram.svg";

interface IProps extends PropsWithChildren {
    session: ISession;
}

const ModalSession: FC<IProps> = ({session}) => {
    return (
        <div>
            <div className="h-64 border border-myColorLightGrey rounded-xl p-5 hover:shadow-lg cursor-pointer">
                <div className="flex flex-row justify-between items-center pb-6 mb-4 border-b border-myColorGrey">
                    <div
                        className="font-bold text-lg flex flex-row justify-items-center gap-x-8 ">
                        <div className="flex flex-col justify-center">
                            {session.Frequency}<span className="text-xs font-normal m">MHz</span>
                        </div>
                        <div className="flex flex-col justify-center">
                            {session.Bandwidth}<span className="text-xs font-normal m">KHz</span>
                        </div>
                        <div className="flex flex-row gap-x-3.5 bg-myColorGrey py-2.5 px-4 rounded-lg">
                            <div className="flex flex-row justify-items-center justify-between gap-x-1">
                                <img src={RangeGreen} alt="range"/>
                                <div className="flex flex-col"> {session.Digital}%<span
                                    className="text-xs font-normal m">Digital</span></div>
                            </div>
                            <div className="flex flex-row justify-items-center justify-between gap-x-1">
                                <img src={RangeGreen} alt="range"/>
                                <div className="flex flex-col"> {session.Analog}%<span
                                    className="text-xs font-normal m">Analog</span></div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-items-center justify-between gap-x-1">
                            <img src={RangeOrange} alt="range"/>
                            <div className="flex flex-col justify-center"> {session.Analog}%<span
                                className="text-xs font-normal m">PM</span></div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div>{session.Source}</div>
                            <span className="text-xs font-normal m">{session.Data}</span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-x-3 h-full	">
                        <div
                            className="h-10 py-2 px-3.5 flex flex-row gap-x-2 text-myColorDarkBlue font-bold text-[13px] rounded-md border border-myColorDarkBlue cursor-pointer hover:bg-myColorDarkBlue hover:text-white hover:fill-white">
                            <span>Re-classify</span>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="mb-4 text-[16px] font-bold">Spectrogram</div>
                    <img src={Spectrogram} alt="spectogram"/>
                </div>
                <div className="font-bold text-sm flex flex-row justify-between justify-items-center">
                    <div>904MHz</div>
                    <div>914MHz</div>
                    <div>924MHz</div>
                </div>
            </div>
        </div>
    );
};

export {ModalSession};
