import { ServiceItem, WeeklyFellowship, LeaderProfile } from "../types";

export const orderOfService: ServiceItem[] = [
  {
    id: "svc-1",
    title: "English and Kiswahili Service",
    time: "8:00 AM – 10:00 AM",
    description:
      "A time of worship, prayer, fellowship, sermon and teaching in English and Kiswahili.",
  },

  {
    id: "svc-2",
    title: "Worship",
    time: "10:00 AM – 10:30 AM",
    description:
      "Congregational worship and praise led by the church worship team.",
  },

  {
    id: "svc-3",
    title: "Kikuyu Service",
    time: "10:30 AM – 1:00 PM",
    description:
      "A time of worship, prayer, fellowship, sermon and teaching in Kikuyu.",
  },

  {
    id: "svc-4",
    title: "Church School",
    time: "9:00 AM – 10:00 AM",
    description:
      "Children receive age-appropriate biblical teaching and guidance in their respective classes.",
  },
];

export const weeklyFellowships: WeeklyFellowship[] = [
  {
    id: "fw-1",
    name: "Pastor's Visit Day",
    day: "Wednesday",
    time: "9:30 AM – 6:30 PM",
    location: "Church's Vestry",
    description:
      "An opportunity for members and visitors to meet with the Pastor for prayer, guidance, encouragement and fellowship.",
  },

  {
    id: "fw-2",
    name: "Women's Fellowship",
    day: "Tuesday, Thursday & Friday",
    time: "10:00 AM – 12:00 PM",
    location: "Home Fellowship",
    description:
      "A welcoming fellowship where women come together for prayer, biblical teaching, encouragement and spiritual growth.",
  },

  {
    id: "fw-3",
    name: "Men's Fellowship",
    day: "Sunday",
    time: "9:00 AM – 10:00 AM",
    location: "Men's Class",
    description:
      "A time for men to grow together through prayer, biblical teaching, fellowship and mutual encouragement.",
  },

  {
    id: "fw-4",
    name: "Youth Fellowship",
    day: "Sunday",
    time: "2:00 PM – 4:00 PM",
    location: "Youth Center",
    description:
      "A vibrant gathering for young people featuring worship, biblical teaching, fellowship, discussions and activities.",
  },
];

export const leadership: LeaderProfile[] = [
  {
    id: "leader-1",
    name: "Rev. Dr. Paul Kamunge",
    role: "Senior Pastor",
    bio:
      "Rev. Dr. Paul Kamunge provides spiritual leadership and pastoral guidance to the congregation, helping the church grow in faith, worship and service.",
    imagePlaceholder: "/placeholders/leaders/senior-pastor.jpg",
  },

  {
    id: "leader-2",
    name: "Rev. John Ngarawa",
    role: "Associate Pastor",
    bio:
      "Rev. John Ngarawa serves alongside the pastoral team in ministry, teaching, pastoral care and supporting the spiritual growth of the congregation.",
    imagePlaceholder: "/placeholders/leaders/associate-pastor.jpg",
  },

  {
    id: "leader-3",
    name: "Elder Geofery",
    role: "Chairman",
    bio:
      "Elder Geofery provides leadership and support in the administration and ministry of the church, working together with the pastoral team and congregation.",
    imagePlaceholder: "/placeholders/leaders/head-elder.jpg",
  },

  {
    id: "leader-4",
    name: "Mrs. Njenga",
    role: "Chairlady",
    bio:
      "Mrs. Njenga serves the church through leadership, coordination and support of various activities that strengthen fellowship and community within the congregation.",
    imagePlaceholder: "/placeholders/leaders/worship-director.jpg",
  },
];

export const aboutContent = {
  mission:
    "To proclaim the Gospel of Jesus Christ, nurture believers in faith and fellowship, and serve God and the community through worship, discipleship, prayer and Christian service.",

  story:
    "AIC Tharuni Hephzibah Church is a Christian community committed to worshipping God, teaching His Word and building a strong fellowship among believers. The church provides a place where people can come together in faith, grow spiritually, support one another and serve the wider community. Through worship services, fellowships, Church School, youth ministry and other church activities, the congregation seeks to share the love of Christ and encourage people in their walk with God.",
};
