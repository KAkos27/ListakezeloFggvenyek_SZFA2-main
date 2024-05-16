export const getAdat = (vegpont, callback) => {
  fetch(vegpont, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const postAdat = (vegpont, adat) => {
  fetch(vegpont, { method: "POST", body: JSON.stringify(adat) })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteAdat = (vegpont, id) => {
  fetch(vegpont + "/" + id, { method: "DELETE" })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
