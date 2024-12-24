import axios from "axios";

const API_BASE_URL = 'https://cms.laurence.host/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAllTasks = async (page: number = 1, limit: number = 10) => {
    try {
      const response = await api.get(`/tasks?page=${page}&limit=${limit}`);
      return response.data;
  } catch (error) {
      console.error('Error getting tasks:', error);
      throw error;
  }
};

export const createTask = async (title: string) => {
  try {
      const response = await api.post('/tasks', { title });
      return response.data;
  } catch (error) {
      console.error('Error creating task:', error);
      throw error;
  }
};

export const updateTask = async (id: number, updates: any) => {
  try {
    const response = await api.put(`/tasks/${id}`, updates);
    return response.data;
} catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

export const deleteTask = async (id: number) => {
try {
    await api.delete(`/tasks/${id}`);
} catch (error) {
    console.error('Error deleting task:', error);
    throw error;
}
};