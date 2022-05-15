const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getUsername = state => state.auth.user.name;
const getIsCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsCurrentUser,
  getUsername,
};
export default authSelectors;
