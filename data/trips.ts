export declare type tripData = {
  name: string;
  icon: string;
  startDate: string;
  endDate?: string;
  thumbnailIndex?: number;
  cities?: {
    name: string;
    startDate: string;
  }[];
};

const trips: tripData[] = [
  {
    name: "japan",
    icon: "🇯🇵",
    startDate: new Date(2023, 0, 10).toString(),
    endDate: new Date(2023, 1, 7).toString(),
    cities: [
      {
        name: "tokyo",
        startDate: new Date(2023, 0, 10).toString(),
      },
      {
        name: "hakone",
        startDate: new Date(2023, 0, 17).toString(),
      },
      {
        name: "kyoto",
        startDate: new Date(2023, 0, 18).toString(),
      },
      {
        name: "nara",
        startDate: new Date(2023, 0, 20).toString(),
      },
      {
        name: "osaka",
        startDate: new Date(2023, 0, 21).toString(),
      },
      {
        name: "kobe",
        startDate: new Date(2023, 0, 23).toString(),
      },
      {
        name: "himeji",
        startDate: new Date(2023, 0, 24).toString(),
      },
      {
        name: "hiroshima",
        startDate: new Date(2023, 0, 25).toString(),
      },
      {
        name: "miyajima",
        startDate: new Date(2023, 0, 26).toString(),
      },
      {
        name: "kanazawa",
        startDate: new Date(2023, 0, 27).toString(),
      },
      {
        name: "shirakawa-gō",
        startDate: new Date(2023, 0, 30).toString(),
      },
      {
        name: "takayama",
        startDate: new Date(2023, 0, 31).toString(),
      },
      {
        name: "tokyo",
        startDate: new Date(2023, 1, 1).toString(),
      },
      {
        name: "kyoto",
        startDate: new Date(2023, 1, 4).toString(),
      },
      {
        name: "fukuoka",
        startDate: new Date(2023, 1, 5).toString(),
      },
    ],
  },
  {
    name: "korea",
    icon: "🇰🇷",
    startDate: new Date(2023, 1, 7).toString(),
    endDate: new Date(2023, 1, 19).toString(),
    cities: [
      {
        name: "busan",
        startDate: new Date(2023, 1, 7).toString(),
      },
      {
        name: "seoul",
        startDate: new Date(2023, 1, 12).toString(),
      },
    ],
  },
  {
    name: "taiwan",
    icon: "🇹🇼",
    startDate: new Date(2023, 1, 19).toString(),
    endDate: new Date(2023, 1, 27).toString(),
    cities: [
      {
        name: "taipei",
        startDate: new Date(2023, 1, 19).toString(),
      },
      {
        name: "hualien",
        startDate: new Date(2023, 1, 23).toString(),
      },
      {
        name: "taipei",
        startDate: new Date(2023, 1, 25).toString(),
      },
    ],
  },
  {
    name: "vietnam",
    icon: "🇻🇳",
    startDate: new Date(2023, 1, 27).toString(),
    endDate: new Date(2023, 2, 29).toString(),
    cities: [
      {
        name: "hanoi",
        startDate: new Date(2023, 1, 27).toString(),
      },
      {
        name: "cát bà island",
        startDate: new Date(2023, 2, 2).toString(),
      },
      {
        name: "ninh binh",
        startDate: new Date(2023, 2, 5).toString(),
      },
      {
        name: "ha giang (and northern vietnam)",
        startDate: new Date(2023, 2, 9).toString(),
      },
      {
        name: "hanoi",
        startDate: new Date(2023, 2, 13).toString(),
      },
      {
        name: "huế",
        startDate: new Date(2023, 2, 15).toString(),
      },
      {
        name: "hội an",
        startDate: new Date(2023, 2, 16).toString(),
      },
      {
        name: "mũi né",
        startDate: new Date(2023, 2, 22).toString(),
      },
      {
        name: "ho chi minh city",
        startDate: new Date(2023, 2, 26).toString(),
      },
    ],
  },
  {
    name: "cambodia",
    icon: "🇰🇭",
    startDate: new Date(2023, 2, 29).toString(),
    endDate: new Date(2023, 3, 10).toString(),
    cities: [
      {
        name: "phnom penh",
        startDate: new Date(2023, 2, 29).toString(),
      },
      {
        name: "koh rong island",
        startDate: new Date(2023, 2, 31).toString(),
      },
      {
        name: "koh rong sanloem island",
        startDate: new Date(2023, 3, 2).toString(),
      },
      {
        name: "siem reap",
        startDate: new Date(2023, 3, 7).toString(),
      },
      {
        name: "angkor wat",
        startDate: new Date(2023, 3, 9).toString(),
      },
    ],
  },
  {
    name: "thailand",
    icon: "🇹🇭",
    startDate: new Date(2023, 3, 10).toString(),
    endDate: new Date(2023, 4, 4).toString(),
    cities: [
      {
        name: "bangkok",
        startDate: new Date(2023, 3, 10).toString(),
      },
      {
        name: "kanchanaburi",
        startDate: new Date(2023, 3, 16).toString(),
      },
      {
        name: "chiang mai",
        startDate: new Date(2023, 3, 20).toString(),
      },
      {
        name: "pai",
        startDate: new Date(2023, 3, 25).toString(),
      },
      {
        name: "pa pae meditation retreat",
        startDate: new Date(2023, 3, 29).toString(),
      },
      {
        name: "chiang rai",
        startDate: new Date(2023, 4, 2).toString(),
      },
    ],
  },
  {
    name: "laos",
    icon: "🇱🇦",
    startDate: new Date(2023, 4, 4).toString(),
    endDate: new Date(2023, 4, 17).toString(),
    cities: [
      {
        name: "pak beng",
        startDate: new Date(2023, 4, 4).toString(),
      },
      {
        name: "luang prabang",
        startDate: new Date(2023, 4, 5).toString(),
      },
      {
        name: "nong khiaw",
        startDate: new Date(2023, 4, 7).toString(),
      },
      {
        name: "luang prabang",
        startDate: new Date(2023, 4, 11).toString(),
      },
      {
        name: "vang vieng",
        startDate: new Date(2023, 4, 12).toString(),
      },
      {
        name: "vientiane",
        startDate: new Date(2023, 4, 15).toString(),
      },
    ],
  },
  {
    name: "thailand",
    icon: "🇹🇭",
    startDate: new Date(2023, 4, 17).toString(),
    endDate: new Date(2023, 5, 15).toString(),
    thumbnailIndex: 1,
    cities: [
      {
        name: "bangkok",
        startDate: new Date(2023, 4, 17).toString(),
      },
      {
        name: "phuket",
        startDate: new Date(2023, 4, 22).toString(),
      },
      {
        name: "ko phi phi",
        startDate: new Date(2023, 4, 24).toString(),
      },
      {
        name: "ko lanta",
        startDate: new Date(2023, 4, 26).toString(),
      },
      {
        name: "phuket",
        startDate: new Date(2023, 4, 30).toString(),
      },
      {
        name: "ko phangan",
        startDate: new Date(2023, 5, 3).toString(),
      },
      {
        name: "ko tao",
        startDate: new Date(2023, 5, 6).toString(),
      },
    ],
  },
  {
    name: "malaysia",
    icon: "🇲🇾",
    startDate: new Date(2023, 5, 15).toString(),
    endDate: new Date(2023, 5, 25).toString(),
    cities: [
      {
        name: "penang",
        startDate: new Date(2023, 5, 15).toString(),
      },
      {
        name: "cameron highlands",
        startDate: new Date(2023, 5, 18).toString(),
      },
      {
        name: "kuala lumpur",
        startDate: new Date(2023, 5, 20).toString(),
      },
      {
        name: "melaka",
        startDate: new Date(2023, 5, 24).toString(),
      },
    ],
  },
  {
    name: "singapore",
    icon: "🇸🇬",
    startDate: new Date(2023, 5, 25).toString(),
  },
];

export default trips;
