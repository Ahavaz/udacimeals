import { 
  ADD_RECIPE, 
  REMOVE_FROM_CALENDAR
} from '../actions'

const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

const meals = {
  breakfast: null,
  lunch: null,
  dinner: null
}

const initialCalendarState = weekdays.reduce((obj, weekday) => ({
  ...obj, [weekday]: meals
}), {})

const calendar = (state = initialCalendarState, action) => {
  const { day, recipe, meal } = action

  switch(action.type) {
    case 'ADD_RECIPE':
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label
        }
      }
    case 'REMOVE_FROM_CALENDAR':
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null
        }
      }
    default:
      return state
  }
}

export default calendar