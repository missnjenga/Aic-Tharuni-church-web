import { ServiceItem, WeeklyFellowship, LeaderProfile } from "../types";

export const orderOfService: ServiceItem[] = [
  {
    id: "svc-1",
    title: "Praise & Worship",
    time: "9:00 AM – 9:30 AM",
    description: "Congregational singing led by the worship team.",
  },
  {
    id: "svc-2",
    title: "Welcome & Announcements",
    time: "9:30 AM – 9:45 AM",
    description: "Greeting visitors and sharing what's happening this week.",
  },
  {
    id: "svc-3",
    title: "Word of God",
    time: "9:45 AM – 10:45 AM",
    description: "Sermon and teaching from the pulpit.",
  },
  {
    id: "svc-4",
    title: "Altar Call & Prayer",
    time: "10:45 AM – 11:00 AM",
    description: "Time of response, prayer and ministry.",
  },
  {
    id: "svc-5",
    title: "Closing & Benediction",
    time: "11:00 AM – 11:15 AM",
    description: "Closing song and sending out.",
  },
];

export const weeklyFellowships: WeeklyFellowship[] = [
  {
    id: "fw-1",
    name: "Bible Study",
    day: "Wednesday",
    time: "5:30 PM – 6:30 PM",
    location: "Main Sanctuary",
    description: "Midweek study through the scriptures, open to all.",
  },
  {
    id: "fw-2",
    name: "Women's Fellowship",
    day: "Tuesday",
    time: "10:00 AM – 12:00 PM",
    location: "Fellowship Hall",
    description: "Prayer, teaching and encouragement for women.",
  },
  {
    id: "fw-3",
    name: "Men's Fellowship",
    day: "Saturday",
    time: "6:30 AM – 8:00 AM",
    location: "Fellowship Hall",
    description: "Early morning prayer and brotherhood for men.",
  },
  {
    id: "fw-4",
    name: "Youth Service",
    day: "Friday",
    time: "5:00 PM – 7:00 PM",
    location: "Youth Center",
    description: "Worship, teaching and games for teens and young adults.",
  },
  {
    id: "fw-5",
    name: "Church School",
    day: "Sunday",
    time: "9:00 AM – 11:00 AM",
    location: "Church School Wing",
    description: "Sunday school classes for children, held alongside the main service.",
  },
];

export const leadership: LeaderProfile[] = [
  {
    id: "leader-1",
    name: "Placeholder Name",
    role: "Senior Pastor",
    bio: "Add a short bio about the senior pastor's calling and years of service.",
    imagePlaceholder: "/placeholders/leaders/senior-pastor.jpg",
  },
  {
    id: "leader-2",
    name: "Placeholder Name",
    role: "Associate Pastor",
    bio: "Add a short bio about the associate pastor.",
    imagePlaceholder: "/placeholders/leaders/associate-pastor.jpg",
  },
  {
    id: "leader-3",
    name: "Placeholder Name",
    role: "Head Elder",
    bio: "Add a short bio about the head elder.",
    imagePlaceholder: "/placeholders/leaders/head-elder.jpg",
  },
  {
    id: "leader-4",
    name: "Placeholder Name",
    role: "Worship Director",
    bio: "Add a short bio about the worship director.",
    imagePlaceholder: "/placeholders/leaders/worship-director.jpg",
  },
];

export const aboutContent = {
  mission:
    "Placeholder mission statement — replace with the church's actual mission, describing the purpose the congregation exists to fulfil.",
  story:
    "Placeholder church story — replace with a short history of how the church started, key milestones, and where it is today.",
};
