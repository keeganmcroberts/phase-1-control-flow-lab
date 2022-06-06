function scuberGreetingForFeet(distance){
  let result;
  if (distance < 400){
    result = 'This one is on me!'
  } else if (distance > 400, distance <2000){
    result = 'That will be twenty bucks.'
  } else if (distance > 2000, distance <2500){
    result = 'I will gladly take your thirty bucks.'
  } else if (distance > 2500){
    result = "No can do."
  }
  return result;

  // Write your code here!
}
scuberGreetingForFeet(199)
scuberGreetingForFeet(1500)
scuberGreetingForFeet(2001)
scuberGreetingForFeet(2501)


function ternaryCheckCity(city){
  const message = city === "NYC" ? 'Ok, sounds good.' : 'No go.';
  return message 
}
ternaryCheckCity("NYC");
ternaryCheckCity("Pittsburgh");

  // Write your code here!


function switchOnCharmFromTip(tip){
  let message;
  switch (tip) {
    case 'generous':
      message = "Thank you so much."
      break;
    case 'not as generous':
      message = "Thank you."
      break;
    case 'thanks for everything':
      message = "Bye."
      break;
  }
  return message 
  // Write your code here!
}