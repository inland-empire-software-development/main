export default function handle(req, res) {
  const apiUrl = "https://api.meetup.com/iesd-meetup/events";

  fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        return res.json(result);
      });
}
