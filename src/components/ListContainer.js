import React, { useState } from 'react'
import { IoMdAddCircle } from 'react-icons/io';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import paper from '../images/paper.png'

function ListContainer() {
    const [input, setInput] = useState('')
    const [list, addItem] = useState([])
    //const localData = JSON.parse(localStorage.getItem('ToDo.ProjectList'))
    //let data
    const check = () => {
        if (input.length !== 0) {
            addItem([...list, { item: input, checked: false }])
            // data.push({ item: input, checked: false })
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
        //localStorage.setItem('ToDo.ProjectList', JSON.stringify(arr))
    }
    //data = localData ? localData : list
    const projects = list.map((itemx, index) => {
        if (itemx.checked) {
            return (
                <div style={listItem} key={index} className="ProjectListItems" onClick={() => tickTheItem(index)}>
                    <MdCheckBox style={{ width: '25px', height: '25px', marginRight: '10px', color: '#623ce7' }} />
                    <del> {itemx.item}</del>
                </div>
            )
        }
        else {
            return (
                <div style={listItem} key={index} className="ProjectListItems" onClick={() => tickTheItem(index)}>
                    <MdCheckBoxOutlineBlank style={{ width: '25px', height: '25px', marginRight: '10px' }} />{itemx.item}
                </div>
            )
        }

    })

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={head}>
                <img src={paper} alt="logo" style={{ width: '25px', height: '25px', marginRight: '10px' }} />
                A Better React ToDo APP
            </div>
            <div style={tasks}>
                <div style={{ padding: '0 0 10px 0', fontSize: '20px', fontFamily: 'bisonBold', textAlign: 'left' }}>
                    Today's Events
                    <span style={count}>
                        {list.length}
                    </span>
                </div>
                {projects}
            </div>
            <div style={bottom}>
                <input type="text" style={inp} value={input} placeholder="Add a new task"
                    onChange={e => setInput(e.target.value)} onKeyDown={(e) => onPressEnter(e)} ></input>
                <button style={but} onClick={check}><IoMdAddCircle style={icon} size={30} /></button>
            </div>
        </div>
    )
}

const head = {
    padding: '10px',
    textAlign: 'left',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'flex-start',
    background: '#f7f8fc',
    borderRadius: '5px'
}
const icon = {
    color: '#fff'
}
const bottom = {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px',
    justifyContent: 'space-between'
}
const inp = {
    width: '95%',
    boxSizing: 'border-box',
    padding: '10px',
    border: '1px solid #757575',
    fontSize: '14px',
    fontFamily: 'googleSans',
    borderRadius: '10px',
    outline: 'none',
    background: '#f7f8fc',
}
const but = {
    borderRadius: '10px',
    background: '#623ce7',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fefefe',
    outline: 'none',
    cursor: 'pointer',
    padding: '5px',
    margin: '0 5px'
}
const tasks = {
    background: '#fff',
    height: '80%',
    padding: '15px'
}
const listItem = {
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px'
}
const count = {
    padding: '0px 5px',
    background: '#623ce7',
    borderRadius: '25px',
    color: '#fff',
    marginLeft: '10px',
    fontFamily: 'googleSans',

}
export default ListContainer