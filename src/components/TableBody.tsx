import { TableLine } from "./TableLine";

interface Props {
    title: string;
    subtitle: string;
}

export function TableBody({ title, subtitle }: Props) {
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                    {title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {subtitle}
                </p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <TableLine
                        nameLine="Aplication for"
                        valueLine="Backend Developer"
                        backgroundColor="bg-white"
                    />

                    <TableLine
                        nameLine="Where can I get some?"
                        valueLine="There are many variations of passages"
                        backgroundColor="bg-gray-50"
                    />

                    <TableLine
                        nameLine="Salary expectation"
                        valueLine="$120,000"
                        backgroundColor="bg-white"
                    />

                    <TableLine
                        nameLine="Where does it come from?"
                        valueLine="Contrary to pop"
                        backgroundColor="bg-gray-50"
                    />

                    <TableLine
                        nameLine="Attachments"
                        backgroundColor="bg-white"
                        valueLine={
                            <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                    <div className="flex w-0 flex-1 items-center">
                                        <svg
                                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="ml-2 w-0 flex-1 truncate">
                                            resume_back_end_developer.pdf
                                        </span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a
                                            href="#"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            Download
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                    <div className="flex w-0 flex-1 items-center">
                                        <svg
                                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="ml-2 w-0 flex-1 truncate">
                                            coverletter_back_end_developer.pdf
                                        </span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a
                                            href="#"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            Download
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        }
                    />
                </dl>
            </div>
        </div>
    );
}
