const urlLinks = [
  {
    id: 1,
    title: "Challenges",
    url: "/challenges",
  },
  {
    id: 2,
    title: "Leaderboard",
    url: "/leaderboard",
  },
  {
    id: 3,
    title: "About Us",
    url: "/about-us",
  },
];
// Base url
const baseUrl = "https://syntax-spring-dev.railway.internal";
// Challenges urls
const getChallengesEndPoint = "/challenges/api/v1/all";
// Auth urls
const authEndPoint = "/auth/users/check-auth";
const signInEndPoint = "/auth/users/sign-in";
const signUpEndPoint = "/auth/users/sign-up";
const verificationEndPoint = "/auth/users/verify-account";
const logOutEndPoint = "/auth/users/log-out";
const forgotPasswordEndPoint = "/auth/users/forgot-password";
const resetPasswordEndPoint = "/auth/users/reset-password";
const deleteAccountEndPoint = "/auth/users/delete-account";
const aiEndPoint = "/assist/api/v1/ai";

export {
  urlLinks,
  authEndPoint,
  baseUrl,
  signInEndPoint,
  getChallengesEndPoint,
  signUpEndPoint,
  verificationEndPoint,
  logOutEndPoint,
  forgotPasswordEndPoint,
  resetPasswordEndPoint,
  deleteAccountEndPoint,
  aiEndPoint,
};
