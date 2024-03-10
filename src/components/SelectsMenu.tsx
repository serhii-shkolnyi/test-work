import React, {FC} from 'react';


export interface IOptional {
    value: string;
    label: string;
}

const options: IOptional[] = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
];
const SelectsMenu: FC = () => {


    return (
        <div className="pl-5 flex flex-row gap-x-[16px] py-5">
            <div className={"flex flex-row gap-x-4 justify-start"}>
                <form className="max-w-24 mx-auto ">
                    <select id="countries" defaultValue={'DEFAULT'}
                            className="uppercase text-[10px] outline-none text-gray-900  rounded-md  focus:rounded-md-myColorDarkBlue focus:border-myColorDarkBlue block w-full p-0.5">
                        <option value="DEFAULT" disabled>Frequency</option>
                        {options.map((option) => <option key={option.label} className="active:bg-myColorDarkBlue"
                                                         value={option.value}>{option.label}</option>)}
                    </select>
                </form>
                <form className="max-w-24 mx-auto ">
                    <select id="countries" defaultValue={'DEFAULT'}
                            className="uppercase text-[10px] outline-none text-gray-900  rounded-md  focus:rounded-md-myColorDarkBlue focus:border-myColorDarkBlue block w-full p-0.5">
                        <option value="DEFAULT" disabled>Bandwidth</option>
                        {options.map((option) => <option key={option.label} className="active:bg-myColorDarkBlue"
                                                         value={option.value}>{option.label}</option>)}
                    </select>
                </form>
                <form className="max-w-24 mx-auto ">
                    <select id="countries" defaultValue={'DEFAULT'}
                            className="uppercase text-[10px] outline-none text-gray-900  rounded-md  focus:rounded-md-myColorDarkBlue focus:border-myColorDarkBlue block w-full p-0.5">
                        <option value="DEFAULT" disabled>Digitalness</option>
                        {options.map((option) => <option key={option.label} className="active:bg-myColorDarkBlue"
                                                         value={option.value}>{option.label}</option>)}
                    </select>
                </form>

            </div>
            <div className={"flex flex-row gap-x-4 justify-start pl-4"}>
                <form className="max-w-24 mx-auto ">
                    <select id="countries" defaultValue={'DEFAULT'}
                            className="uppercase text-[10px] outline-none text-gray-900  rounded-md  focus:rounded-md-myColorDarkBlue focus:border-myColorDarkBlue block w-full p-0.5">
                        <option value="DEFAULT" disabled>Modulation</option>
                        {options.map((option) => <option key={option.label} className="active:bg-myColorDarkBlue"
                                                         value={option.value}>{option.label}</option>)}
                    </select>
                </form>
                <form className="max-w-24 mx-auto ">
                    <select id="countries" defaultValue={'DEFAULT'}
                            className="uppercase text-[10px] outline-none text-gray-900  rounded-md  focus:rounded-md-myColorDarkBlue focus:border-myColorDarkBlue block w-full p-0.5">
                        <option value="DEFAULT" disabled>Source</option>
                        {options.map((option) => <option key={option.label} className="active:bg-myColorDarkBlue"
                                                         value={option.value}>{option.label}</option>)}
                    </select>
                </form>


            </div>
        </div>

    )
        ;
};

export {SelectsMenu};
