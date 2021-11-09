const fetchStart = async () => {
  const content = document.querySelector('.wrapper');

  const response = await fetch('./Pages/Start/start.html');
  const startHtml = await response.text();
  content.innerHTML = startHtml;
};
export default fetchStart;
