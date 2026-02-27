import axios from 'axios';

const API_URL = 'http://localhost:4000'; 

export async function login(email, password) {
  const res = await axios.post(`${API_URL}/api/auth/login`, {
    email,
    password
  });
  return res.data;
}

export async function signup(payload) {
  const res = await axios.post(`${API_URL}/api/auth/signup`, payload);
  return res.data;
}

export async function generatePlan(token, payload) {
  const res = await axios.post(
    `${API_URL}/api/date-plan`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return res.data;
}

export async function getHistory(token) {
  const res = await axios.get(
    `${API_URL}/api/date-plan/history`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return res.data;
}
