export interface  Question {
  id: number;
  name: string;
  ans?: string;
  type?: string;
  options?: string[];
  //R - right, W- wrong, NA - Not applicable
  status?: string;
  subText?: string;
  mandatory?: string;
}

interface Survey {
  id: number;
  name: string;
  desc: string;
  startDate: Date;
  endDate: Date;
  status: string;
  daysLeft: number;
  questions: Question[];
}

export default Survey;

