import AxiosInstance from "./AxiosInstance.mjs";

const updateAssigment = async (assigment) => {
  const result = await AxiosInstance().put("/assigment", assigment, {
    withCredentials: true,
  });
  return result.data;
};

const fetchAssigment = async ({ queryKey }) => {
  console.log(queryKey[1]);
  const result = await AxiosInstance().get(`/assigment/${queryKey[1]}`, {
    withCredentials: true,
  });
  return result.data;
};

const fetchAssigments = async ({ queryKey }) => {
  const result = await AxiosInstance().get(`/assigment`, {
    withCredentials: true,
  });
  return result.data;
};

const deleteAssigment = async (assigment) => {
  const result = await AxiosInstance().delete("/assigment", {
    data: assigment,
    withCredentials: true,
  });
  return result.data;
};

export { updateAssigment, fetchAssigment, fetchAssigments, deleteAssigment };
