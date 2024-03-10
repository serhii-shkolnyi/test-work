import React, {FC} from 'react';
import {Link, NavLink} from "react-router-dom";

import logo from "../../assets/icon/logo.svg";

const Header: FC = () => {
    return (
        <div className="h-full">
            <div className=" max-w-7xl mx-auto px-5 h-full flex flex-row justify-between justify-items-center py-5">
                <nav>
                    <ul className=" flex flex-row justify-around justify-items-center gap-x-3 font-bold text-[13px]">
                        <NavLink to={"/monitoring"}>
                            <li className="h-9 py-2 px-5 rounded-md bg-myColorGrey hover:bg-myColorDarkBlue hover:text-white hover:fill-white flex flex-row justify-between justify-items-center gap-x-2">
                                <div className="m-auto">
                                    <svg className="" width="12" height="15" viewBox="0 0 12 15" fill="inherit"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.3333 14.1666H0.666667C0.29848 14.1666 0 13.8681 0 13.4999V1.49992C0 1.13173 0.29848 0.833252 0.666667 0.833252H11.3333C11.7015 0.833252 12 1.13173 12 1.49992V13.4999C12 13.8681 11.7015 14.1666 11.3333 14.1666ZM10.6667 12.8333V2.16659H1.33333V12.8333H10.6667ZM3.33333 4.16659H8.66667V5.49992H3.33333V4.16659ZM3.33333 6.83325H8.66667V8.16659H3.33333V6.83325ZM3.33333 9.49992H8.66667V10.8333H3.33333V9.49992Z"/>
                                    </svg>
                                </div>
                                <div>Monitoring</div>
                            </li>
                        </NavLink>
                        <NavLink to={"/sensors"}>
                            <li className="h-9 py-2 px-5 rounded-md bg-myColorGrey hover:bg-myColorDarkBlue hover:text-white hover:fill-white flex flex-row justify-between justify-items-center gap-x-2">
                                <div className="m-auto">
                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.3334 8.83325V6.83325H7.66673V8.83325H11.0001C11.3683 8.83325 11.6667 9.13172 11.6667 9.49992V13.4999C11.6667 13.8681 11.3683 14.1666 11.0001 14.1666H3.0001C2.63191 14.1666 2.33343 13.8681 2.33343 13.4999V9.49992C2.33343 9.13172 2.63191 8.83325 3.0001 8.83325H6.3334ZM0.673828 5.39116C1.55621 2.74275 4.05517 0.833252 7.00007 0.833252C9.94507 0.833252 12.444 2.74275 13.3264 5.39116L12.0611 5.81291C11.3552 3.69418 9.35607 2.16659 7.00007 2.16659C4.64415 2.16659 2.64499 3.69418 1.93908 5.81291L0.673828 5.39116ZM3.20433 6.23465C3.73377 4.64561 5.23314 3.49992 7.00007 3.49992C8.76707 3.49992 10.2664 4.64561 10.7959 6.23465L9.5306 6.65639C9.17767 5.59705 8.17807 4.83325 7.00007 4.83325C5.82213 4.83325 4.82255 5.59705 4.46959 6.65639L3.20433 6.23465ZM3.66677 10.1666V12.8333H10.3334V10.1666H3.66677Z"/>
                                    </svg>
                                </div>
                                <div>Sensors</div>
                            </li>
                        </NavLink>
                        <NavLink to={"/alerts"}>
                            <li className="h-9 py-2 px-5 rounded-md bg-myColorGrey hover:bg-myColorDarkBlue hover:text-white hover:fill-white flex flex-row justify-between justify-items-center gap-x-2">
                                <div className="m-auto">
                                    <svg width="12" height="16" viewBox="0 0 12 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0002 6.16659C10.0002 3.95745 8.2093 2.16659 6.00016 2.16659C3.79102 2.16659 2.00016 3.95745 2.00016 6.16659V11.4999H10.0002V6.16659ZM11.3335 11.9444L11.6002 12.2999C11.7106 12.4472 11.6808 12.6561 11.5335 12.7666C11.4758 12.8099 11.4056 12.8333 11.3335 12.8333H0.666829C0.482736 12.8333 0.333496 12.684 0.333496 12.4999C0.333496 12.4278 0.356889 12.3576 0.400163 12.2999L0.666829 11.9444V6.16659C0.666829 3.22107 3.05464 0.833252 6.00016 0.833252C8.9457 0.833252 11.3335 3.22107 11.3335 6.16659V11.9444ZM4.3335 13.4999H7.66683C7.66683 14.4204 6.92063 15.1666 6.00016 15.1666C5.0797 15.1666 4.3335 14.4204 4.3335 13.4999Z"/>
                                    </svg>
                                </div>
                                <div>Alerts</div>
                            </li>
                        </NavLink>
                        <NavLink to={"/sessions"}>
                            <li className="h-9 py-2 px-5 rounded-md bg-myColorGrey hover:bg-myColorDarkBlue hover:text-white hover:fill-white flex flex-row justify-between justify-items-center gap-x-2">
                                <div className="m-auto">
                                    <svg width="22" height="24" viewBox="0 0 22 24" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.33337 3.16725C4.33337 2.79874 4.63691 2.5 4.99457 2.5H17.0055C17.3707 2.5 17.6667 2.79642 17.6667 3.16725V12.4994C17.6667 12.8679 17.3632 13.1667 17.0055 13.1667H4.99457C4.62941 13.1667 4.33337 12.8703 4.33337 12.4994V3.16725ZM5.66671 3.83333V11.8333H16.3334V3.83333H5.66671ZM6.33337 13.8333H15.6667V15.1667H6.33337V13.8333Z"/>
                                    </svg>
                                </div>
                                <div>Sessions</div>
                            </li>
                        </NavLink>

                    </ul>
                </nav>
                <div>
                    <Link to={"/"}><img src={logo} alt="logo"/></Link>
                </div>
            </div>
        </div>
    );
};

export {Header};
