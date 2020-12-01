import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function Home() {
    return (
        // <div className="flex flex-col items-center">
        //     <div className="w-full max-w-6xl">
        //         <Head>
        //             <title>Caller Information</title>
        //             <link rel="icon" href="/favicon.ico" />
        //         </Head>

        //         <div className="p-4 flex justify-center bg-gray-200 dark:bg-gray-600 ">
        //             <div className="flex">
        //                 <h1 className="text-2xl text-gray-900 sm:text-3xl lg:text-5xl dark:text-gray-100">
        //                     (719) 555-1212
        //                 </h1>
        //             </div>
        //             <div className="flex justify-end">
        //                 <svg
        //                     className="w-7 h-7 lg:w-9 lg:h-9 lg:w-9 lg:h-9"
        //                     viewBox="0 0 24 24"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     fill-rule="evenodd"
        //                     clip-rule="evenodd"
        //                 >
        //                     <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" />
        //                 </svg>
        //             </div>
        //         </div>
        //         <div>
        //             <hr className="border-gray-900 dark:border-gray-100" />
        //         </div>

        //         {/* <div>
        //         <h2 className="text-xl dark:text-gray-100">Jeffrey Emery</h2>
        //     </div> */}
        //     </div>
        // </div>

        // page
        <div className="flex flex-col flex-nowrap h-screen max-w-screen-md m-auto">
            {/* section */}
            <div className="flex flex-nowrap">
                <div className="flex flex-grow justify-center items-center bg-gray-200 dark:bg-gray-500">
                    <h1 className="pl-16 text-2xl text-gray-900 font-normal sm:text-3xl lg:text-4xl dark:text-gray-100">
                        (719) 555-1212
                    </h1>
                    {/* <input
                        type="text"
                        className="text-2xl text-gray-50 placeholder-gray-400 border-b-2 border-gray-700 bg-gray-500 w-72 text-center rounded"
                        maxLength="14"
                        placeholder="(719) 555-1212"
                    ></input> */}
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
            {/* <div>  className="flex flex-grow bg-gray-300 flex-nowrap"> */}
            <div className="flex-grow bg-gray-300">
                {/* <div className="grid grid-cols-2 gap-4"> */}
                <div className="">
                    <div className="m-4 p-4 bg-gray-100 border border-gray-400 shadow-md rounded-md">
                        <div className="flex justify-between pb-4 text-gray-900 text-2xl font-bold">
                            <div className="">Jeffrey Emery</div>{' '}
                            <div className="">12/22/1975</div>
                        </div>
                        <hr className="-mx-4 border-gray-900" />
                        {/* <div className="flex justify-between"> */}
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div
                                className={`pt-4 whitespace-nowrap ${styles.love}`}
                            >
                                123 East Endover Road
                                <span>West Farmington, NM 86589</span>
                            </div>
                            <div className="pt-4">
                                <div className="sm:text-right">
                                    <a className="" href="tel:1-719-555-1212">
                                        (719) 555-1212
                                    </a>
                                </div>
                                <div className="sm:text-right">
                                    jeff.emery@yahoo.com
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-200 border border-gray-400 rounded-md shadow-md">
                            <div className="grid grid-cols-2">
                                <div className="pt-0.5 text-lg font-semibold">
                                    12/5/2019
                                </div>
                                <div className="text-right">
                                    <div className="inline-flex items-baseline px-3 pt-1 pb-1.5 rounded-full shadow-md text-sm font-medium border border-green-700 bg-green-100 text-green-800">
                                        Complete
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <div>
                                    <div className="mt-2">
                                        <p className="uppercase">
                                            MRI Lumbar Spine WO - 72148
                                        </p>
                                    </div>
                                    <div className="">Dr. Thomas Anderson</div>
                                </div>
                                <div className="mt-2 sm:mt-0">
                                    <div className="sm:text-right">
                                        <p className="sm:mt-2">
                                            Colorado Springs Imaging
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-4 p-4 bg-gray-100 shadow-md rounded-md">
                        Detail
                    </div>
                </div>
                {/* <div className="flex-none min-w-min bg-gray-500">
                    I'm a little tea pot
                </div> */}
            </div>
        </div>
    )
}
