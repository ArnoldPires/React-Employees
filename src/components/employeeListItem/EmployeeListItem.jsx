import './employeeListItem.css'

function EmployeeListItem({ imageSrc, employeeName, employeeTitle }) {
  return (
    <div className='employeeListItem'>
      <div className='imageContainer'>
        <img src={imageSrc} alt={employeeName}></img>
      </div>
      <div className='nameTitleWrapper'>
        <h4 className='employeeName'>{employeeName}</h4>
        <p className='employeeTitle'>{employeeTitle}</p>
      </div>
    </div>
  )
}

export default EmployeeListItem