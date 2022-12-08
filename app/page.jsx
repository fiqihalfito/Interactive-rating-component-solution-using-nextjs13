"use client"

import { useState } from "react";
import SubmitButton from "../components/main/button-submit";
import IconMain from "../components/main/icon";
import Info from "../components/main/info";
import Rate from "../components/main/rate";

export default function Home() {

  const [activeRate, setActiveRate] = useState([
    false,
    false,
    false,
    false,
    false,
  ])

  const [rate, setRate] = useState(0)

  function handleRate(i) {
    const buttons = activeRate.slice();
    let temprate = 0
    if (buttons[i]) {
      buttons.fill(false)
    } else {
      buttons.fill(false)
      buttons[i] = true
      temprate = i + 1
    }
    setActiveRate(buttons)
    setRate(temprate)
  }

  return (
    <div className="rounded-3xl bg-secondary-darkBlue p-6 w-[25rem]">
      <IconMain />
      <Info />
      <Rate buttons={activeRate} handleClick={(i) => handleRate(i)} />
      <SubmitButton rate={rate} />
    </div>
  )
}
