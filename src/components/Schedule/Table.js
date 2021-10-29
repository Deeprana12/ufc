/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";

const Table = ({ day }) => {
  return (
    <table css={styles}>
      <tbody>
        <tr>
          <td>Boys gym</td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
              8:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
              8:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
        </tr>
        <tr>
          <td>Girls gym </td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
              8:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
              8:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const styles = css`
  border-collapse: collapse;
  color: #fff;
  margin: 30px 0 0 0;
  td,
  th {
    border: 1px solid #fff;
    border-collapse: collapse;
  }
  tr {
    td {
      padding: 40px 0;
      width: 200px;
      span {
        opacity: 1;
        transition: opacity 900ms ease-in-out;
      }
    }
  }
  .hidden {
    opacity: 0;
  }
  @media (max-width: 640px) {
    font-size: 12px;
    tr {
      td {
        padding: 40px 0;
        width: 200px;
        span {
          font-size: 11px;
        }
      }
    }
  }
`;

export default Table;
