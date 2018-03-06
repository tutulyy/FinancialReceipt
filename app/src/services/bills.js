import request from '../utils/request';

export function fetch({ page }) {
  return request(`/api/bills?_page=${page}&_limit=10`);
}
export function fetchTaxTurnOutSubjects({ page }) {
  return request(`/api/bills/taxTurnOutSubjects`);
}
export function fetchProfessions({ page }) {
  return request(`/api/bills/professions`);
}
export function fetchDepartments({ page }) {
  return request(`/api/departments`);
}

export function create(values) {
  return request('/api/bills', {
    method: 'POST',
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values),
  });
}
export function update(values) {
  return request('/api/bills', {
    method: 'PUT',
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values),
  });
}
export function del(values) {
  return request('/api/bills', {
    method: 'delete',
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values),
  });
}
