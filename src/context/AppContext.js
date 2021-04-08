import React, {useState} from 'react';

const AppContext = React.createContext();

const AppProvider = (props) => {

  const [state, setState] = useState({ 
    currentUser: 0,
    updated: false,
    user: [
      {
      id: 0,
      firstname: "Van Gogh",
      lastname: "Vincent",
      age: 66,
      birthday: "30/07/1954",
      adress: "18 rue Montaubourg, 75015 Paris",
      medecin: {
        firstname: "House",
        lastname: "Dr",
        adress: "24 rue plancha, 75015 Paris",
      },
      equipments: ["appareil auditif", "accesoire auditif"],
      },
      {
        id: 1,
        firstname: "Didou",
        lastname: "Samuel",
        age: 32,
        birthday: "30/07/1988",
        adress: "2 rue neyron, 42000 Saint-Etienne",
        medecin: {
          firstname: "pluto",
          lastname: "Dr",
          adress: "13 rue Pasquiet, 42000 Saint-Etienne",
        },
        equipments: ["Ecouteur auditif"],
      }],
    equipments: ["appareil auditif", "accessoire auditif", "Ecouteur auditif"]
  })

return (
  <AppContext.Provider value={[state, setState]}>
    {props.children}
  </AppContext.Provider>
)
}

export {AppContext, AppProvider};