import React, {useContext, useEffect} from 'react';

import CardUser from '../components/Cards/CardUser';
import CardMedecin from '../components/Cards/CardMedecin';
import CardEquipment from '../components/Cards/CardEquipment';
import Card from '../components/Cards'

import useAppContext from '../context/useAppContext';

function MainContent(props) {

  const { userDatas, equipments, setCurrentUser, users } = useAppContext();
  console.log(users)
  useEffect(()=> {
    setCurrentUser(props.location.currentUserId || 0)
  }, [])

  return(
    <>
    <div className="row userInfos bg-white m-2">
    <h4>{userDatas.lastname} {userDatas.firstname} {userDatas.age} ans ({userDatas.birthday})</h4>
    </div>
    <div className="row h-85 bg-white m-2">
    <div className="col-sm">
      <CardUser title="Identité" cardContent={userDatas}/>
    </div>
    <div className="col-sm">
      <CardEquipment title="Equipement" equipments={equipments}/>
      <Card title="Notes"/>
      <Card title="Prescriptions"/>
    </div>
    <div className="col-sm">
    <CardMedecin title="Personnel médical" cardContent={userDatas.medecin}/>
    <Card title="Documents"/>
    </div>
  </div>
  </>
  )
}

export default MainContent;