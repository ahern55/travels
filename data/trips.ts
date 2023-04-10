export declare type tripData = {
  name: string;
  icon: string;
  startDate: string;
  endDate?: string;
};

const trips: tripData[] = [
  {
    name: "japan",
    icon: "🇯🇵",
    startDate: new Date(2023, 0, 10).toString(),
    endDate: new Date(2023, 1, 7).toString(),
  },
  {
    name: "korea",
    icon: "🇰🇷",
    startDate: new Date(2023, 1, 7).toString(),
    endDate: new Date(2023, 1, 19).toString(),
  },
  {
    name: "taiwan",
    icon: "🇹🇼",
    startDate: new Date(2023, 1, 19).toString(),
    endDate: new Date(2023, 1, 27).toString(),
  },
  {
    name: "vietnam",
    icon: "🇻🇳",
    startDate: new Date(2023, 1, 27).toString(),
    endDate: new Date(2023, 2, 29).toString(),
  },
  {
    name: "cambodia",
    icon: "🇰🇭",
    startDate: new Date(2023, 2, 29).toString(),
    endDate: new Date(2023, 3, 10).toString(),
  },
  {
    name: "thailand",
    icon: "🇹🇭",
    startDate: new Date(2023, 3, 10).toString(),
  },
];

export default trips;
