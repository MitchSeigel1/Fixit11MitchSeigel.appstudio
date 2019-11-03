let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]
favFoods.onshow=function(){
for (i = 0; i < goodFoods.length; i++) {
  lgFavFoods.addItem(goodFoods[i])
  }
}



lgFavFoods.onclick=function(choice){
  if (typeof(choice) == "object")   // user clicked the control
  return
  let foodChoice = goodFoods[choice]
  lblFood.value = `You picked ${foodChoice} -that is a great choice!`
  
}


btnNext.onclick=function(){
  ChangeForm(dessertVoting)
}
