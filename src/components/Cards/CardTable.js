import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
export default function CardTable({ color }) {
  const wrapperRef = useRef(null);
  const grid = new Grid({
    columns: ['Name', 'Email', 'Phone Number'],
    sort: true,
    search: true,
    data: [
      ['John', 'john@example.com', '(353) 01 222 3333'],
      ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
    ]
  });
  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  return (
    <>
      <div ref={wrapperRef} />
    </>
  );
}

