import React, { createContext, useState } from "react";
import { Table } from "react-bootstrap";
import ActivitiesList from "./ActivitiesList/ActivitiesList.components";
import './ActivitiesPage.css';
import MyGroups from "./MyGroups/MyGroups.components";
import OpenGroups from "./OpenGroups/OpenGroups.components";


const ActivitiesListContext = createContext();


const ActivitiesPage = () => {
  const [activitiesList, setActivitiesList] = useState([]);
  return (
    <ActivitiesListContext.Provider value={{ activitiesList, setActivitiesList }}>
      <Table striped bordered hover style={{ height: '100vh' }} className={"activities-page"}>
        <thead>
          <tr>
            <th>אטרקציות באזור</th>
            <th>קבוצות פתוחות</th>
            <th>קבוצות שלך</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><ActivitiesList /></td>
            <td><OpenGroups /></td>
            <td><MyGroups /></td>
          </tr>
        </tbody>
      </Table>
    </ActivitiesListContext.Provider>
  )
}

export { ActivitiesPage, ActivitiesListContext };
