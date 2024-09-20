import axios from "axios";

const TareasService = {
  getTareas: async () => {
    try {
      const response = await axios.get("/api/tareas");
      return response.data; // Aquí recibes las tareas del backend
    } catch (error) {
      console.error("Error fetching tareas:", error);
      throw error;
    }
  },
};

export default TareasService;
