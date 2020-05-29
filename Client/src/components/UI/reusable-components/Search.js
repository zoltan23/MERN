import React from 'react'

export default function Search({ documents }) {

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const [searchField, setSearchField] = React.useState('firstName');

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    React.useEffect(() => {
        const results = documents.filter((person) =>
            person[searchField].toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

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
            </div>
            <ul>
                {searchResults.map((item) => (
                    <li>{item[searchField]}</li>
                ))}
            </ul>
        </div>
    )
}
