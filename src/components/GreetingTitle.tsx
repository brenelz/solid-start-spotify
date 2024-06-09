export default function GreeetingTitle() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good night";
  }

  return (
    <h1 class="text-3xl font-bold">{greeting}</h1>
  )
}

