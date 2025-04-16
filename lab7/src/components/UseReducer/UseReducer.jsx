import { useReducer } from "react"

const CouterReducer = (state, action) => {
  switch (action.type) {
    case "Tang":
      return { count: state.count + 1 };
    case "Giam":
      return { count: state.count - 1 };
    default:
      return state;

  }

}


function UseReducer() {
  const [state, dispatch] = useReducer(CouterReducer, { count: 0 });
  return (
    <div className="items-center mt-7 border p-6 gap-4 rounded-lg shadow-lg">
      <div className="flex justify-center text-2xl mb-5 font-semibold">1. UseReducer</div>
      <div className="flex justify-center gap-4">
        <p className="text-2xl font-semibold">Count: {state.count}</p>
        <div className="flex gap-4">
          <button
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => dispatch({ type: "Tang" })}
          >
            Tăng
          </button>
          <button
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
            onClick={() => dispatch({ type: "Giam" })}
          >
            Giảm
          </button>
        </div>
      </div>

    </div>

  )
}
export default UseReducer