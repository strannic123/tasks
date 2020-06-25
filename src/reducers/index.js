const initialState = [
  {
    id: 1,
    title: "Learn ReactJS",
    description: "Let`s learn React js today!",
    status: "In Progress"
  },
  {
    id: 1,
    title: "Learn Redux",
    description: "Let`s learn Redux js today!",
    status: "In Progress"
  }
]

const tasks = (state = {tasks: initialState}, action) => {
  return state
}