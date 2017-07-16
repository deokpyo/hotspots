import $ from 'jquery';

export const login = (user, success, error) => {
  $.ajax({
    method: 'post',
    url: 'admin/login',
    data: user,
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    method: 'post',
    url: 'admin/logout',
    success,
    error: () => {
      console.log("Logout error in SessionApiUtil#logout");
    }
  });
};

export const signup = (user, success, error) => {
  $.ajax({
    method: 'post',
    url: 'admin/register',
    success,
    error: () => {
      console.log('Sign Up error');
    }
  });
}
