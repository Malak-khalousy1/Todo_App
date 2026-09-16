const usersUrl = "http://localhost:3000/users";
const BaseUrl = "http://localhost:3000";

const userData = {
  name: "haidara",
  family: "mmmm",
  age: 21,
};

const addUser = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("My Server Error", error);
  }
};

const updateUser = async (url, data, id) => {
  try {
    const response = await fetch(url + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("My Server Error", error);
  }
};

const getUsers = async (url) => {
  // fetch(url).then(response => response.json()).then(data => console.log(data));

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("My Server Error", error);
  }
};

const deleteUser = async (url, id) => {
  try {
    const response = await fetch(url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("My Server Error", error);
  }
};

const result = await deleteUser(BaseUrl + "/users", "Lb_rZxJ5GVI");
console.log(result);
// const res = await getUsers(usersUrl);
// console.log(res);

// addUser(BaseUrl + "/users", userData);

// updateUser(BaseUrl + "/users", userData, "yMxJ3jDnuig");
