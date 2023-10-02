import Button from "@/src/components/Button";
import { useState } from "react";
import { format } from "date-fns";
import Calendar from "../src/components/Calendar"

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSetToday = () => setCurrentDate(new Date());
  return (
    <div className="mt-16 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <p>
          <strong>Selected Date: </strong>
          {format(currentDate, "dd LLLL yyyy")}
        </p>

        <Button onClick={handleSetToday}>Today</Button>
      </div>

      <Calendar value={currentDate} onChange={setCurrentDate} />
    </div>
  )
}
