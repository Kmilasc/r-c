import Layout from "../components/Layout";
import { Field } from "../components/Field";

function FeaturePage() {
    return (
        <Layout>
            <div className="relative isolate px-6 pt-14 lg:px-8 flex" />

            <form className="mx-72 my-36">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <Field input="First name" label="John" />
                    <Field input="Last name" label="Doe" />
                    <Field input="Company" label="Flowbite" />
                    <Field input="Phone number" label="123-45-678" />
                    <Field input="Website URL" label="flowbite.com" />
                    <Field input="Unique visitors (per month)" label="" />
                </div>
                <Field input="Email address" label="john.doe@company.com" />
                <Field input="Password" label="•••••••••" />
                <Field input="Confirm password" label="•••••••••" />
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            required
                        />
                    </div>
                    <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        I agree with the{" "}
                        <a
                            href="#"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            terms and conditions
                        </a>
                        .
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </Layout>
    );
}

export default FeaturePage;
