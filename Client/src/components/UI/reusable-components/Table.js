import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome'
import { faTrashAlt } from '../../../../node_modules/@fortawesome/free-solid-svg-icons'

export default function Table({ documents, deleteItem }) {

    return (
        <Fragment>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete User</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map((item, index) =>
                        <tr key={item._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item._id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>
                                <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal" onClick={() => deleteItem(item._id)}>
                                    <FontAwesomeIcon className="fa-2x align"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        color="red"
                                        icon={faTrashAlt}
                                    />
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Fragment>
    )
}
