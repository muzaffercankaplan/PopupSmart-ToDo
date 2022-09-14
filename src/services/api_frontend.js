let DOMAIN = "https://631e4c14cc652771a4945e2e.mockapi.io/todos";

const fetchData = async () => {
  const response = await fetch(`${DOMAIN}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

const handleAddData = async (text) => {
  const response = await fetch(`${DOMAIN}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: text }),
  });
  const data = await response.json();
  return data;
};

const handleChangeData = async (id, body) => {
  const response = await fetch(`${DOMAIN}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

const handleDeleteData = async (id) => {
  const response = await fetch(`${DOMAIN}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export { fetchData, handleDeleteData, handleAddData, handleChangeData };
