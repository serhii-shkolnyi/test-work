import React, {FC} from 'react';

import {Footer, Header, Main} from "../../components";


const MainLayout: FC = () => {
    return (
        <div className="box-border min-h-svh flex flex-col">
            <header className="h-20 border-b border-[myColorGrey] w-full fixed z-50 top-0 bg-white">
                <Header/>
            </header>

            <main className="flex-auto  max-w-7xl mx-auto mt-32 h-full ">
               <Main/>
            </main>

            <footer>
               <Footer/>
            </footer>
        </div>
    );
};

export {MainLayout};
