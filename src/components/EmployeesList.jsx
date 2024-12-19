import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from '../redux/EmployeeSlice';

const EmployeeList = () => {
  const { employees, status } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h1 className="text-xl font-bold mb-4">Employee List</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id} className="mb-2">
              {employee.name}
            </li>
          ))}
        </ul>
      )}
      {status === 'failed' && <p>Failed to fetch employees.</p>}
    </div>
  );
};

export default EmployeeList;