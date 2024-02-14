import React from "react";
import { Table } from "react-bootstrap";
import './ActivitiesPage.css';
import ActivitiesList from "./ActivitiesList/ActivitiesList.components";
import OpenGroups from "./OpenGroups/OpenGroups.components";
import MyGroups from "./MyGroups/MyGroups.components";


const ActivitiesPage = () => {
  return (
    <Table striped bordered hover style={{ height: '100vh' }}>
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
  )
}

export default ActivitiesPage;
