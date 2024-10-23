import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && authData.employees.length > 0) {
      if (loggedInUser.role === "admin") {
        setUser("admin");
      } else if (loggedInUser.role === "employee") {
        setUser("employee");
        const storedEmployeeData = authData.employees.find(
          (emp) => emp.email === loggedInUser.email
        );
        setLoggedInUserData(storedEmployeeData);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "AdminPass123") {
      const adminUser = { role: "admin", email };
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        const employeeUser = { role: "employee", email };
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeUser));
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
