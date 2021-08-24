import React from "react";
import { useState } from '@hookstate/core';
import { getCompanyPriorityList } from "../../APICalls/Interview/getCompanyPriorityList";

export const CompanyPriorityListComponent = () => {
  const fetchResource = () => getCompanyPriorityList()
    .then((r) => {
      console.log("Hello world");
      return r.text()
    })
  const state = useState(fetchResource);

  if (state.promised) {
    return (
        <p>Loading...</p>
    );
  }

  if (state.error) {
    return (
    <p>Failed to load<br />
    <code style={{ color: 'red' }}>{state.error.toString()}</code><br />
    <button onClick={() => state.set(fetchResource)}>Retry</button>
    </p>
    );
  }
  return (
  <p key="">Loaded<br />
    <code style={{ color: 'green' }}>{state.value}</code><br />
    <button onClick={() => state.set(fetchResource)}>Reload</button>
  </p>
  )
}