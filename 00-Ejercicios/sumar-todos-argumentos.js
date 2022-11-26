console.log(sumarTodo(5, 4, 13, 10, 9, 10, 11));

function sumarTodo() {
  let sumatoria = 0;
  for (let index = 0; index < arguments.length; index++) {
    sumatoria += arguments[index];
  }
  return sumatoria;
}
