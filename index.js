function scuberGreetingForFeet(ride){
  let message

  if (ride <=400 ) {
    message = 'This one is on me!';
  }
  else if (ride >2500 ){
    message = 'No can do.';
  }
    else if (ride >2000 ){
      message = 'I will gladly take your thirty bucks.';
    }
      
  return message
    }
  


function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}
   
  


function switchOnCharmFromTip(tip){
  switch (tip){
    case tip = 'generous':
    return 'Thank you so much.'
    case tip = 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}