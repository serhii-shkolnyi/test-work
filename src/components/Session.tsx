import React, {FC, PropsWithChildren} from 'react';

import {ISession} from "../interfaces/session.interface";
import Spectrogram from "../assets/images/spectogram.svg";
import RangeGreen from "../assets/icon/range-green.svg";
import RangeOrange from "../assets/icon/range-orange.svg";

interface IProps extends PropsWithChildren {
    session: ISession;
    foundSession: (session:ISession)=>void;
}

const Session: FC<IProps> = ({session, foundSession }) => {
    return (
        <div className="h-64 border border-myColorLightGrey rounded-xl p-5 hover:shadow-lg cursor-pointer" onClick={()=>foundSession(session)}>
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
                        <span>Ignore</span>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="inherit"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.2528 5.44012L5.00282 10.6901C4.96215 10.7308 4.92988 10.779 4.90786 10.8321C4.88584 10.8852 4.87451 10.9422 4.87451 10.9997C4.87451 11.0571 4.88584 11.1141 4.90786 11.1672C4.92988 11.2203 4.96215 11.2686 5.00282 11.3092L10.2528 16.5592C10.314 16.6204 10.392 16.6622 10.4769 16.6791C10.5618 16.696 10.6498 16.6873 10.7298 16.6542C10.8098 16.621 10.8782 16.5649 10.9262 16.4929C10.9743 16.4209 10.9999 16.3362 10.9999 16.2497V14.0622H15.3749C15.6069 14.0622 15.8295 13.97 15.9936 13.8059C16.1577 13.6418 16.2499 13.4192 16.2499 13.1872V8.81216C16.2499 8.58009 16.1577 8.35753 15.9936 8.19344C15.8295 8.02934 15.6069 7.93716 15.3749 7.93716H10.9999V5.74966C10.9999 5.66308 10.9743 5.57842 10.9262 5.50641C10.8782 5.4344 10.8098 5.37827 10.7298 5.34513C10.6498 5.31199 10.5618 5.30333 10.4769 5.32024C10.392 5.33715 10.314 5.37887 10.2528 5.44012ZM10.1249 8.37466C10.1249 8.49069 10.1709 8.60197 10.253 8.68402C10.335 8.76606 10.4463 8.81216 10.5624 8.81216H15.3749V13.1872H10.5624C10.4463 13.1872 10.335 13.2332 10.253 13.3153C10.1709 13.3973 10.1249 13.5086 10.1249 13.6247V15.1936L5.93087 10.9997L10.1249 6.80567V8.37466Z"/>
                        </svg>
                    </div>
                    <div
                        className="h-10 py-2 px-3.5 flex flex-row gap-x-2 text-myColorDarkBlue font-bold text-[13px] rounded-md border border-myColorDarkBlue cursor-pointer hover:bg-myColorDarkBlue hover:text-white hover:fill-white">
                        <span>Add to Cluster</span>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="inherit"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.7472 5.44012L16.9972 10.6901C17.0379 10.7308 17.0701 10.779 17.0921 10.8321C17.1142 10.8852 17.1255 10.9422 17.1255 10.9997C17.1255 11.0571 17.1142 11.1141 17.0921 11.1672C17.0701 11.2203 17.0379 11.2686 16.9972 11.3092L11.7472 16.5592C11.686 16.6204 11.608 16.6622 11.5231 16.6791C11.4382 16.696 11.3502 16.6873 11.2702 16.6542C11.1902 16.621 11.1218 16.5649 11.0738 16.4929C11.0257 16.4209 11.0001 16.3362 11.0001 16.2497V14.0622H6.62514C6.39308 14.0622 6.17052 13.97 6.00643 13.8059C5.84233 13.6418 5.75014 13.4192 5.75014 13.1872V8.81216C5.75014 8.58009 5.84233 8.35753 6.00643 8.19344C6.17052 8.02934 6.39308 7.93716 6.62514 7.93716H11.0001V5.74966C11.0001 5.66308 11.0257 5.57842 11.0738 5.50641C11.1218 5.4344 11.1902 5.37827 11.2702 5.34513C11.3502 5.31199 11.4382 5.30333 11.5231 5.32024C11.608 5.33715 11.686 5.37887 11.7472 5.44012ZM11.8751 8.37466C11.8751 8.49069 11.8291 8.60197 11.747 8.68402C11.665 8.76606 11.5537 8.81216 11.4376 8.81216H6.62514V13.1872H11.4376C11.5537 13.1872 11.665 13.2332 11.747 13.3153C11.8291 13.3973 11.8751 13.5086 11.8751 13.6247V15.1936L16.0691 10.9997L11.8751 6.80567V8.37466Z"/>
                        </svg>
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
    );
};

export {Session};
