import { useState } from 'react'
import dropdownClose from './images/dropdown-close.svg'
import dropdownOpen from './images/dropdown-open.svg'
import './collapse.css'

export default function Collapse(props) {
  const { size, title, content } = props
  const [visible, setVisible] = useState(false)

  return (
    <div className={'collapsable-container ' + size}>
      <button
        onClick={() => {
          setVisible(!visible)
        }}
        className="btn-collapse"
      >
        <h2>{title}</h2>
        <img src={visible ? dropdownOpen : dropdownClose} alt="Dropdown" />
      </button>
      <div className={'collapsable ' + size + (visible ? ' show' : '')}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  )
}
