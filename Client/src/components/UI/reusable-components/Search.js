import React, { useEffect } from 'react'

export default function Search({ documents }) {

    console.log('Search fired')

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const [searchField, setSearchField] = React.useState('firstName');
    const [sortDirection, setSortDirection] = React.useState('ascending');
    const [isAsc, setIsAsc] = React.useState(null);
    const [sortedDocuments, setSortedDocuments] = React.useState([{firstName: "tom"},
                                                                    {firstName: "apple"},
                                                                {firstName: "joe"}]);

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    React.useEffect(() => {
        const results = documents.filter((person) =>
            person[searchField].toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    function sortByField(arr, searchField, isAsc) {
        console.log('isAsc', isAsc)
       var sortedDocuments = [...arr].sort (
            function (a, b) {
                if (a[searchField] < b[searchField]){
                    return isAsc ? -1 : 1;
                } else if (a[searchField] > b[searchField]){
                    return isAsc ? 1 : -1;
                } else {
                    return 0;   
                }
            }
        );
        setSortedDocuments(sortedDocuments)
        console.log('sortedDocuments', sortedDocuments)
    }
    
    const handleSort = (e) => {
        console.log('event', e.target.value)
        setIsAsc(e.target.value)
        sortByField(sortedDocuments, searchField, isAsc)
        //console.log(documents)
    }


    return (
        <div className="container mt-1">
            <div className="row float-right mb-1">
                <div className="mr-2">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </div>
                <select class="selectpicker" data-style="btn btn-info" onChange={e => setSearchField(e.target.value)} >
                    <option class="dropdown-item" value="firstName" >First Name</option>
                    <option class="dropdown-item" value="lastName" >Last Name</option>
                    <option class="dropdown-item" value="email" >Email</option>
                </select>
                <button value={true} onClick={handleSort}>Sort ascending</button>
                <button value={false} onClick={handleSort}>Sort descending</button>
            </div>
            <ul>
                {searchResults.map((item) => (
                    <li>{item[searchField]}</li>
                ))}
            </ul>
        </div>
    )
}
