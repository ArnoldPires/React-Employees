import './searchBar.css'

function SearchBar() {
  return (
    <div className='searchBar'>
      <form action='/action_page.php'>
        <input type='text' placeholder='Search...' name='search' />
      </form>
    </div>
  )
}

export default SearchBar