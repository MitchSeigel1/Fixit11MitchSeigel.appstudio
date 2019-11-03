let traitList = ["Optimistic", "Pessimistic", "Trusting", "Envious"]

rdoPersonType.onchange=function(){
if (rdoPersonType.value == 0) { // picked the first choice
      lblTrait.value = "I would agree that you are a Optimistic person too!"
  } else if (rdoPersonType.value == 1) {
      lblTrait.value = "I would agree that you are a Pessimistic person too!"
  } else if (rdoPersonType.value == 2) {
      lblTrait.value = "I would agree that you are a Trusting person too!"
  } else if (rdoPersonType.value == 3) {
      lblTrait.value = "I would agree that you are a Envious person too!"
    } else {
      NSB.MsgBox("Not an Option.")
  }
}

