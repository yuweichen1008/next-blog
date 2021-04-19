import Layout from "../components/Layout/Layout";
import ChartExample from '../utils/chartExample'

const stock = () => {
    return (
        <Layout>
            <div className="bg-gray-50">
            <div class="bg-white shadow p-4 flex">
                <span class="w-auto flex justify-end items-center text-gray-500 p-2">
                    <i class="material-icons text-3xl">Stock</i>
                </span>
                <input class="w-full rounded p-2" type="text" placeholder="Try 'Tsmc'" />
                <button class="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
                        <p class="font-semibold text-xs">Search</p>
                </button>
            </div>
            <div>
                <ChartExample />
            </div>
            </div>
        </Layout>
    );
}

export default stock;