import React from "react";
import { Table } from "react-bootstrap";
import ActivitiesList from "./ActivitiesList/ActivitiesList.components";
import './ActivitiesPage.css';
import MyGroups from "./MyGroups/MyGroups.components";
import OpenGroups from "./OpenGroups/OpenGroups.components";


const ActivitiesPage = ({ userId, locationId }) => {
  const props = { userId, locationId }
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
          <td><ActivitiesList {...props} /></td>
          <td><OpenGroups /></td>
          <td><MyGroups /></td>
        </tr>
      </tbody>
    </Table>
  )
}

export default ActivitiesPage;
