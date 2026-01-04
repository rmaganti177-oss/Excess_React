import React from "react";

const AddFirm = () => {
  return (
    <div className="firmSection">
      <form className="tableForm">
        <h3 className="formTitle">Add Firm</h3>

        <label>Firm Name</label>
        <input type="text" />

        <label>Area</label>
        <input type="text" />

        <label>Category</label>
        <div className="checkboxRow">
          <label className="checkItem">
            Veg
            <input type="checkbox" />
          </label>
          <label className="checkItem">
            Non-Veg
            <input type="checkbox" />
          </label>
        </div>

        <label>Offer</label>
        <input type="text" />

        <label>Region</label>
        <div className="checkboxRow">
          <label className="checkItem">
            South Indian
            <input type="checkbox" />
          </label>
          <label className="checkItem">
            North-Indian
            <input type="checkbox" />
          </label>
          <label className="checkItem">
            Chinese
            <input type="checkbox" />
          </label>
          <label className="checkItem">
            Bakery
            <input type="checkbox" />
          </label>
        </div>

        <label>Firm Image</label>
        <input type="file" />

        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddFirm;
