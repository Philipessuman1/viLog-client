import axios from "axios";

const EMPLOYEE_API_BASE_URL = "https://vilogserverapp.onrender.com";

class EmployeeService {
  saveEmployee(employee: { id: string; Name: string; email: string; position: string; contact: string; }) {
    return axios.post("https://vilogserverapp.onrender.com/addhost", employee);
  }

  getEmployees() {
    return axios.get("https://vilogserverapp.onrender.com/hosts");
  }

  deleteEmployee(id: string) {
    return axios.delete("https://vilogserverapp.onrender.com/deletehost/:id");
  }

  // updateEmployee(employee: any, id: string) {
  //   return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
  // }
}

export default new EmployeeService();