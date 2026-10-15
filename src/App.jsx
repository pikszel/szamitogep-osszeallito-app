import './App.css'
import { useState } from 'react'

//processors
const processors = [
  { name: "i5", price: 50000 },
  { name: "i7", price: 70000 },
  { name: "i9", price: 90000 },
  { name: "Ryzen9", price: 80000 }
]

//memories
const memories = [
  { name: "16 Gb - DDR4", price: 16000 },
  { name: "32 Gb - DDR4", price: 32000 },
  { name: "64 Gb - DDR4", price: 64000 },
  { name: "128 Gb - DDR4", price: 128000 }
]

const ComponentSelector = ({ name, options, selectedOption, onSelect }) => {
  return (
    <div>
      <h3>{name}</h3>
      {options.map((option, index) => (
        <button key={index}
          onClick={() => onSelect(option)}
          style={{
            backgroundColor: selectedOption?.name === option.name ? "green" : "lightgray",
            margin: "5px",
            padding: "8px",
            borderRadius: "10px"
          }}
        >
          {option.name} - {option.price} HUF
        </button>
      ))}
    </div>
  )
}



export const App = () => {
  const [processor, setProcessor] = useState(null);
  const [memory, setMemory] = useState(null);
  const totalPrice = (processor?.price || 0) + (memory?.price || 0);

  return (
    <div>
      <ComponentSelector
        name="Processzorok"
        options={processors}
        selectedOption={processor}
        onSelect={setProcessor}
      />
      <ComponentSelector
        name="Memóriák"
        options={memories}
        selectedOption={memory}
        onSelect={setMemory}
      />

      <p>...</p><h3>Teljes ár: {totalPrice} HUF</h3>

    </div>
  )
}