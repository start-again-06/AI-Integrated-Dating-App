import axios from 'axios';
import { getToken } from '../utils/storage';

const API_URL = 'http://10.0.2.2:4000';

export async function login(email, password) {
  const res = await axios.post(`${API_URL}/api/auth/login`, {
    email,
    password
  });
  return res.data; // { token }
}

export async function signup(email, password) {
  const res = await axios.post(`${API_URL}/api/auth/register`, {
    email,
    password
  });
  return res.data; // { token }
}

export async function generatePlan(payload) {
  const token = await getToken();

  const res = await axios.post(
    `${API_URL}/api/date-plan`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return res.data; // { success, plan }
}

export async function getHistory() {
  const token = await getToken();

  const res = await axios.get(
    `${API_URL}/api/date-plan/history`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return res.data; // { plans }
}
