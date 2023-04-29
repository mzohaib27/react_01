import React from "react";
import Table from "react-bootstrap/Table";

const ArrayListing = () => {
  const students = [
    {
      name: "Shahbaz",
      email: "shaibi22@gmail.com",
      adress: [
        { HouseNo: "34bn south", City: "Jhelum", Country: "Pakistan" },
        { HouseNo: "143 North", City: "Okara", Country: "Pakistan" },
        { HouseNo: "09dvh East ", City: "Lahore", Country: "Pakistan" },
      ],
    },

    {
      name: "Kinza",
      email: "kinzass22@gmail.com",
      adress: [
        { HouseNo: "347bn south", City: "Jhelum", Country: "Pakistan" },
        { HouseNo: "134 North", City: "Okara", Country: "Pakistan" },
        { HouseNo: "05dvh East ", City: "Lahore", Country: "Pakistan" },
      ],
    },

    {
      name: "ahmad",
      email: "ahmad22@gmail.com",
      adress: [
        { HouseNo: "343bn south", City: "Jhelum", Country: "Pakistan" },
        { HouseNo: "183 North", City: "Okara", Country: "Pakistan" },
        { HouseNo: "87dvh East ", City: "Lahore", Country: "Pakistan" },
      ],
    },

    {
      name: "shehroz",
      email: "shehrozs22@gmail.com",
      adress: [
        { HouseNo: "12bn south", City: "Jhelum", Country: "Pakistan" },
        { HouseNo: "113 North", City: "Okara", Country: "Pakistan" },
        { HouseNo: "89dvh East ", City: "Lahore", Country: "Pakistan" },
      ],
    },
  ];

  return (
    <div>
      <h1>ArrayListing : </h1>

      <Table border={1} variant="dark">
        <tbody>
          <tr>
            <td>Sr.#</td>
            <td>Name</td>
            <td>Email</td>
            <td>Adress</td>
          </tr>
          {students.map((value, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{value.name}</td>
              <td>{value.email}</td>
             {/* Nested Map */}
              <td>
                {value.adress.map((data) => {
                  <tr>
                    <td>{data.HouseNo}</td>
                    <td>{data.City}</td>
                    <td>{data.Country}</td>
                  </tr>;
                })}
              </td>
         {/* ------------><------------ */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ArrayListing;
