import React, { useState } from 'react'
import { FaFolder, FaFolderOpen } from 'react-icons/fa'
import './Container.css'

function ProjectContainer() {
    //let arePojectsEmpty = true
    const [input, setInput] = useState('')
    const [list, addItem] = useState([])
    const check = () => {
        if (input.length !== 0) {
            addItem([...list, { item: input, checked: false }])
            setInput('')
        }
    }
    const onPressEnter = (e) => {
        if (e.key === 'Enter') {
            check()
        }
    }
    const tickTheItem = (index) => {
        const arr = [...list]
        console.log(arr)
        arr[index].checked = !list[index].checked
        addItem(arr)
    }
    const projects = list.map((itemx, index) => {
        if (itemx.checked) {
            return (
                <div style={listItem} key={index} className="ProjectListItems" onClick={() => tickTheItem(index)}>
                    <FaFolderOpen style={{ width: '25px', height: '25px', marginRight: '10px', color: '#623ce7' }} />
                    <del> {itemx.item}</del>
                </div>
            )
        }
        else {
            return (
                <div style={listItem} key={index} className="ProjectListItems" onClick={() => tickTheItem(index)}>
                    <FaFolder style={{ width: '25px', height: '25px', marginRight: '10px' }} />{itemx.item}
                </div>
            )
        }

    })

    return (
        <div>
            <div style={{ height: '320px', borderRadius: '8px', background: '#fefefe' }}>
                <p style={{ background: '#623ce7', padding: '5px', color: '#fafbf8', margin: 0, borderTopRightRadius: '8px', borderTopLeftRadius: '8px' }}>Projects</p>
                {projects}
            </div>
            <input type="text" className="Input" value={input} placeholder="Add a project" onKeyDown={(e) => onPressEnter(e)}
                onChange={e => setInput(e.target.value)} ></input>
            <button className="Button" onClick={check}>Add Project</button>
        </div>
    )


}
const listItem = {
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px'
}
export default ProjectContainer
