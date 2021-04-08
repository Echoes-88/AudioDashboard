import { useContext } from 'react';
import { AppContext } from "./AppContext";

const useAppContext = () => {
  const [state, setState] = useContext(AppContext);

  function setCurrentUser(id) {
    setState(state => ({ ...state, currentUser: id }));
  }

  function setUpdated() {
    setState(state => ({ ...state, updated: !state.updated }));
  }

  function updateUser(id, content) {

    const indexUser = state.currentUser

    let userUpdate = state.user[indexUser];
    userUpdate[id] = content.current.value;

    const updatedUsers = [
      ...state.user.slice(0, indexUser + 1),
      userUpdate,
      ...state.user.slice(indexUser + 1)
    ];

    setState(state => ({
      ...state,
      updatedUsers
      }
    ))
  }

  function addPatient(values) {
    const patientDatas = values;
    const id = state.user.length;
    patientDatas.id = id;
    patientDatas.equipments = [];

    setState(state => ({
      ...state,
      user: [
        ...state.user, 
        {...patientDatas}
      ],
      updated: true,
    }))
  }



  function addEquipment(equipment) {
    const indexUser = state.currentUser

    let userUpdate = state.user[indexUser];
    userUpdate.equipments = [...userUpdate.equipments, equipment]

    const newUsers = [
      ...state.user.slice(0, indexUser + 1),
      userUpdate,
      ...state.user.slice(indexUser + 1)
    ];

    setState(state => ({
      ...state,
      newUsers
      }
    ))
  }
  return {
    updated: state.updated,
    users: state.user,
    userDatas: state.user[state.currentUser],
    equipments: state.equipments,
    setCurrentUser,
    addPatient,
    addEquipment,
    setUpdated,
    updateUser
  }
};

export default useAppContext;