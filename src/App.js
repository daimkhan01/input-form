import "./App.css";
import React, { useState } from "react";
import Table from "./Components/table/Table";
import UserForm from "./Components/form/UserForm";
import Pagination from "./Components/elements/pagination/Pagination";
import SearchInput from "./Components/elements/searchInput/SearchInput";

const initialFormState = {
  name: "",
  age: "",
  gender: "",
  hobbies: [],
  nationality: "",
  message: "",
};

function App() {
  const [formInput, setFormInput] = useState(initialFormState);
  const [items, setItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // pagination
  const itemsPerPage = 5;
  const lastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = lastItem - itemsPerPage;

  function goToFirstPage() {
    setCurrentPage(1);
  }
  function goToLastPage() {
    const lastPage = Math.ceil(items.length / itemsPerPage);
    setCurrentPage(lastPage);
  }
  function goToNextPage() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages()));
  }
  function goToPrevPage() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }
  function totalPages() {
    return Math.ceil(items.length / itemsPerPage);
  }

  function inputEvent(e) {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormInput((prev) => {
        const hobbies = prev.hobbies.includes(value)
          ? prev.hobbies.filter((hobby) => hobby !== value)
          : [...prev.hobbies, value];
        return { ...prev, hobbies };
      });
    } else {
      setFormInput({ ...formInput, [name]: value });
    }
  }

  function resetForm() {
    setFormInput(initialFormState);
    setIsUpdating(false);
  }

  function validateForm() {
    return (
      formInput.name &&
      formInput.age &&
      parseInt(formInput.age, 10) >= 0 &&
      formInput.gender &&
      formInput.hobbies.length > 0 &&
      formInput.nationality &&
      formInput.message
    );
  }

  function addInputData(e) {
    e.preventDefault();
    if (validateForm()) {
      const newItem = {
        id: Date.now(),
        ...formInput,
      };
      setItems([...items, newItem]);
      resetForm();
    } else {
      alert("Please fill out the form correctly!");
    }
  }

  function deleteData(id) {
    if (filteredData.length === 1 && currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
    const updateItem = items.filter((item) => item.id !== id);
    setItems(updateItem);
  }

  function updateData(id) {
    const item = items.find((item) => item.id === id);
    setFormInput(item);
    setIsUpdating(true);
    setSelectedIndex(id);
  }

  function updateInfo(e) {
    e.preventDefault();
    if (validateForm()) {
      const updateItem = items.map((item) =>
        item.id === selectedIndex ? { ...formInput, id: selectedIndex } : item
      );
      setItems(updateItem);
      resetForm();
    } else {
      alert("Please fill out the form correctly!");
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearAllData = () => {
    setItems([]);
  };

  const filteredData = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstItem, lastItem);

  return (
    <div className="App">
      <UserForm
        isUpdating={isUpdating}
        addInputData={addInputData}
        updateInfo={updateInfo}
        formInput={formInput}
        inputEvent={inputEvent}
        resetForm={resetForm}
      />
      <SearchInput
        value={searchTerm}
        onChange={handleSearch}
        type="text"
        placeholder="Type to search..."
        clearAllData={clearAllData}
      />
      <Table
        data={filteredData}
        updateData={updateData}
        deleteData={deleteData}
        indexOfFirstItem={indexOfFirstItem}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages()}
        goToFirstPage={goToFirstPage}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        goToLastPage={goToLastPage}
      />
    </div>
  );
}

export default App;
