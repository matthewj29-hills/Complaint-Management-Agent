import axios from 'axios';
import { ComplaintFormData, Complaint } from '../types';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitComplaint = async (data: ComplaintFormData): Promise<Complaint> => {
  const response = await api.post<Complaint>('/complaints', data);
  return response.data;
};

export const getComplaints = async (): Promise<Complaint[]> => {
  const response = await api.get<Complaint[]>('/complaints');
  return response.data;
};

export const updateComplaintStatus = async (id: number, status: 'Pending' | 'Resolved'): Promise<Complaint> => {
  const response = await api.patch<Complaint>(`/complaints/${id}`, { status });
  return response.data;
};

export const deleteComplaint = async (id: number): Promise<void> => {
  await api.delete(`/complaints/${id}`);
}; 