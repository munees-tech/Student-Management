import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { BASE_URL } from "../lib/url";

const useStudentStore = create((set) => ({
  isLoading: false,
  students: [],
  error: null,

  getStudent: async () => {
    set({ isLoading: true });

    try {
      const res = await axiosInstance.get(BASE_URL);

      set({
        students: res.data.student,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.message,
      });
    }
  },

  addStudent: async (data: any) => {
    set({ isLoading: true });

    try {
      const res = await axiosInstance.post(BASE_URL, data);

      const updatedStudents = await axiosInstance.get(BASE_URL);

      set({
        students: updatedStudents.data.student,
        isLoading: false,
        error: null,
      });

      return res.data;
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.message,
      });

      throw error;
    }
  },

  deleteStudent: async (id: number) => {
    set({ isLoading: true });

    try {
      await axiosInstance.delete(`${BASE_URL}/delete/${id}`);

      const updatedStudents = await axiosInstance.get(BASE_URL);

      set({
        students: updatedStudents.data.student,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.message,
      });

      throw error;
    }
  },

  getStudentById: async (id: number) => {
    try {
      const res = await axiosInstance.get(`${BASE_URL}/edit/${id}`);
      return res.data;
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.message,
      });

      throw error;
    }
  },

  updateStudent: async (id: number, data: any) => {
    try {
      const res = await axiosInstance.put(`${BASE_URL}/update/${id}`, data);

      return res.data;
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.message,
      });
    }
  },
}));

export default useStudentStore;
