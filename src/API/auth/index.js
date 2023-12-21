import apiInstance from "../instance";

const signIn = async (data) => {
  const res = await apiInstance.post("/auth/signin", data);
  return res.data;
};
export { signIn };
