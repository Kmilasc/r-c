import Layout from "../components/Layout";

function ToDoList() {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };
    const handleClickAdd = () => {
        console.log("Adicionou");
    };
    const handleClickDone = () => {
        console.log("Feito");
    };
    const handleClickRemoveDone = () => {
        console.log("Removido");
    };
    const handleClickNotDone = () => {
        console.log("Desmarcado");
    };
    const handleClickRemoveNotDone = () => {
        console.log("Removido");
    };

    return (
        <Layout>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <div className="my-40 bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Todo List</h1>
                        <div className="flex mt-4">
                            <input
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                                placeholder="Add Todo"
                            />
                            <button
                                onClick={handleClickAdd}
                                type="button"
                                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="flex mb-4 items-center">
                            <p className="w-full text-grey-darkest">
                                Add another component to Tailwind Components
                            </p>
                            <button
                                onClick={handleClickDone}
                                type="button"
                                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
                            >
                                Done
                            </button>
                            <button
                                onClick={handleClickRemoveDone}
                                type="button"
                                className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                            >
                                Remove
                            </button>
                        </div>
                        <div className="flex mb-4 items-center">
                            <p className="w-full line-through text-green">
                                Submit Todo App Component to Tailwind Components
                            </p>
                            <button
                                onClick={handleClickNotDone}
                                type="button"
                                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey"
                            >
                                Not Done
                            </button>
                            <button
                                onClick={handleClickRemoveNotDone}
                                type="button"
                                className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ToDoList;
