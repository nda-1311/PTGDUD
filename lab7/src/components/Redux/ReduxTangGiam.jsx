import { useDispatch, useSelector } from "react-redux"
import { Tang, Giam } from '../Redux/ActionTangGiam';

const ReduxTangGiam = () => {


    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();


    return (
        <div className=" items-center mt-7 border p-6 gap-4 rounded-lg shadow-lg">
            <p className=" flex justify-center text-2xl font-semibold mb-4">2. Redux</p>
            <div className="flex justify-center gap-4">
                <p className="text-2xl font-semibold">Count: {count}</p>
                <div className="flex gap-4">
                    <button
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                        onClick={() => dispatch(Tang())}
                    >
                        Tăng
                    </button>
                    <button
                        className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
                        onClick={() => dispatch(Giam())}
                    >
                        Giảm
                    </button>

                </div>
            </div>

        </div>
    )
}

export default ReduxTangGiam