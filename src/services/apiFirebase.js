import db from "../config.firebase";

class ApiConnect {
  static post = async (data) => {
    return db
      .collection("players")
      .doc()
      .set(data)
      .then((writeResult) => writeResult)
      .catch((err) => {
        console.log(err);
      });
  };
  static getOne = async (uuid) => {
    return db
      .collection("players")
      .where("uuid", "==", uuid)
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((i) => data.push(i.data()));
        return data;
      });
  };
  static getAll = async () => {
    return db
      .collection("players")
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((i) => data.push(i.data()));
        return data;
      });
  };
  static update = async (uuid, data) => {
    return db
      .collection("players")
      .where("uuid", "==", uuid)
      .get()
      .then((querySnapshot) => {
        let id = 0;
        querySnapshot.forEach((i) => (id = i.id));
        return db
          .collection("players")
          .doc(id)
          .update(data)
          .then((writeResult) => {
            return writeResult;
          });
      });
  };
  static delete = async (uuid) => {
    return db
      .collection("players")
      .where("uuid", "==", uuid)
      .get()
      .then((querySnapshot) => {
        let id = 0;
        querySnapshot.forEach((i) => (id = i.id));
        return db
          .collection("players")
          .doc(id)
          .delete()
          .then((writeResult) => {
            return writeResult;
          });
      });
  };
}

export default ApiConnect;
