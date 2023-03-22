interface Props {
    nameLine: string;
    valueLine: string | JSX.Element;
    backgroundColor: string;
}

export function TableLine({ nameLine, valueLine, backgroundColor }: Props) {
    return (
        <div
            className={`${backgroundColor} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
        >
            <dt className="text-sm font-medium text-gray-500">{nameLine}</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {valueLine}
            </dd>
        </div>
    );
}
