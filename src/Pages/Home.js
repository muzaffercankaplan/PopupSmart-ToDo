import React, { useEffect, useState } from "react";
import Filtered from "../Components/Filtered";
import InputArea from "../Components/InputArea";
import TaskList from "../Components/TaskList";
import {
  fetchData,
  handleAddData,
  handleChangeData,
  handleDeleteData,
} from "../services/api_frontend";
import "../styles/Global.css";

const Home = () => {
  const [data, setData] = useState();
  const [filtered, setFiltered] = useState("all");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(false);
    const response = await fetchData();
    setData(response);
    setLoading(true);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAdd = async (text) => {
    setLoading(false);
    const response = await handleAddData(text);
    setData([...data, response]);
    setLoading(true);
  };

  const handleDelete = async (id) => {
    setLoading(false);
    const response = await handleDeleteData(id);
    if (response.id) setData(data.filter((item) => item.id !== id));
    setLoading(true);
  };

  const handleChange = async (id, text) => {
    setLoading(false);
    const response = await handleChangeData(id, text);
    const uptadeData = data.map((item) =>
      item.id === response.id ? response : item
    );
    setData(uptadeData);
    setLoading(true);
  };

  return (
    <div>
      <InputArea handleAdd={handleAdd} loading={loading} />
      <TaskList
        data={data}
        handleDelete={handleDelete}
        handleChange={handleChange}
        filtered={filtered}
      />
      <Filtered data={data} setFiltered={setFiltered} />
    </div>
  );
};

export default Home;
