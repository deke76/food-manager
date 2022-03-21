import Toggle from "./Toggle";
import {useState} from 'react'

export default {
  component: Toggle
}


export const TwoOptions = () => {
  const [option, setOption] = useState(0);
  return <Toggle options={["Yes","No"]} option={option} setOption={setOption} />
}

export const ThreeOptions = () => {
  const [option, setOption] = useState(0);
  return <Toggle options={["Yes","No","Maybe"]} option={option} setOption={setOption} />
}