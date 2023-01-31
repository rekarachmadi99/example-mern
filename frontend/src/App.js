import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./components/addUser";
import EditUser from "./components/editUser";
import UserList from "./components/userList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="add" element={<AddUser />} />
        <Route path="edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
