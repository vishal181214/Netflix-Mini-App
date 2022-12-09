import { createStore } from "redux";
import nav_reducer from "./Components/Navbar/reducer";


const store = createStore(nav_reducer);
export default store;