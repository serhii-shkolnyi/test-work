import React, {Dispatch, FC, PropsWithChildren, SetStateAction, useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';

import {SelectsMenu} from "./SelectsMenu";
import {ISession} from "../interfaces/session.interface";
import {ModalSessions} from "./ModalSessions";

interface IProps extends PropsWithChildren {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    data: ISession[];
}

const Modal: FC<IProps> = ({active, setActive, data}) => {
    const [checked, setChecked] = useState<boolean>(false);
    const notify = () => toast.success('Signal was confirmed');
    return (
        <div className={active? "h-screen w-screen bg-black/75 fixed top-0 left-0 z-10 flex justify-center items-center scale-0 ": "h-screen w-screen bg-black/75 fixed top-0 left-0 z-10 flex justify-center items-center scale-100 "}
             onClick={() => setActive(true)}>
            <div className="bg-white p-6 rounded-xl w-[975px] h-[816px] mt-20" onClick={event => event.stopPropagation()}>

                <div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-x-2">
                            <h2 className="text-[32px] font-bold">Bluetooth Signals</h2>
                            <span
                                className="h-7 bg-myColorGrey py-1 px-2.5 rounded-full font-bold text-sm">24</span>
                        </div>
                        <div className="font-bold cursor-pointer" onClick={() => setActive(true)}>
                            {'X'}
                        </div>
                    </div>
                    <div className="flex flex-row justify-start gap-x-4 items-center pt-6">

                        <div className="text-base">Auto Clarification</div>

                        <div>
                            <input
                                className="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[#59C28E]/90 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-b after:bg-white after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-b checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-b checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
                                type="checkbox"
                                role="switch"
                                checked={checked} onChange={() => setChecked(!checked)}
                                id="flexSwitchCheckDefault"/>
                        </div>
                        <b className="text-[16px]"> {checked ? "ON" : "OFF"}</b>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div
                            className="max-w-80	 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                            <ul className="flex flex-wrap -mb-px">
                                <li className="me-2">
                                    <a href="/#"
                                       className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">All</a>
                                </li>
                                <li className="me-2">
                                    <a href="/#"
                                       className="inline-block p-4 text-black border-b-2 border-myColorDarkBlue rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                                       aria-current="page"><b>Auto populated</b></a>
                                </li>
                                <li className="me-2">
                                    <a href="/#"
                                       className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Manual</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex flex-row items-center justify-center gap-x-3 h-full	">
                                <div
                                    className="h-10 py-2 px-3.5 flex flex-row gap-x-2 text-myColorDarkBlue font-bold text-[13px] rounded-md border border-myColorDarkBlue cursor-pointer hover:bg-myColorDarkBlue hover:text-white hover:fill-white">
                                    <span onClick={notify}>Create Label</span>
                                </div>
                                <div
                                    className="h-10 py-2 px-3.5 flex flex-row gap-x-2 text-myColorDarkBlue font-bold text-[13px] rounded-md border border-myColorDarkBlue cursor-pointer hover:bg-myColorDarkBlue hover:text-white hover:fill-white">
                                    <span onClick={notify}>+ Add Manual Frequency Restriction</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div>
                        <SelectsMenu/>
                    </div>
                    <div>
                        <ModalSessions data={data}/>
                    </div>

                    <Toaster
                        position="bottom-center"
                        reverseOrder={true}
                    />
                </div>

            </div>
        </div>
    );
};

export {Modal};
