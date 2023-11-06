import Home from "../components/pages/Home";
import Bookings from "../components/pages/Bookings";
import ConfirmedBooking from "../components/pages/Bookings/ConfirmedBooking";
import ComingSoon from "../components/pages/ComingSoon";

const pages = [
  { key: "home", name: "Home", path: "/", component: Home, anchorable: true },
  {
    key: "about",
    name: "About",
    path: "/about",
    component: ComingSoon,
    anchorable: true,
  },
  {
    key: "menu",
    name: "Menu",
    path: "/menu",
    component: ComingSoon,
    anchorable: true,
  },
  {
    key: "bookings",
    name: "Reservations",
    path: "/bookings",
    component: Bookings,
    anchorable: true,
  },
  {
    key: "confirmedBooking",
    name: "Confirmed Booking",
    path: "/confirmed-booking",
    component: ConfirmedBooking,
    anchorable: false,
  },
  {
    key: "orderOnline",
    name: "Order Online",
    path: "/order-online",
    component: ComingSoon,
    anchorable: true,
  },
  {
    key: "login",
    name: "Login",
    path: "/login",
    component: ComingSoon,
    anchorable: true,
  },
];

export default pages;
