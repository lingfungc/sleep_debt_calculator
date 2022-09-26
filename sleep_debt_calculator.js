const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 6;
    case 'tuesday':
      return 6;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 6;
    case 'friday':
      return 6;
    case 'saturday':
      return 8;
    case 'sunday':
      return 8;
  }
};

const getActuralSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

const getIdealSleepHours = idealHours => {
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHoours = getActuralSleepHours();
  const idealSleepHoours = getIdealSleepHours(8);

  const hoursDebt = idealSleepHoours - actualSleepHoours;

  if (actualSleepHoours === idealSleepHoours) {
    console.log('You got perfect amount of sleep.');
  } else if (actualSleepHoours > idealSleepHoours) {
    console.log('You got more sleep than needed.');
  } else {
    console.log(`You got ${hoursDebt} hour(s) less sleep than you needed this week. Get some rest.`);
  }
}

calculateSleepDebt();
