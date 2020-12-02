import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function Home() {
    return (
        // page
        <div className="flex flex-col flex-nowrap h-screen max-w-screen-md m-auto">
            {/* section */}
            <div className="flex flex-nowrap">
                <div className="flex flex-grow justify-center items-center bg-gray-200 dark:bg-gray-500">
                    <h1 className="pl-16 text-2xl text-gray-900 font-normal sm:text-3xl lg:text-4xl dark:text-gray-100">
                        (202) 555-1212
                    </h1>
                </div>
                <div className="flex-none min-w-min bg-gray-200 dark:bg-gray-500">
                    <svg
                        className="stroke-current text-gray-800 dark:text-gray-100 m-4 w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9"
                        viewBox="-1 -1 26 26"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    >
                        <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" />
                    </svg>
                </div>
            </div>
            <hr className="border-gray-900 dark:border-gray-100" />
            <div className="flex-grow bg-gray-300">
                <div className="">
                    <div className="m-4 p-4 bg-gray-100 border border-gray-400 shadow-md rounded-md">
                        <div className="flex justify-between pb-4 text-gray-900 text-2xl font-bold">
                            <div className="">Fred McCauliff</div>{' '}
                            <div className="">5/22/1965</div>
                        </div>
                        <hr className="-mx-4 border-gray-400" />
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div
                                className={`pt-4 ml-2 whitespace-nowrap ${styles.love}`}
                            >
                                123 East Endover Road
                                <span>West Farmington, NM 86589</span>
                            </div>
                            <div className="pt-4 mx-2">
                                <div className="sm:text-right">
                                    <a className="" href="tel:1-719-555-1212">
                                        (202) 555-1212
                                    </a>
                                </div>
                                <div className="sm:text-right">
                                    fredmcc@yahoo.com
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-200 border border-gray-400 rounded-md shadow-md">
                            <div className="grid grid-cols-2">
                                <div className="pt-0.5 text-xl font-semibold">
                                    12/5/2019
                                </div>
                                <div className="text-right">
                                    <div className="inline-flex items-baseline px-3 pt-1 pb-1.5 rounded-full shadow-md text-sm font-medium border border-green-700 bg-green-100 text-green-800">
                                        Open
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <div>
                                    <div className="text-base font-semibold mt-2">
                                        <p className="uppercase">
                                            MRI Lumbar Spine WO - 72148
                                        </p>
                                    </div>
                                    <div className="">Dr. Thomas Anderson</div>
                                </div>
                                <div className="mt-2 sm:mt-0">
                                    <div className="sm:text-right">
                                        <p className="text-gray-700 sm:mt-2">
                                            North Arlington
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-4 p-4 bg-gray-100 border border-gray-400 shadow-md rounded-md">
                        <div className="flex justify-between pb-4 text-gray-900 text-2xl font-bold">
                            <div className="">Terry Branson</div>{' '}
                            <div className="">9/5/1982</div>
                        </div>
                        <hr className="-mx-4 border-gray-400" />
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div
                                className={`pt-4 ml-2 whitespace-nowrap ${styles.love}`}
                            >
                                4532 Old Mason Way
                                <span>McClean, VA 22541</span>
                            </div>
                            <div className="pt-4 mx-2">
                                <div className="sm:text-right">
                                    <a className="" href="tel:1-719-555-1212">
                                        (202) 555-1212
                                    </a>
                                </div>
                                <div className="sm:text-right">
                                    tbranson1@hotmail.com
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-200 border border-gray-400 rounded-md shadow-md">
                            <div>
                                <div className="grid grid-cols-2">
                                    <div className="pt-0.5 text-xl font-semibold">
                                        5/18/2020
                                    </div>
                                    <div className="text-right">
                                        <div className="inline-flex items-baseline px-3 pt-1 pb-1.5 rounded-full shadow-md text-sm font-medium border border-pink-700 bg-pink-100 text-pink-800">
                                            Canceled
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    <div>
                                        <div className="text-base font-semibold mt-2">
                                            <p className="uppercase">
                                                CT Abdomen and Pelvis /w- 74177
                                            </p>
                                            <p className="uppercase">
                                                CT Chest /w- 74186
                                            </p>
                                        </div>
                                        <div className="">Dr. Mary Peters</div>
                                    </div>
                                    <div className="mt-2 sm:mt-0">
                                        <div className="sm:text-right">
                                            <p className="text-gray-700 sm:mt-2">
                                                Las Colinas
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="-mx-4 my-4 border-gray-400" />
                            <div>
                                <div className="grid grid-cols-2">
                                    <div className="pt-0.5 text-xl font-semibold">
                                        9/5/2020
                                    </div>
                                    <div className="text-right">
                                        <div className="inline-flex items-baseline px-3 pt-1 pb-1.5 rounded-full shadow-md text-sm font-medium border border-purple-700 bg-purple-100 text-purple-800">
                                            Complete
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    <div>
                                        <div className="text-base font-semibold mt-2">
                                            <p className="uppercase">
                                                MRI Thoracic Spine W/O - 72146
                                            </p>
                                        </div>
                                        <div className="">
                                            Dr. Christopher Mason
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:mt-0">
                                        <div className="sm:text-right">
                                            <p className="text-gray-700 sm:mt-2">
                                                Dallas
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
