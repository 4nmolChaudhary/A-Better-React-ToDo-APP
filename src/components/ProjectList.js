import React from 'react'
import { IoIosFolderOpen } from 'react-icons/io';

function ProjectList({ items }) {

    //const data = JSON.parse(localStorage.getItem('ToDo.ProjectList'))

    const projects = items.map((itemx, index) => {
        return (
            <div style={listItem} key={index}>
                <IoIosFolderOpen style={folderIcon} />{itemx.item}
            </div>
        )
    })

    return (
        <div style={{ padding: '5px' }}>
            {projects}
        </div>
    )
}
const listItem = {
    fontSize: '16px',
    padding: '1px',
    margin: '0px',
    textAlign: 'left',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center'
}
const folderIcon = {
    margin: '5px'
}
export default ProjectList
