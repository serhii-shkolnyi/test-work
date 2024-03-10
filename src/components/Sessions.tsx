import React, {FC, PropsWithChildren, useState} from 'react';

import {ISession} from "../interfaces/session.interface";
import {Session} from "./Session";
import {Modal} from "./Modal";
import {SelectsMenu} from "./SelectsMenu";

interface IProps extends PropsWithChildren {
    data: ISession[];
}

const Sessions: FC<IProps> = ({data}) => {
    const [givenSession, setGivenSession] = useState<ISession>();
    const [checked, setChecked] = useState<boolean>(false);
    const [modalActive, setModalActive] = useState<boolean>(true);

    const foundSession = (session: ISession): void => {
        setGivenSession(session);
    }

    return (

        <div className="w-full flex flex-row justify-between gap-x-9">
            <Modal active={modalActive} setActive={setModalActive} data={data}/>
            <div className="w-[927px]">
                <div className="flex flex-row justify-between pb-12">
                    <div>
                        <h2 className="text-[32px] font-bold">Session</h2>
                        {
                            givenSession &&
                            <div className=" flex flex-row gap-x-6 text-[14px]">
                                <div>{givenSession?.Source}</div>
                                <div>{givenSession?.Data}</div>
                                <div><span className="font-bold">Baseline:</span> {givenSession?.Bandwidth} KHz</div>
                                <div><span className="font-bold">Frequency:</span> {givenSession?.Frequency} MHz</div>

                            </div>
                        }
                    </div>
                    <div onClick={() => setModalActive(false)}
                        className=" mt-3.5 h-10 py-2 px-3.5 flex flex-row gap-x-2 text-myColorDarkBlue font-bold text-[13px] rounded-md border border-myColorDarkBlue cursor-pointer hover:bg-myColorDarkBlue hover:text-white hover:fill-white">
                        <span>+ Add Data</span>
                    </div>
                </div>

                <SelectsMenu/>

                {data &&
                    <div className="max-h-[600px] overflow-auto flex flex-col gap-6">
                        {data.map(session => <Session key={session.Source} session={session}
                                                      foundSession={foundSession}/>)}
                    </div>
                }
            </div>
            <div className="w-[1px] h-[681px] bg-myColorGrey"></div>
            <div className="w-[241px] flex flex-col gap-y-12">
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-[32px] font-bold">Clusters</h2>
                        <span className="h-7 bg-myColorGrey py-1 px-2.5 rounded-full font-bold text-sm">2</span>
                    </div>
                    <div className=" border border-myColorGrey rounded-[10px] p-5 flex flex-col gap-y-4">
                        <div
                            className="text-[10px] bg-myColorLightGreen py-1 px-2.5 rounded-full max-w-[85px] font-medium">
                            Label cluster
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row items-center gap-x-2">
                                <h2 className="text-base">Radio Signals</h2>
                                <span
                                    className="h-7 bg-myColorGrey py-1 px-2.5 rounded-full font-bold text-sm">24</span>
                            </div>
                            <div className="text-[#BDBDBD]">
                                {'>'}
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <div>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="inherit"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.3335 3.66659H7.66683V4.99992H6.3335V3.66659ZM7.00016 10.3333C7.36683 10.3333 7.66683 10.0333 7.66683 9.66659V6.99992C7.66683 6.63325 7.36683 6.33325 7.00016 6.33325C6.6335 6.33325 6.3335 6.63325 6.3335 6.99992V9.66659C6.3335 10.0333 6.6335 10.3333 7.00016 10.3333ZM7.00016 0.333252C3.32016 0.333252 0.333496 3.31992 0.333496 6.99992C0.333496 10.6799 3.32016 13.6666 7.00016 13.6666C10.6802 13.6666 13.6668 10.6799 13.6668 6.99992C13.6668 3.31992 10.6802 0.333252 7.00016 0.333252ZM7.00016 12.3333C4.06016 12.3333 1.66683 9.93992 1.66683 6.99992C1.66683 4.05992 4.06016 1.66659 7.00016 1.66659C9.94016 1.66659 12.3335 4.05992 12.3335 6.99992C12.3335 9.93992 9.94016 12.3333 7.00016 12.3333Z"/>
                                </svg>
                            </div>
                            <div className="text-xs ">Add <b>4</b> more signals to enable automatic classification</div>
                        </div>
                    </div>
                    <div className=" border border-myColorGrey rounded-[10px] p-5 flex flex-col gap-y-4">
                        <div
                            className="text-[10px] bg-myColorLightRoze py-1 px-2.5 rounded-full max-w-[85px] font-medium">
                            Label cluster
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row items-center gap-x-2">
                                <h2 className="text-base">Bluetooth Signals</h2>
                                <span
                                    className="h-7 bg-myColorGrey py-1 px-2.5 rounded-full font-bold text-sm">24</span>
                            </div>
                            <div className="text-[#BDBDBD]">
                                {'>'}
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 text-[12px]">
                            <div className="flex flex-row justify-between items-center">

                                <div>Auto Clarification: <b> {checked ? "ON" : "OFF"}</b></div>

                                <div>
                                    <input
                                        className="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[#59C28E]/90 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-b after:bg-white after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-b checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-b checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
                                        type="checkbox"
                                        role="switch"
                                        checked={checked} onChange={() => setChecked(!checked)}
                                        id="flexSwitchCheckDefault"/>
                                </div>
                            </div>
                            <div>
                                10 signals auto-classified
                            </div>
                            <b><a href="/#">Confirm to improve accuracy </a></b>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row justify-between items-center ">
                        <h2 className="text-[32px] font-bold">Ignored</h2>
                        <span className="text-[24px] font-bold rotate-[-90deg]">{'>'}</span>
                    </div>
                    <div className=" border border-myColorGrey rounded-[10px] p-5 flex flex-col gap-y-4">
                        <div
                            className="text-[10px] bg-myColorLightGreen py-1 px-2.5 rounded-full max-w-[85px] font-medium">
                            Label cluster
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row items-center gap-x-2">
                                <h2 className="text-base">Ignored Signals</h2>
                                <span
                                    className="h-7 bg-myColorGrey py-1 px-2.5 rounded-full font-bold text-sm">24</span>
                            </div>
                            <div className="text-[#BDBDBD]">
                                {'>'}
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <div>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="inherit"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.3335 3.66659H7.66683V4.99992H6.3335V3.66659ZM7.00016 10.3333C7.36683 10.3333 7.66683 10.0333 7.66683 9.66659V6.99992C7.66683 6.63325 7.36683 6.33325 7.00016 6.33325C6.6335 6.33325 6.3335 6.63325 6.3335 6.99992V9.66659C6.3335 10.0333 6.6335 10.3333 7.00016 10.3333ZM7.00016 0.333252C3.32016 0.333252 0.333496 3.31992 0.333496 6.99992C0.333496 10.6799 3.32016 13.6666 7.00016 13.6666C10.6802 13.6666 13.6668 10.6799 13.6668 6.99992C13.6668 3.31992 10.6802 0.333252 7.00016 0.333252ZM7.00016 12.3333C4.06016 12.3333 1.66683 9.93992 1.66683 6.99992C1.66683 4.05992 4.06016 1.66659 7.00016 1.66659C9.94016 1.66659 12.3335 4.05992 12.3335 6.99992C12.3335 9.93992 9.94016 12.3333 7.00016 12.3333Z"/>
                                </svg>
                            </div>
                            <div className="text-xs ">Add <b>4</b> more signals to enable automatic classification</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Sessions};