import React, { useState } from 'react'

export default function Modal(props) {

    const [ modalBool, setModalBool ] = useState(null)

    console.log('[Modal] modalBool', modalBool)
    props.setModalBool(modalBool)
    
    return (
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={e => setModalBool(true)}>Yes</button>
                        <button type="button" class="btn btn-primary" onClick={e => setModalBool(false)}>No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
