import "./employeePage.css"
import arnold from '../../assets/Arnold.jpg'

function EmployeePage() {
  return (
    <section className="employeePage">
      <header className="employeePageHeader">
        <div className="span">
          <span>&lt;</span>
        </div>
        <div className="h2">
          <h2>Employee</h2>
        </div>
      </header>
      <section className="employee">
        <div className="employeeHeader">
          <div className="employeeImage">
            <img src={arnold}></img>
          </div>
          <div className="nameTitleWrapper">
            <h4 className="employeeName">Arnaldo Pires</h4>
            <p className="employeeTitle">President and CEO</p>
          </div>
        </div>
        <div className="officeNumber">
          <div className="stack">
            <h4>Call Office</h4>
            <p>617-000-0092</p>
          </div>
          <span>&gt;</span>
        </div>
        <div className="mobileNumber">
          <div className="stack">
            <h4>Call Mobile</h4>
            <p>617-000-009</p>
          </div>
          <span>&gt;</span>
        </div>
        <div className="textNumber">
          <div className="stack">
            <h4>SMS</h4>
            <p>617-000-0092</p>
          </div>
          <span>&gt;</span>
        </div>
        <div className="email">
          <div className="stack">
            <h4>Email</h4>
            <p>arnaldos.email@gmail.com</p>
          </div>
          <span>&gt;</span>
        </div>
      </section>
    </section>
  )
}

export default EmployeePage