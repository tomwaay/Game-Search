//KEY d61f19d7e7b64105aed5263b23c4609a
//base url
const base_url = "https://api.rawg.io/api/";

//getting date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=d61f19d7e7b64105aed5263b23c4609a`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=d61f19d7e7b64105aed5263b23c4609a`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=d61f19d7e7b64105aed5263b23c4609a`;

export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;

//game details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=d61f19d7e7b64105aed5263b23c4609a`;

//game screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=d61f19d7e7b64105aed5263b23c4609a`;

//searched game
export const searchGameUrl = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9&key=d61f19d7e7b64105aed5263b23c4609a`;
