import SearchBar from '../searchBar/SearchBar';
import EmployeeList from '../employeeList/EmployeeList';
import "./homePage.css"

function HomePage() {
  return (
    <>
      <header className="homePageHeader">
        <h2>Employee Directory</h2>
      </header>
      <SearchBar />
      <EmployeeList />
    </>
  )
}

export default HomePage