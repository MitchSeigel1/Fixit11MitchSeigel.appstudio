var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
  selExercises.clear()   
  for (i = 0; i < exercises.length; i++) {
  selExercises.addItem(exercises[i])
  }
}

selExercises.onfocusout=function(workout){
  if (typeof(workout) == "object")   

  return
}



btnEnter.onclick=function(){
  let message = "You chose: " 
  for (i = 0; i <= selExercises.text.length - 1; i++)
     message = message + selExercises.text[i] + " and "
  NSB.MsgBox(message)
}



btnNextPage.onclick=function(){
  ChangeForm(mobileNav)
}
