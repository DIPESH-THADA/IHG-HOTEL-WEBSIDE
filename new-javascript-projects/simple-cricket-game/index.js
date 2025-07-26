const bat = document.getElementById('bat')
const ball = document.getElementById('ball')
const stump = document.getElementById('stump')

bat.addEventListener('click', () => {
  let computerChoice
const userChoiceMsg = 'you have choosen bat'
  let randomNumber = Math.random() * 3
  if(randomNumber > 0 && randomNumber <= 1) {
    computerChoice = 'Bat'
    /* console.log('computerChoice is bat') */
  } else if(randomNumber > 1 && randomNumber <= 2){
    computerChoice = 'Ball'
    /* console.log('computerChoice is ball') */
  } else{
    computerChoice = 'stump'
    /* console.log('computerChoice is stump') */
  }

  let resutlMsg;
  if(computerChoice === 'ball'){
    resutlMsg = "user won"
  }else if(computerChoice === 'bat') {
    resutlMsg = "it's a tie"
  }else if(computerChoice === 'stump'){
    resutlMsg = 'computer has won'
  }

  alert(`you have choosen bat. computer choice is ${computerChoice} and  ${resutlMsg}`)
})



ball.addEventListener('click', () => {
  let computerChoice
  const userChoiceMsg = 'you have choosen bat'
    let randomNumber = Math.random() * 3
    if(randomNumber > 0 && randomNumber <= 1) {
      computerChoice = 'Bat'
      /* console.log('computerChoice is bat') */
    } else if(randomNumber > 1 && randomNumber <= 2){
      computerChoice = 'Ball'
      /* console.log('computerChoice is ball') */
    } else{
      computerChoice = 'stump'
      /* console.log('computerChoice is stump') */
    }
  
    let resutlMsg
    if(computerChoice === 'ball'){
      resutlMsg = "it's a tie"
    }else if(computerChoice === 'bat') {
      resutlMsg = "computer has won "
    }else if(computerChoice === 'stump'){
      resutlMsg = 'user won'
    }
  
    alert(`you have choosen bat. computer choice is ${computerChoice} and  ${resutlMsg}`)
  })
  
stump.addEventListener('click', () => {
  let computerChoice
  const userChoiceMsg = 'you have choosen bat'
    let randomNumber = Math.random() * 3
    if(randomNumber > 0 && randomNumber <= 1) {
      computerChoice = 'Bat'
      /* console.log('computerChoice is bat') */
    } else if(randomNumber > 1 && randomNumber <= 2){
      computerChoice = 'Ball'
      /* console.log('computerChoice is ball') */
    } else{
      computerChoice = 'stump'
      /* console.log('computerChoice is stump') */
    }
  
    let resutlMsg
    if(computerChoice === 'ball'){
      resutlMsg = "computer has won"
    }else if(computerChoice === 'bat') {
      resutlMsg = "user won"
    }else if(computerChoice === 'stump'){
      resutlMsg = "it's a tie"
    }
  
    alert(`you have choosen bat. computer choice is ${computerChoice} and  ${resutlMsg}`)
  })