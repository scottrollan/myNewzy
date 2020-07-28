export const googleAuth = window.gapi.load('client:auth2', async () => {
  window.gapi.client.init({
    clientId:
      '363793726399-gmgdm1h7a62lum1m01l36v0b86uco1mv.apps.googleusercontent.com',
    scope: 'email',
  });
  const response = await window.gapi.auth2.getAuthInstance();
  return response;
});
